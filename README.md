# IranDirect Releases

مخزن عمومی دانلود و به‌روزرسانی IranDirect؛ افزونه‌ای برای بازکردن مستقیم سایت‌های ایرانی و عبور سایر سایت‌ها از پراکسی محلی VPN.

[![نصب از Chrome Web Store](https://img.shields.io/badge/Chrome%20Web%20Store-Install-1a73e8?logo=googlechrome&logoColor=white)](https://chromewebstore.google.com/detail/irandirect/fonmpdakgnbdbpcjebhnedocmohjmaeb)

> **حریم خصوصی / Privacy:** [IranDirect Privacy Policy](PRIVACY.md)

## نصب پیشنهادی

نسخه رسمی IranDirect از Chrome Web Store نصب می‌شود و به‌روزرسانی‌های بعدی را مستقیماً از Chrome دریافت می‌کند:

- [نصب IranDirect از Chrome Web Store](https://chromewebstore.google.com/detail/irandirect/fonmpdakgnbdbpcjebhnedocmohjmaeb)

شناسه رسمی افزونه: `fonmpdakgnbdbpcjebhnedocmohjmaeb`

## نصب سازمانی برای ویندوز شرکت

- [دانلود IranDirectSetup v0.4.0](https://github.com/ahmadisetup/IranDirect-Releases/releases/download/v0.4.0/IranDirectSetup-v0.4.0.exe)
- [مشاهده SHA-256 نصب‌کننده](https://github.com/ahmadisetup/IranDirect-Releases/releases/download/v0.4.0/IranDirectSetup-v0.4.0.exe.sha256)
- [صفحه انتشار v0.4.0](https://github.com/ahmadisetup/IranDirect-Releases/releases/tag/v0.4.0)

VPN را متصل کنید، فایل Setup را با دسترسی Administrator اجرا کنید و روی «نصب IranDirect» بزنید. نصب‌کننده System Proxy ویندوز را تشخیص می‌دهد، افزونه را با شناسه ثابت در Chrome ثبت می‌کند و برنامه کوچک تشخیص پورت را نصب می‌کند. در پایان Chrome را کاملاً ببندید و دوباره اجرا کنید؛ افزونه در `chrome://extensions` دیده می‌شود.

**پیش‌نیاز Chrome:** نصب خودکار نسخه شرکتی خارج از Chrome Web Store فقط روی رایانه Windows عضو Microsoft Active Directory پشتیبانی می‌شود. دسترسی Administrator به‌تنهایی کافی نیست. روی رایانه Workgroup از نسخه رسمی Chrome Web Store یا ZIP و `Load unpacked` استفاده کنید. پس از نصب شرکتی، در `chrome://policy` وضعیت `ExtensionSettings` باید `OK` باشد.

این فایل فعلاً گواهی تجاری Code Signing ندارد؛ ممکن است Windows SmartScreen هشدار بدهد. در محیطی که فایل از همین صفحه رسمی دریافت و SHA-256 آن بررسی شده است، از **More info → Run anyway** استفاده کنید. برای حذف نسخه شرکتی، همان Setup را دوباره اجرا و «حذف نسخه شرکتی» را انتخاب کنید.

## نصب دستی دوستانه

- [دانلود ZIP نسخه v0.4.0](downloads/iran-direct-v0.4.0-friends.zip)
- [مشاهده SHA-256 فایل ZIP](downloads/iran-direct-v0.4.0-friends.zip.sha256)
- [اطلاعات ماشینی آخرین نسخه](latest.json)

ZIP را کامل Extract کنید، در Chrome به `chrome://extensions` بروید، **Developer mode** را روشن کنید و پوشه استخراج‌شده را با **Load unpacked** انتخاب کنید. نسخه Load unpacked برای نصب دستی و آزمایش است و فایل‌های خود افزونه را خودکار تعویض نمی‌کند.

## به‌روزرسانی‌ها

- نسخه Chrome Web Store به‌صورت خودکار توسط Chrome به‌روزرسانی می‌شود.
- نسخه شرکتی امضاشده از مسیر به‌روزرسانی عمومی IranDirect نسخه‌های بعدی افزونه را خودکار دریافت می‌کند.
- فهرست سایت‌های ایرانی از [`lists/iranian-domains.json`](lists/iranian-domains.json) به‌صورت روزانه داخل افزونه بررسی می‌شود.
- دکمه «به‌روزرسانی اکنون» در تنظیمات، فهرست را فوراً دریافت می‌کند.
- اگر دریافت یا اعتبارسنجی شکست بخورد، آخرین فهرست سالم روی دستگاه حفظ می‌شود.

## منبع فهرست

فهرست غیر `.ir` با افزوده‌های بررسی‌شده IranDirect شروع می‌شود و گردش‌کار روزانه، دسته‌های ایرانی پروژه MITِ [v2fly/domain-list-community](https://github.com/v2fly/domain-list-community) را به‌صورت بازگشتی دریافت، پاک‌سازی، مرتب و اعتبارسنجی می‌کند. تمام دامنه‌های `.ir` بدون نیاز به فهرست، توسط خود افزونه مستقیم می‌شوند.

فایل [`lists/curated-domains.json`](lists/curated-domains.json) برای اصلاحات و افزوده‌های دستی نگهداری می‌شود. برای پیشنهاد افزودن یا حذف دامنه، یک Issue باز کنید.

## بررسی سلامت فایل

در PowerShell:

```powershell
Get-FileHash .\IranDirectSetup-v0.4.0.exe -Algorithm SHA256
```

هش صحیح نصب‌کننده:

```text
df33c3accb3086e4383bc13bf797b9895ebc2cd1b09667183d4281d3469bf782
```

SHA-256 سالم‌بودن فایل دانلودشده را بررسی می‌کند؛ DRM یا مانع قطعی مهندسی معکوس نیست.

## پشتیبانی

- توسعه‌دهنده: [Ahmadisetup](https://github.com/ahmadisetup)
- ایمیل: [ahmadi.itco@gmail.com](mailto:ahmadi.itco@gmail.com)
- حریم خصوصی: [PRIVACY.md](PRIVACY.md)
