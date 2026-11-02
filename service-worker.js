// غيّر رقم النسخة ده كل مرة تعدل ملفات الموقع، عشان المتصفح يحمّل الجديد
const CACHE = 'fuji-cache-v5';

const APP_SHELL = [
  './',
  './index.html',
  './style.css',
  './data.js',
  './images.js',
  './script.js',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(APP_SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // الصفحة الرئيسية: الشبكة الأول، ولو مفيش نت يرجع للنسخة المحفوظة
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put('./index.html', copy));
          return res;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // خطوط جوجل: نعرض المحفوظ فوراً ونحدّثه في الخلفية
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(
      caches.open(CACHE).then((cache) =>
        cache.match(req).then((cached) => {
          const network = fetch(req).then((res) => { cache.put(req, res.clone()); return res; }).catch(() => cached);
          return cached || network;
        })
      )
    );
    return;
  }

  // باقي الملفات من نفس الموقع: من الكاش أولاً
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(req).then((cached) => cached || fetch(req).then((res) => {
        if (res.ok) caches.open(CACHE).then((c) => c.put(req, res.clone()));
        return res;
      }))
    );
  }
  // أي حاجة تانية (زي الخريطة) بتتحمل من النت عادي
});
