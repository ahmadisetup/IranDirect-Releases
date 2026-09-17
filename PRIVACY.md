# IranDirect Privacy Policy

**Effective date:** 2026-09-18

IranDirect is a browser extension that applies split-routing rules inside Chrome: selected Iranian domains can connect directly while other domains use a local proxy configured by the user.

## What IranDirect does not collect

IranDirect does **not** collect, sell, rent, profile, or transmit your browsing history, page contents, search history, passwords, authentication data, personal communications, financial information, health information, precise location, or personally identifying information to the developer.

IranDirect contains no advertising SDK, analytics SDK, telemetry, tracking pixel, or user-profiling system.

## Data processed locally

IranDirect stores the following information locally in `chrome.storage.local` on the user's device:

- local proxy type, host, and port;
- whether IranDirect and its routing options are enabled;
- user-created Direct / Proxy domain rules;
- the downloaded official Iranian-domain list and its update metadata;
- the result and timestamp of the most recent proxy connection test.

When the user opens the extension popup, IranDirect temporarily reads the hostname of the active tab so it can show that site's current route. The hostname is not sent to the developer. It is stored only if the user explicitly chooses to create a routing rule for that domain.

These local settings remain on the device until the user changes or resets them, clears extension data, or uninstalls the extension.

## Network requests made by the extension

IranDirect makes only the network requests needed for its routing features:

1. **Official domain-list update** — IranDirect periodically downloads a public JSON domain list from `raw.githubusercontent.com` and can also update it when the user clicks the update button. The request does not contain the user's browsing history or visited domains.
2. **Proxy connection test and local-port detection** — when the user explicitly starts a connection test or port detection, IranDirect may request GitHub's public `api.github.com/zen` endpoint through the configured local proxy. The response body is discarded. IranDirect stores only whether the test succeeded, the time of the test, and a local error state when applicable.

These third-party endpoints may receive ordinary connection metadata that any web request normally exposes (for example IP address and HTTP headers) according to GitHub's own privacy practices. IranDirect does not add browsing history, visited domains, account identifiers, or profile information to these requests.

## Permissions

- **proxy** — required to install the PAC routing configuration that selects Direct or the user's local proxy for each domain.
- **activeTab** — used only after the user invokes the extension, so IranDirect can display and change the route for the active site's hostname.
- **storage** — stores settings and routing rules locally.
- **alarms** — schedules the official domain-list refresh.
- **raw.githubusercontent.com host access** — used only to download IranDirect's public JSON domain list.

The Chrome Web Store build does not use Native Messaging and does not install or communicate with a native desktop helper.

## Data sharing and sale

IranDirect does not sell user data. The developer does not receive or share the locally stored settings or domain rules with third parties.

## Security

The official remote list is fetched over HTTPS and is treated strictly as JSON data containing domain strings. IranDirect does not download or execute remote JavaScript or other remote code.

## Changes

If this policy changes materially, the updated policy will be published in this repository with a new effective date.

## Contact

Developer: Ahmadisetup  
Support: ahmadi.itco@gmail.com

---

# سیاست حریم خصوصی IranDirect

**تاریخ اجرا: ۲۷ شهریور ۱۴۰۵ / ۱۸ سپتامبر ۲۰۲۶**

IranDirect برای مسیریابی تفکیکی داخل Chrome طراحی شده است؛ دامنه‌های ایرانی انتخاب‌شده می‌توانند مستقیم باز شوند و سایر دامنه‌ها از پراکسی محلی تنظیم‌شده توسط کاربر عبور کنند.

IranDirect تاریخچه مرور، محتوای صفحات، جستجوها، رمزهای عبور، اطلاعات ورود، پیام‌های شخصی، اطلاعات مالی یا پزشکی، موقعیت دقیق یا اطلاعات هویتی کاربران را برای توسعه‌دهنده جمع‌آوری یا ارسال نمی‌کند و هیچ سیستم تبلیغات، آمارگیری، تله‌متری یا ردیابی کاربر ندارد.

تنظیمات پراکسی، قواعد Direct/VPN، فهرست دامنه‌ها و نتیجه آخرین تست اتصال فقط روی دستگاه کاربر در `chrome.storage.local` نگهداری می‌شوند. هنگام بازکردن پنجره افزونه، فقط نام دامنه تب فعال برای نمایش مسیر آن سایت خوانده می‌شود و به توسعه‌دهنده ارسال نمی‌شود؛ این دامنه فقط زمانی ذخیره می‌شود که خود کاربر برای آن یک قانون مسیریابی بسازد.

افزونه برای دریافت فهرست رسمی دامنه‌ها به `raw.githubusercontent.com` متصل می‌شود. همچنین فقط هنگام درخواست صریح کاربر برای تست اتصال یا تشخیص پورت، ممکن است از مسیر پراکسی به endpoint عمومی `api.github.com/zen` درخواست بفرستد. هیچ تاریخچه مرور یا دامنه بازدیدشده‌ای به این درخواست‌ها افزوده نمی‌شود.

نسخه Chrome Web Store از Native Messaging یا برنامه کمکی ویندوز استفاده نمی‌کند.
