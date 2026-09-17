# IranDirect Privacy Policy

**Effective date:** 2026-09-18  
**Applies to:** IranDirect Chrome Web Store build and the public domain-list service used by it

IranDirect is a browser extension that applies split-routing rules inside Chrome: selected Iranian domains can connect directly while other domains use a local proxy configured by the user.

## Chrome Web Store data-use disclosure

IranDirect does **not collect or transmit off-device user data** for analytics, advertising, profiling, sale, or any unrelated purpose.

In particular, IranDirect does not collect or send to the developer:

- personally identifiable information;
- health or medical information;
- financial or payment information;
- authentication information or passwords;
- personal communications;
- precise location;
- browsing history;
- user activity such as clicks, keystrokes, or mouse movement;
- website page content.

IranDirect contains no advertising SDK, analytics SDK, telemetry, tracking pixel, or user-profiling system.

## Data processed locally

IranDirect stores only the settings needed for its functionality in `chrome.storage.local` on the user's device, including:

- local proxy type, host, and port;
- whether IranDirect and routing options are enabled;
- user-created Direct / Proxy domain rules;
- the downloaded official Iranian-domain list and update metadata;
- the result and timestamp of the most recent proxy connection test.

When the user opens the extension popup, IranDirect temporarily reads the hostname of the active tab so it can show that site's current route. The hostname is processed locally and is not sent to the developer. It is stored only if the user explicitly creates a routing rule for that domain.

These local settings remain on the device until the user changes or resets them, clears extension data, or uninstalls the extension.

## Network requests made by the extension

IranDirect makes only network requests required for its routing features:

1. **Official domain-list update** — the extension periodically downloads a public JSON domain list from `raw.githubusercontent.com`, and can also refresh it when the user clicks the update button. The request does not include browsing history, visited domains, account identifiers, or profile information.
2. **Proxy connection test / local-port detection** — when the user explicitly starts a connection test or port detection, IranDirect may contact a public connectivity-test endpoint through the configured local proxy. The response body is not used for analytics or profiling; only a local success/error state and timestamp are retained.

Third-party infrastructure involved in these ordinary HTTPS requests may receive standard connection metadata such as an IP address and HTTP headers under its own privacy practices. IranDirect does not add browsing history, visited domains, account identifiers, or profile information to these requests.

## Permissions

- **proxy** — required to install the PAC routing configuration that selects Direct or the user's local proxy for each domain.
- **activeTab** — used only after the user invokes the extension, so IranDirect can display and change the route for the active site's hostname.
- **storage** — stores settings and routing rules locally.
- **alarms** — schedules the official domain-list refresh.
- **Host access to the official list endpoint** — used only to download IranDirect's public JSON domain list.

The Chrome Web Store build does not use Native Messaging and does not install or communicate with a native desktop helper.

## Remote code

IranDirect does **not** download or execute remote JavaScript, WebAssembly, or other executable code. The official remote list is fetched over HTTPS and treated strictly as JSON data containing domain strings.

## Data sale, sharing, and prohibited uses

IranDirect does not sell user data. The developer does not receive or share locally stored settings or domain rules with third parties.

User data is not used or transferred for purposes unrelated to IranDirect's single purpose, and it is not used to determine creditworthiness or for lending purposes.

## Changes

If this policy changes materially, the updated policy will be published in this repository with a new effective date.

## Contact

Developer: [Ahmadisetup](https://github.com/ahmadisetup)  
Support: [ahmadi.itco@gmail.com](mailto:ahmadi.itco@gmail.com)

---

# سیاست حریم خصوصی IranDirect

**تاریخ اجرا: ۲۷ شهریور ۱۴۰۵ / ۱۸ سپتامبر ۲۰۲۶**

IranDirect برای مسیریابی تفکیکی داخل Chrome طراحی شده است؛ دامنه‌های ایرانی انتخاب‌شده می‌توانند مستقیم باز شوند و سایر دامنه‌ها از پراکسی محلی تنظیم‌شده توسط کاربر عبور کنند.

## چه اطلاعاتی جمع‌آوری نمی‌شود

IranDirect اطلاعات کاربر را برای تبلیغات، آمارگیری، پروفایل‌سازی، فروش یا اهداف نامرتبط جمع‌آوری یا به خارج از دستگاه ارسال نمی‌کند.

از جمله، اطلاعات هویتی، پزشکی، مالی، رمزهای عبور و اطلاعات ورود، پیام‌های شخصی، موقعیت دقیق، تاریخچه مرور، فعالیت‌های کاربر و محتوای صفحات وب برای توسعه‌دهنده ارسال نمی‌شوند.

افزونه هیچ SDK تبلیغاتی، Analytics، تله‌متری، Tracking Pixel یا سیستم پروفایل‌سازی کاربر ندارد.

## اطلاعاتی که فقط روی دستگاه پردازش می‌شوند

تنظیمات پراکسی، وضعیت فعال‌بودن افزونه، قواعد Direct/Proxy، فهرست رسمی دامنه‌ها و نتیجه آخرین تست اتصال فقط در `chrome.storage.local` روی دستگاه کاربر نگهداری می‌شوند.

هنگام بازکردن پنجره افزونه، فقط نام دامنه تب فعال برای نمایش مسیر همان سایت خوانده می‌شود. این نام دامنه به توسعه‌دهنده ارسال نمی‌شود و فقط اگر خود کاربر برای آن دامنه یک قانون مسیریابی ایجاد کند، روی دستگاه ذخیره می‌شود.

## ارتباطات شبکه

افزونه برای دریافت فهرست رسمی دامنه‌ها به endpoint عمومی IranDirect روی `raw.githubusercontent.com` متصل می‌شود. همچنین هنگام درخواست صریح کاربر برای تست اتصال یا تشخیص پورت، ممکن است یک درخواست آزمایشی از مسیر پراکسی محلی ارسال کند. هیچ تاریخچه مرور یا اطلاعات هویتی به این درخواست‌ها افزوده نمی‌شود.

## Remote Code

نسخه Chrome Web Store هیچ JavaScript یا WebAssembly خارجی را دانلود یا اجرا نمی‌کند. فایل آنلاین فهرست دامنه‌ها صرفاً JSON و شامل داده است، نه کد اجرایی.

## اشتراک‌گذاری و فروش اطلاعات

IranDirect اطلاعات کاربران را نمی‌فروشد. تنظیمات محلی و قواعد دامنه برای توسعه‌دهنده ارسال یا با اشخاص ثالث به اشتراک گذاشته نمی‌شوند و برای اهداف نامرتبط یا اعتبارسنجی مالی استفاده نمی‌شوند.

## تماس

توسعه‌دهنده: [Ahmadisetup](https://github.com/ahmadisetup)  
پشتیبانی: [ahmadi.itco@gmail.com](mailto:ahmadi.itco@gmail.com)
