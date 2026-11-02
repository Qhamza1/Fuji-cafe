const T = {
  ar: {
    nav_menu: 'المنيو', nav_visit: 'زورنا', favs: 'الأكثر طلبًا',
    cta_menu: 'المنيو', cta_wa: 'واتساب', cta_call: 'اتصل',
    follow: 'تابعنا', pay: 'ادفع بـ InstaPay أو فودافون كاش', email_lbl: 'للتواصل معانا:',
    search: 'دوّر على صنف...', none: 'مفيش نتايج. جرّب كلمة تانية.',
    note_price: 'كل الأسعار بالجنيه المصري.',
    hours: 'مواعيد الشغل', where: 'العنوان', open_map: 'افتح في خرائط جوجل',
    about: 'فوجي... ركنك الهادي وسط كل الزحمة. مكان ياخدك من دوشة اليوم لراحة تستاهلها.',
    addr: CAFE.address_ar, lang: 'EN', open: 'مفتوح الآن', closed: 'مغلق · يفتح 10 ص',
    badges: { 'New Item': 'جديد' },
    days: { Saturday: 'السبت', Sunday: 'الأحد', Monday: 'الإثنين', Tuesday: 'الثلاثاء', Wednesday: 'الأربعاء', Thursday: 'الخميس', Friday: 'الجمعة' },
    cols: { Cone: 'كون', Bites: 'بايتس', Ice: 'بارد', Hot: 'سخن', S: 'سنجل', D: 'دوبل', 'PC 12': '12 قطعة', 'PC 24': '24 قطعة' },
    cats: { 'Sweet Chimney': 'شيمني حلو', 'Savorey Chimney': 'شيمني مالح', 'Waffle Square': 'وافل', 'Mini Pancakes': 'ميني بان كيك', Taiyaki: 'تايياكي', Tacos: 'تاكوس', 'Dragon Balls': 'دراجون بولز', Desserts: 'حلويات', Mochi: 'موتشي', Sundae: 'صنداي', Milkshake: 'ميلك شيك', Frappe: 'فرابيه', Frappuccino: 'فرابتشينو', Smoothie: 'سموذي', 'Soda Boba': 'صودا بوبا', 'Fresh Juice': 'عصاير فريش', 'Ice Coffee': 'قهوة مثلجة', Matcha: 'ماتشا', Espresso: 'إسبريسو', Speciality: 'سبيشالتي', 'Turkish Coffee': 'قهوة تركي', 'Hot Drinks': 'مشروبات ساخنة', 'Soft Drinks': 'مشروبات غازية', Extra: 'إضافات' }
  },
  en: {
    nav_menu: 'Menu', nav_visit: 'Visit us', favs: 'Favorites',
    cta_menu: 'Menu', cta_wa: 'WhatsApp', cta_call: 'Call',
    follow: 'Follow us', pay: 'Pay with InstaPay or Vodafone Cash', email_lbl: 'Contact us:',
    search: 'Search the menu...', none: 'Nothing found. Try another word.',
    note_price: 'All prices in Egyptian pounds (EGP).',
    hours: 'Opening hours', where: 'Address', open_map: 'Open in Google Maps',
    about: 'Your quiet corner in the middle of the crowd, a place that takes you away from the noise of the day to the rest you deserve.',
    addr: CAFE.address_maps, lang: 'AR', open: 'Open now', closed: 'Closed · opens 10 AM',
    badges: {},
    days: {}, cols: {}, cats: { 'Savorey Chimney': 'Savory Chimney' }
  }
};
// صورة كل قسم (من images.js)
const CATIMG = { 'Sweet Chimney': 'chimney', 'Savorey Chimney': 'savory', 'Waffle Square': 'waffle', 'Mini Pancakes': 'pancakes', Taiyaki: 'taiyaki', Tacos: 'tacos', 'Dragon Balls': 'dragon', Desserts: 'brownie', Mochi: 'mochi', Sundae: 'sundae', Milkshake: 'milkshake', Frappe: 'frappe', Frappuccino: 'frappuccino', 'Soda Boba': 'soda', 'Fresh Juice': 'juice', 'Ice Coffee': 'icecoffee', Matcha: 'matcha', Espresso: 'latte', Speciality: 'v60', 'Turkish Coffee': 'pot', 'Soft Drinks': 'redbull' };
// الأكثر طلبًا
const FAV = [
  ['matcha', 'Matcha', 'Matcha Latte', 'ماتشا لاتيه', 120], ['icecoffee', 'Ice Coffee', 'Ice Spanish Latte', 'آيس سبانش لاتيه', 130],
  ['frappuccino', 'Frappuccino', 'Frappuccino', 'فرابتشينو', 130], ['milkshake', 'Milkshake', 'Mixed Berry Shake', 'ميلك شيك ميكس بيري', 120],
  ['taiyaki', 'Taiyaki', 'Taiyaki', 'تايياكي', 125], ['pancakes', 'Mini Pancakes', 'Mini Pancakes', 'ميني بان كيك', 110],
  ['dragon', 'Dragon Balls', 'Dragon Balls', 'دراجون بولز', 130], ['sansebastian', 'Desserts', 'San Sebastian', 'سان سيباستيان', 130],
  ['mochi', 'Mochi', 'Mochi', 'موتشي', 80], ['chimney', 'Sweet Chimney', 'Chimney', 'شيمني', 120]
];
const $ = (s) => document.querySelector(s);
let lang = 'ar';
try { lang = localStorage.getItem('fuji-lang') || 'ar'; } catch (e) {}

function priceHTML(it, cols, t) {
  if (it.prices) return it.prices.map((p, i) => p == null ? '' : `<span>${cols ? `<i>${t.cols[cols[i]] || cols[i]}</i>` : ''}${p}</span>`).join('');
  return `<span>${it.price}</span>`;
}

function cairoNow() {
  const p = Object.fromEntries(new Intl.DateTimeFormat('en-US', { timeZone: 'Africa/Cairo', weekday: 'long', hour: 'numeric', minute: 'numeric', hour12: false }).formatToParts(new Date()).map((x) => [x.type, x.value]));
  return { day: p.weekday, min: (+p.hour % 24) * 60 + +p.minute };
}

function render() {
  const t = T[lang], q = $('#q').value.trim().toLowerCase(), now = cairoNow();
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach((el) => (el.textContent = t[el.dataset.i18n]));
  document.querySelectorAll('[data-i18n-ph]').forEach((el) => (el.placeholder = t[el.dataset.i18nPh]));
  $('#lang').textContent = t.lang;
  $('#about').textContent = t.about;
  $('#addr').textContent = t.addr;

  const late = now.day === 'Thursday' || now.day === 'Friday', isOpen = now.min >= 600 && now.min < (late ? 1440 : 1380);
  $('#state').textContent = isOpen ? t.open : t.closed;
  $('#state').className = 'state' + (isOpen ? ' on' : '');
  $('#hours').innerHTML = Object.entries(CAFE.hours).map(([d, h]) =>
    `<tr class="${d === now.day ? 'today' : ''}"><td>${t.days[d] || d}</td><td dir="ltr">${h}</td></tr>`).join('');

  $('#fav').innerHTML = FAV.map(([k, cat, en, ar, p]) => {
    const i = MENU.findIndex((c) => c.category === cat);
    return `<a href="#cat${i}"><img src="${IMG[k]}" alt="${en}" loading="lazy"><b>${lang === 'ar' ? ar : en}</b><span>${p}</span></a>`;
  }).join('');

  let html = '', chips = '';
  MENU.forEach((c, i) => {
    const name = t.cats[c.category] || c.category;
    const items = c.items.filter((it) => !q || [it.name, it.options, it.ar, it.opt_ar, name, c.category, T.ar.cats[c.category]].join(' ').toLowerCase().includes(q));
    if (!items.length) return;
    const im = CATIMG[c.category] ? `<img src="${IMG[CATIMG[c.category]]}" alt="" loading="lazy">` : '';
    chips += `<a href="#cat${i}">${name}</a>`;
    html += `<section class="cat" id="cat${i}"><div class="cat-h"><h3>${name}</h3>${im}</div>` +
      ((lang === 'ar' ? c.note_ar || c.note : c.note) ? `<p class="sub">${lang === 'ar' ? c.note_ar || c.note : c.note}</p>` : '') +
      `<ul class="items">` + items.map((it) => `<li><span class="n">${lang === 'ar' && it.ar ? it.ar : it.name}${it.badge ? `<span class="badge">${t.badges[it.badge] || it.badge}</span>` : ''}${it.options ? `<span class="o">${lang === 'ar' && it.opt_ar ? it.opt_ar : it.options}</span>` : ''}</span><span class="dots"></span><span class="p">${priceHTML(it, c.columns, t)}</span></li>`).join('') + `</ul></section>`;
  });
  $('#list').innerHTML = html;
  $('#chips').innerHTML = chips;
  $('#none').hidden = !!html;
}

$('#art').src = IMG.art;
$('#mk').src = IMG.mark;

function theme() { return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'; }
function applyTheme(t, save) {
  document.documentElement.setAttribute('data-theme', t);
  $('#tc').setAttribute('content', t === 'dark' ? '#1F1712' : '#FEF2E4');
  $('#logo').src = t === 'dark' ? IMG.logoLight : IMG.logo;
  if (save) { try { localStorage.setItem('fuji-theme', t); } catch (e) {} }
}
applyTheme(theme(), false);
$('#theme').addEventListener('click', () => applyTheme(theme() === 'dark' ? 'light' : 'dark', true));
// لو الشخص ما اختارش بإيده، نتابع إعداد الموبايل
if (window.matchMedia) {
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    let saved = null;
    try { saved = localStorage.getItem('fuji-theme'); } catch (x) {}
    if (!saved) applyTheme(e.matches ? 'dark' : 'light', false);
  });
}
$('#flogo').src = IMG.logoLight;
$('#wa').href = 'https://wa.me/' + CAFE.whatsapp.replace(/\D/g, '');
$('#call').href = 'tel:+2' + CAFE.phone;
$('#gmaps').href = 'https://www.google.com/maps/search/?api=1&query=Fuji+cafe+Kafr+El-Sheikh';
$('#soc-fb').href = CAFE.social.facebook;
$('#soc-ig').href = CAFE.social.instagram;
$('#soc-tt').href = CAFE.social.tiktok;
$('#pay-ip').href = CAFE.payment.instapay;
$('#pay-vf').href = CAFE.payment.vodafone_cash;
$('#mail').href = 'mailto:' + CAFE.email;
$('#mail-txt').textContent = CAFE.email;
$('#dev-name').textContent = CAFE.developer.name;
if (CAFE.developer.instagram) { $('#dev-ig').href = CAFE.developer.instagram; $('#dev-ig').hidden = false; }
if (CAFE.developer.whatsapp) { $('#dev-wa').href = 'https://wa.me/' + CAFE.developer.whatsapp.replace(/\D/g, ''); $('#dev-wa').hidden = false; }
if (!CAFE.developer.instagram && !CAFE.developer.whatsapp) $('#dev-links').hidden = true;
$('#q').addEventListener('input', render);
$('#lang').addEventListener('click', () => {
  lang = lang === 'ar' ? 'en' : 'ar';
  try { localStorage.setItem('fuji-lang', lang); } catch (e) {}
  render();
});
render();
