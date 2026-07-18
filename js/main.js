/* Adelaide Milano — main.js
   PLUMBING_V 1. Frutteria-café: lun-ven 07-19:30, sab 07-15, dom chiuso.
   Gesto-firma: «più di una frutteria» (le anime) + motivo foglia.
   GSAP SUBITO; reveal once; watchdog 1,5s. */

(function () {
  'use strict';
  var root = document.documentElement;
  root.classList.add('js');
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) root.classList.add('reduced-motion');

  /* ══════════ CONFIG PER-SITO (PLUMBING_V 1) ══════════ */
  var SITE = {
    slug: 'adelaide-milano',
    hours: {
      0: [],
      1: [['07:00', '19:30']],
      2: [['07:00', '19:30']],
      3: [['07:00', '19:30']],
      4: [['07:00', '19:30']],
      5: [['07:00', '19:30']],
      6: [['07:00', '15:00']],
    },
    hoursStatusId: 'orarioStato',
    hoursTableSelector: '#orariTable tr[data-day]',
    todayClass: 'is-today',
    introId: 'intro',
    introDuration: 1900,
    inViewClass: 'in-view',
    breakpointMenu: 920,
    EN: {
      'nav.anime': 'The souls', 'nav.frutta': 'Fruit', 'nav.colazione': 'Breakfast', 'nav.dove': 'Where & hours', 'nav.chiama': 'Call',
      'hero.rec': '449 reviews',
      'hero.kicker': 'More than a greengrocer — the spot you don’t expect',
      'hero.sub': 'Fruit and veg that turn into <strong>smoothies, crêpes and breakfast</strong> — among plants and flowers, with the terrace. On Piazzale Segesta.',
      'hero.cta1': 'Call: 377 091 9842', 'hero.cta2': 'The souls of Adelaide',
      'anime.kicker': 'Not just a fruit shop', 'anime.t1': 'The many souls', 'anime.t2': 'of Adelaide',
      'anime.lead': 'You come in for the fruit and find a place: <strong>the café you don’t expect</strong>. Six fresh worlds under the same neon sign.',
      'an.1t': 'Fruit & veg', 'an.1d': 'Fresh every day, plus fruit baskets to order.',
      'an.2t': 'Smoothies & juices', 'an.2d': 'Made on the spot — «delicious», they say.',
      'an.3t': 'Crêpes', 'an.3d': 'Sweet and savoury, for a light little break.',
      'an.4t': 'Breakfast & cakes', 'an.4d': 'Brioches, cakes, pastries. Coffee and tea.',
      'an.5t': 'Salads & boards', 'an.5d': 'Veg and vegan too, for a light lunch.',
      'an.6t': 'Plants & flowers', 'an.6d': 'The green you take home with you.',
      'fru.kicker': 'Fruit, veg & flowers', 'fru.t1': 'Freshness', 'fru.t2': 'on display',
      'fru.p1': 'Crates of fruit and veg chosen every day, and next to them plants and flowers: Adelaide’s window is already a good mood. «Exceptional» fruit and veg, customers say.',
      'fru.p2': 'And if you’re after a gift, the <strong>fruit baskets</strong> to order — small or large — always go down well.',
      'cen.kicker': 'Smoothies & juices', 'cen.t1': 'The fruit', 'cen.t2': 'you drink',
      'cen.p1': 'Juices and smoothies made on the spot from the fruit on the counter: the freshest way to take a break. «I recommend the juices, they’re delicious» — and in this heat, out on the <strong>terrace</strong>, it’s another story entirely.',
      'col.kicker': 'Breakfast & cakes', 'col.t1': 'From morning', 'col.t2': 'to afternoon tea',
      'col.p1': 'Brioches, muffins, cakes, pastries — sweet and savoury, for grown-ups and little ones alike. With a coffee, a cappuccino or a tea, to start the day gently.',
      'col.l1': 'Brioches & pastry-shop cakes', 'col.l2': 'Coffee, cappuccino & tea', 'col.l3': 'Salads & veg boards', 'col.l4': 'Sweet & savoury crêpes',
      'posto.kicker': 'The place', 'posto.t1': 'An intimate corner,', 'posto.t2': 'run by women',
      'posto.p1': 'Adelaide is a bright, welcoming place, where you stop to chat with friends and colleagues while enjoying the owner’s specialities. With a <strong>terrace</strong> for the fine days.',
      'posto.p2': 'A women-owned business, child-friendly and LGBTQ+ friendly: everyone is welcome here.',
      'gal.kicker': 'Adelaide', 'gal.t1': 'A look', 'gal.t2': 'inside',
      'rec.kicker': 'What people say', 'rec.t2': 'from 449 Google reviews',
      'rec.r1': '«Adelaide isn’t just a fruit and veg shop, but an intimate place to chat while enjoying the owner’s specialities. The vegetarian and vegan boards are excellent.»',
      'rec.r2': '«The café you don’t expect in Milan. Fruit and veg on display, cakes and brioches, smoothies… and the outdoor space with wooden tables. A lovely surprise!»',
      'rec.r3': '«A great spot for a juice or an omelette. I recommend the juices: they’re delicious.»',
      'rec.r4': '«A lovely place for lunch, breakfast or an afternoon snack. Great-quality food and child-friendly. The terrace is very pleasant.»',
      'dove.kicker': 'Where & hours', 'dove.t1': 'On Piazzale Segesta,', 'dove.t2': 'San Siro area',
      'dove.metro': 'Piazzale Segesta, 20148 Milan · San Siro area, steps from the M5 Segesta metro.',
      'dove.chiama': 'Call 377 091 9842', 'dove.apri': 'Open in Maps',
      'giorni.lun': 'Monday', 'giorni.mar': 'Tuesday', 'giorni.mer': 'Wednesday', 'giorni.gio': 'Thursday', 'giorni.ven': 'Friday', 'giorni.sab': 'Saturday', 'giorni.dom': 'Sunday', 'giorni.chiuso': 'Closed',
      'faq.kicker': 'Frequently asked questions',
      'faq.q1': 'What can you find at Adelaide?', 'faq.a1': 'Fresh fruit and veg, smoothies and juices, sweet and savoury crêpes, breakfast, brioches and cakes, salads and veg and vegan boards. And then plants and flowers. More than a greengrocer.',
      'faq.q2': 'Can I eat in?', 'faq.a2': 'Yes: an intimate spot with a terrace, to stop for breakfast, lunch or an afternoon snack. Child-friendly and LGBTQ+ friendly.',
      'faq.q3': 'Do you make fruit baskets?', 'faq.a3': 'Yes, to order, small and large — a fresh little gift that’s perfect to give.',
      'faq.q4': 'When are you open?', 'faq.a4': 'Monday to Friday 7:00am–7:30pm; Saturday 7:00am–3:00pm. Closed Sunday.',
      'faq.q5': 'Where are you?', 'faq.a5': 'On Piazzale Segesta in Milan, San Siro area. Phone 377 091 9842.',
      'foot.dove': 'Piazzale Segesta, 20148 Milan · <a href="tel:+393770919842">377 091 9842</a>',
      'foot.demo': 'Demo website (concept) by Bespoke Studio, built from public data and photos — this is not the official website of the business.',
      'bar.chiama': 'Call', 'bar.orari': 'Hours', 'bar.mappa': 'Directions'
    },
  };
  /* ═══════════════════════════════════════════════════ */

  var hasGsap = typeof gsap !== 'undefined';
  var hasST = hasGsap && typeof ScrollTrigger !== 'undefined';
  if (hasST) gsap.registerPlugin(ScrollTrigger);

  function showAllReveals() {
    var els = document.querySelectorAll('.reveal, .reveal-hero');
    els.forEach(function (el) { el.classList.add(SITE.inViewClass); });
    if (hasGsap) { gsap.set(els, { opacity: 1, y: 0 }); }
    else { els.forEach(function (el) { el.style.opacity = 1; }); }
  }
  setTimeout(showAllReveals, 1500);

  if (hasGsap && !reducedMotion) {
    gsap.utils.toArray('.reveal').forEach(function (el) {
      gsap.fromTo(el, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: .7, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
    });
    gsap.to('#heroPhoto', { yPercent: 8, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
  } else {
    document.querySelectorAll('.reveal, .reveal-hero').forEach(function (el) { el.classList.add(SITE.inViewClass); el.style.opacity = 1; });
  }

  /* hero entrance */
  function heroEntrance() {
    if (!hasGsap || reducedMotion) { document.querySelectorAll('.reveal-hero').forEach(function (el) { el.style.opacity = 1; }); return; }
    gsap.timeline({ defaults: { ease: 'power3.out' } })
      .to('.hero__badge', { opacity: 1, y: 0, duration: .5 }, .05)
      .fromTo('.hero__title', { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: .8 }, .18)
      .to('.hero__kicker', { opacity: 1, y: 0, duration: .5 }, .5)
      .to('.hero__sub', { opacity: 1, y: 0, duration: .6 }, .62)
      .to('.hero__cta', { opacity: 1, y: 0, duration: .6 }, .8);
  }
  var intro = document.getElementById(SITE.introId);
  function hideIntro() { if (!intro) return; var el = intro; intro = null; el.classList.add('hide'); setTimeout(function () { el.remove(); }, 650); heroEntrance(); }
  if (reducedMotion || !intro) { if (intro) { intro.remove(); intro = null; } heroEntrance(); }
  else { setTimeout(hideIntro, SITE.introDuration); setTimeout(hideIntro, 6000); intro.addEventListener('click', hideIntro); }

  /* burger */
  var burger = document.getElementById('burger'); var nav = document.getElementById('mainNav');
  if (burger && nav) {
    var lastFocus = null;
    var closeNav = function () { nav.classList.remove('nav-open'); burger.setAttribute('aria-expanded', 'false'); if (lastFocus) { lastFocus.focus(); lastFocus = null; } };
    var openNav = function () { lastFocus = document.activeElement; nav.classList.add('nav-open'); burger.setAttribute('aria-expanded', 'true'); var f = nav.querySelector('a'); if (f) f.focus(); };
    burger.addEventListener('click', function () { nav.classList.contains('nav-open') ? closeNav() : openNav(); });
    nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeNav); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && nav.classList.contains('nav-open')) closeNav(); });
    window.addEventListener('resize', function () { if (window.innerWidth > SITE.breakpointMenu) closeNav(); });
  }

  /* lightbox */
  var lightbox = document.getElementById('lightbox'), lightboxImg = document.getElementById('lightboxImg'), lightboxClose = document.getElementById('lightboxClose');
  if (lightbox && lightboxImg) {
    var opener = null;
    var openLb = function (src, alt) { lightboxImg.src = src; lightboxImg.alt = alt || ''; lightbox.hidden = false; document.body.style.overflow = 'hidden'; if (lightboxClose) lightboxClose.focus(); };
    var closeLb = function () { lightbox.hidden = true; lightboxImg.src = ''; document.body.style.overflow = ''; if (opener) { opener.focus(); opener = null; } };
    document.querySelectorAll('[data-full]').forEach(function (fig) {
      fig.setAttribute('tabindex', '0'); fig.setAttribute('role', 'button');
      var img = fig.querySelector('img');
      var go = function () { opener = fig; openLb(fig.getAttribute('data-full'), img ? img.alt : ''); };
      fig.addEventListener('click', go);
      fig.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
    });
    if (lightboxClose) lightboxClose.addEventListener('click', closeLb);
    lightbox.addEventListener('click', function (e) { if (e.target === lightbox) closeLb(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !lightbox.hidden) closeLb(); });
  }

  /* orari dinamici Europe/Rome (PLUMBING_V 1) */
  function romeNow() {
    try {
      var f = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Rome', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false });
      var p = f.formatToParts(new Date());
      var map = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
      var g = function (t) { return p.find(function (x) { return x.type === t; }).value; };
      return { day: map[g('weekday')], mins: parseInt(g('hour'), 10) * 60 + parseInt(g('minute'), 10) };
    } catch (e) { var d = new Date(); return { day: d.getDay(), mins: d.getHours() * 60 + d.getMinutes() }; }
  }
  var toMin = function (hm) { var a = hm.split(':'); return parseInt(a[0], 10) * 60 + parseInt(a[1], 10); };
  var fmt = function (m) { m = ((m % 1440) + 1440) % 1440; return ('0' + Math.floor(m / 60)).slice(-2) + ':' + ('0' + (m % 60)).slice(-2); };
  var DIT = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];
  var DEN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  function hoursState() {
    var now = romeNow(), w = SITE.hours[now.day] || [];
    for (var i = 0; i < w.length; i++) { var s = toMin(w[i][0]), e = toMin(w[i][1]); if (now.mins >= s && now.mins < Math.min(e, 1440)) return { open: true, day: now.day, closesAt: fmt(e) }; }
    for (var k = 0; k < w.length; k++) { if (now.mins < toMin(w[k][0])) return { open: false, day: now.day, opensToday: fmt(toMin(w[k][0])) }; }
    for (var d = 1; d <= 7; d++) { var nd = (now.day + d) % 7, nw = SITE.hours[nd] || []; if (nw.length) return { open: false, day: now.day, opensDay: nd, opensAt: fmt(toMin(nw[0][0])) }; }
    return { open: false, day: now.day };
  }
  function renderHours() {
    var el = document.getElementById(SITE.hoursStatusId), st = hoursState();
    document.querySelectorAll(SITE.hoursTableSelector).forEach(function (row) { row.classList.toggle(SITE.todayClass, parseInt(row.getAttribute('data-day'), 10) === st.day); });
    if (!el) return;
    var en = root.lang === 'en', txt;
    if (st.open) txt = (en ? 'Open now · closes at ' : 'Aperto ora · chiude alle ') + st.closesAt;
    else if (st.opensToday) txt = (en ? 'Closed · opens today at ' : 'Chiuso · apre oggi alle ') + st.opensToday;
    else if (st.opensAt !== undefined) txt = (en ? 'Closed · opens ' + DEN[st.opensDay] + ' at ' : 'Chiuso · apre ' + DIT[st.opensDay] + ' alle ') + st.opensAt;
    else txt = en ? 'Closed' : 'Chiuso';
    el.textContent = txt;
  }
  renderHours(); setInterval(renderHours, 60000);

  /* i18n overlay (innerHTML per <strong>/<em>/<a>) */
  var originals = {};
  var I18N_ATTRS = [['data-i18n', null], ['data-i18n-aria', 'aria-label'], ['data-i18n-alt', 'alt']];
  function setLang(lang) {
    root.lang = lang === 'en' ? 'en' : 'it';
    I18N_ATTRS.forEach(function (pair) {
      var dattr = pair[0], target = pair[1];
      if (!originals[dattr]) originals[dattr] = {};
      document.querySelectorAll('[' + dattr + ']').forEach(function (el) {
        var key = el.getAttribute(dattr), store = originals[dattr];
        if (!(key in store)) store[key] = target ? el.getAttribute(target) : el.innerHTML;
        var val = lang === 'en' && SITE.EN[key] !== undefined ? SITE.EN[key] : store[key];
        if (target) el.setAttribute(target, val); else el.innerHTML = val;
      });
    });
    renderHours();
    var t = document.getElementById('langToggle'); if (t) t.textContent = lang === 'en' ? 'IT' : 'EN';
    try { localStorage.setItem(SITE.slug + '-lang', lang); } catch (e) {}
  }
  var langToggle = document.getElementById('langToggle');
  if (langToggle) langToggle.addEventListener('click', function () { setLang(root.lang === 'en' ? 'it' : 'en'); });
  try { if (localStorage.getItem(SITE.slug + '-lang') === 'en') setLang('en'); } catch (e) {}

  /* action-bar mobile */
  var actionBar = document.getElementById('actionBar');
  if (actionBar) {
    var onScroll = function () { actionBar.classList.toggle('is-visible', window.scrollY > window.innerHeight * 0.6); };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  }
})();
