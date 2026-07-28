import { readFile, writeFile } from "node:fs/promises";

const BASE_URL =
  "https://raw.githubusercontent.com/v2fly/domain-list-community/master/data";
const START_CATEGORY = "category-ir";
const CURATED_PATH = new URL("../lists/curated-domains.json", import.meta.url);
const OUTPUT_PATH = new URL("../lists/iranian-domains.json", import.meta.url);
const MIN_DOMAINS = 175;
const MAX_DOMAINS = 15_000;
const CATEGORY_NAME = /^[a-z0-9][a-z0-9_-]*$/;
const DOMAIN_LABEL = /^(?!-)[a-z0-9-]{1,63}(?<!-)$/i;

function normalizeDomain(value) {
  let domain = String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/^\*\./, "")
    .replace(/^\.+|\.+$/g, "");

  if (!domain || domain.length > 253 || domain.includes(":")) {
    return null;
  }

  const labels = domain.split(".");
  if (labels.length < 2 || labels.some((label) => !DOMAIN_LABEL.test(label))) {
    return null;
  }

  if (
    domain === "xn--mgba3a4f16a" ||
    domain === "ir" ||
    domain.endsWith(".ir")
  ) {
    return null;
  }

  return domain;
}

function sortedUnique(values) {
  return [...new Set(values)]
    .filter(Boolean)
    .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
}

async function fetchCategory(name, visited, domains) {
  if (!CATEGORY_NAME.test(name)) {
    throw new Error(`Invalid included category: ${name}`);
  }
  if (visited.has(name)) {
    return;
  }
  visited.add(name);

  const response = await fetch(`${BASE_URL}/${name}`, {
    headers: { Accept: "text/plain", "User-Agent": "IranDirect-Updater/1.0" }
  });
  if (!response.ok) {
    throw new Error(`Could not fetch ${name}: HTTP ${response.status}`);
  }

  for (const sourceLine of (await response.text()).split(/\r?\n/)) {
    const line = sourceLine.split("#", 1)[0].trim();
    if (!line) {
      continue;
    }

    const value = line.split(/\s+@/, 1)[0].trim();
    if (value.startsWith("include:")) {
      await fetchCategory(value.slice("include:".length), visited, domains);
      continue;
    }

    if (value.startsWith("regexp:") || value.startsWith("keyword:")) {
      continue;
    }

    const candidate = value.replace(/^(?:domain|full):/, "");
    const normalized = normalizeDomain(candidate);
    if (normalized) {
      domains.add(normalized);
    }
  }
}

const curatedPayload = JSON.parse(await readFile(CURATED_PATH, "utf8"));
const currentPayload = JSON.parse(await readFile(OUTPUT_PATH, "utf8"));
const domains = new Set(
  (curatedPayload.domains ?? curatedPayload).map(normalizeDomain).filter(Boolean)
);
const visited = new Set();

await fetchCategory(START_CATEGORY, visited, domains);

const nextDomains = sortedUnique(domains);
if (nextDomains.length < MIN_DOMAINS || nextDomains.length > MAX_DOMAINS) {
  throw new Error(
    `Refusing suspicious list size: ${nextDomains.length} domains`
  );
}

const previousDomains = sortedUnique(
  (currentPayload.domains ?? []).map(normalizeDomain).filter(Boolean)
);
if (
  currentPayload.generated === true &&
  (nextDomains.length < previousDomains.length * 0.6 ||
    nextDomains.length > previousDomains.length * 1.8)
) {
  throw new Error(
    `Refusing suspicious size change: ${previousDomains.length} -> ${nextDomains.length}`
  );
}

if (JSON.stringify(previousDomains) === JSON.stringify(nextDomains)) {
  console.log(`No domain changes (${nextDomains.length} domains).`);
  process.exit(0);
}

const now = new Date();
const version = [
  now.getUTCFullYear(),
  String(now.getUTCMonth() + 1).padStart(2, "0"),
  String(now.getUTCDate()).padStart(2, "0")
].join(".");

const payload = {
  version,
  updatedAt: now.toISOString(),
  generated: true,
  source: "v2fly/domain-list-community category-ir + IranDirect curated additions",
  sources: [
    "https://github.com/v2fly/domain-list-community",
    "https://github.com/ahmadisetup/IranDirect-Releases/blob/main/lists/curated-domains.json"
  ],
  domainCount: nextDomains.length,
  domains: nextDomains
};

await writeFile(OUTPUT_PATH, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
console.log(
  `Updated ${previousDomains.length} -> ${nextDomains.length} domains from ${visited.size} categories.`
);

