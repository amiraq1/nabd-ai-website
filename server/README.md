# إعداد خادم Strapi

هذا المجلد يحتوي على الهيكل الأساسي لخادم Strapi (Headless CMS) الخاص بالموقع.

**الخطوات المطلوبة لتشغيل Strapi:**

1.  **الانتقال إلى المجلد:**
    ```bash
    cd server
    ```

2.  **تثبيت الاعتماديات:**
    ```bash
    npm install
    # أو pnpm install
    ```

3.  **تشغيل خادم Strapi:**
    ```bash
    npm run develop
    ```

**بعد التشغيل:**

*   ستتمكن من الوصول إلى لوحة تحكم Strapi عبر الرابط المحلي (عادةً `http://localhost:1337/admin`).
*   يجب عليك إنشاء أنواع المحتوى (Content Types) التالية لتتوافق مع الواجهة الأمامية:
    *   **Single Type:** `HomeContent` (يحتوي على حقول: `main_title`, `sub_title`, `description`, `zaincash_number`).
    *   **Collection Type:** `Product` (يحتوي على حقول: `name`, `description`, `price`, `category`, `icon_name`).
*   تأكد من **نشر (Publish)** المحتوى ومنح **صلاحيات الوصول العامة (Public Role)** لنقاط النهاية (Endpoints) الخاصة بـ `HomeContent` و `Product` في إعدادات Strapi.

**لربط الواجهة الأمامية بـ Strapi:**

*   قم بتعيين متغير البيئة `VITE_STRAPI_API_URL` في ملف `.env` الخاص بالواجهة الأمامية (مجلد `client`) ليتطابق مع رابط API الخاص بخادم Strapi (مثلاً: `VITE_STRAPI_API_URL=https://your-strapi-domain.com/api`).
