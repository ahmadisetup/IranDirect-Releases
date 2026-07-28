# IranDirect Releases

مخزن عمومی دانلود و به‌روزرسانی [IranDirect](https://github.com/ahmadisetup/IranDirect-Releases)؛ افزونه‌ای برای بازکردن مستقیم سایت‌های ایرانی و عبور سایر سایت‌ها از پراکسی محلی VPN.

## دانلود

- [دانلود IranDirect v0.3.0](downloads/iran-direct-v0.3.0-friends.zip)
- [مشاهده SHA-256](downloads/iran-direct-v0.3.0-friends.zip.sha256)
- [اطلاعات آخرین نسخه](latest.json)

پس از دانلود، ZIP را کامل Extract کنید، در Chrome به `chrome://extensions` بروید، **Developer mode** را روشن کنید و پوشه استخراج‌شده را با **Load unpacked** انتخاب کنید.

## به‌روزرسانی‌ها

- فهرست سایت‌های ایرانی از [`lists/iranian-domains.json`](lists/iranian-domains.json) به‌صورت روزانه داخل افزونه بررسی می‌شود.
- دکمه «به‌روزرسانی اکنون» در صفحه تنظیمات، فهرست را فوراً دریافت می‌کند.
- اگر دریافت یا اعتبارسنجی شکست بخورد، آخرین فهرست سالم روی دستگاه حفظ می‌شود.
- نسخه‌ای که با **Load unpacked** نصب شده، فایل‌های خود افزونه را خودکار تعویض نمی‌کند. برای آن باید ZIP نسخه جدید را دستی نصب کرد؛ انتشار آینده در Chrome Web Store این محدودیت را برطرف می‌کند.

## منبع فهرست

فهرست غیر `.ir` با افزوده‌های بررسی‌شده IranDirect شروع می‌شود و گردش‌کار روزانه، دسته‌های ایرانی پروژه MITِ [v2fly/domain-list-community](https://github.com/v2fly/domain-list-community) را به‌صورت بازگشتی دریافت، پاک‌سازی، مرتب و اعتبارسنجی می‌کند. تمام دامنه‌های `.ir` بدون نیاز به فهرست، توسط خود افزونه مستقیم می‌شوند.

فایل [`lists/curated-domains.json`](lists/curated-domains.json) برای اصلاحات و افزوده‌های دستی نگهداری می‌شود. برای پیشنهاد افزودن یا حذف دامنه، یک Issue باز کنید.

## بررسی سلامت فایل

در PowerShell:

```powershell
Get-FileHash .\iran-direct-v0.3.0-friends.zip -Algorithm SHA256
```

خروجی را با فایل `.sha256` مقایسه کنید. SHA-256 اصالت و سالم‌بودن فایل دانلودشده را بررسی می‌کند؛ DRM یا مانع قطعی مهندسی معکوس نیست.

## پشتیبانی

- توسعه‌دهنده: [Ahmadisetup](https://github.com/ahmadisetup)
- ایمیل: [ahmadi.itco@gmail.com](mailto:ahmadi.itco@gmail.com)

