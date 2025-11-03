import axios from 'axios';

// استخدم متغير البيئة VITE_STRAPI_API_URL كرابط أساسي
// في حالة عدم تعيينه، استخدم رابط وهمي أو محلي
const API_BASE_URL = import.meta.env.VITE_STRAPI_API_URL || 'http://localhost:1337/api';

const strapiApi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default strapiApi;
