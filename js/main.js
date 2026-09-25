/* =========================================================
   Grikona — interacciones y animaciones
   ========================================================= */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function t(key) { return window.GRIKONA_I18N ? window.GRIKONA_I18N.t(key) : key; }

  /* ---------- Header scroll state ---------- */
  var header = document.getElementById("siteHeader");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Mobile nav ---------- */
  var navToggle = document.getElementById("navToggle");
  if (navToggle && header) {
    var setNav = function (open) {
      header.classList.toggle("open", open);
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("nav-open", open);
    };
    navToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      setNav(!header.classList.contains("open"));
    });
    header.querySelectorAll(".nav-links a").forEach(function (a) {
      a.addEventListener("click", function () { setNav(false); });
    });
    document.addEventListener("click", function (e) {
      if (header.classList.contains("open") && !header.contains(e.target)) setNav(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setNav(false);
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 1024) setNav(false);
    });
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Animated counters ---------- */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var prefix = el.getAttribute("data-prefix") || "";
    var suffix = el.getAttribute("data-suffix") || "";
    if (reduceMotion) { el.textContent = prefix + target + suffix; return; }
    var duration = 1400;
    var start = null;
    function tick(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  var counters = document.querySelectorAll("[data-count]");
  if (counters.length) {
    if ("IntersectionObserver" in window) {
      var cio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { animateCount(e.target); cio.unobserve(e.target); }
        });
      }, { threshold: 0.5 });
      counters.forEach(function (el) { cio.observe(el); });
    } else {
      counters.forEach(animateCount);
    }
  }

  /* ---------- Tabs (cómo funciona) ---------- */
  var tabs = document.querySelectorAll(".tab");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var id = tab.getAttribute("data-tab");
      tabs.forEach(function (t) {
        var active = t === tab;
        t.setAttribute("aria-selected", active ? "true" : "false");
        var panel = document.getElementById("panel-" + t.getAttribute("data-tab"));
        if (panel) panel.hidden = !active;
      });
    });
  });

  /* ---------- Accordions (choices + faq) ---------- */
  function setupAccordion(rootSelector, itemSelector, btnSelector, panelSelector, exclusive) {
    var root = document.querySelector(rootSelector);
    if (!root) return;
    var items = root.querySelectorAll(itemSelector);
    items.forEach(function (item) {
      var btn = item.querySelector(btnSelector);
      var panel = item.querySelector(panelSelector);
      if (!btn || !panel) return;
      if (item.getAttribute("data-selected") === "true" || item.getAttribute("data-open") === "true") {
        panel.style.height = "auto";
      }
      btn.addEventListener("click", function () {
        var isOpen = item.getAttribute("data-selected") === "true" || item.getAttribute("data-open") === "true";
        if (exclusive) {
          items.forEach(function (other) {
            if (other === item) return;
            other.setAttribute("data-selected", "false");
            other.setAttribute("data-open", "false");
            var op = other.querySelector(panelSelector);
            if (op) op.style.height = "0px";
          });
        }
        if (isOpen && !exclusive) {
          item.setAttribute("data-open", "false");
          panel.style.height = "0px";
        } else if (isOpen && exclusive) {
          /* keep one open in exclusive mode */
        } else {
          item.setAttribute("data-open", "true");
          item.setAttribute("data-selected", exclusive ? "true" : "false");
          panel.style.height = panel.scrollHeight + "px";
        }
      });
    });
  }
  setupAccordion(".choices", ".choice", ".choice__btn", ".choice__panel", true);
  setupAccordion(".faq", ".faq-item", ".faq-q", ".faq-a", false);

  /* ---------- Hero phone swipe demo ---------- */
  var deck = document.getElementById("deck");
  if (deck) {
    var PROPERTIES = [
      { price: "320.000 €", nameKey: "prop1.name", zoneKey: "prop1.zone", specsKey: "prop1.specs", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=700&q=80" },
      { price: "185.000 €", nameKey: "prop2.name", zoneKey: "prop2.zone", specsKey: "prop2.specs", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=700&q=80" },
      { price: "1.100 €/mes", nameKey: "prop3.name", zoneKey: "prop3.zone", specsKey: "prop3.specs", img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=700&q=80" },
      { price: "450.000 €", nameKey: "prop4.name", zoneKey: "prop4.zone", specsKey: "prop4.specs", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=700&q=80" },
      { price: "240.000 €", nameKey: "prop5.name", zoneKey: "prop5.zone", specsKey: "prop5.specs", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=700&q=80" }
    ];

    var feedback = document.getElementById("deckFeedback");
    var cards = [];

    function makeCard(p) {
      var el = document.createElement("article");
      el.className = "pcard";
      el.innerHTML =
        '<img src="' + p.img + '" alt="' + t(p.nameKey) + '" draggable="false">' +
        '<div class="pcard__shade"></div>' +
        '<div class="pcard__verified"><svg viewBox="0 0 24 24" fill="none"><path d="M12 3l7 3v6c0 4.4-3 7.5-7 9-4-1.5-7-4.6-7-9V6l7-3z" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>' + t("phone.verified") + '</div>' +
        '<div class="pcard__stamp pcard__stamp--like">' + t("phone.stampLike") + '</div>' +
        '<div class="pcard__stamp pcard__stamp--skip">' + t("phone.stampSkip") + '</div>' +
        '<div class="pcard__copy">' +
          '<div class="pcard__price">' + p.price + '</div>' +
          '<div class="pcard__name">' + t(p.nameKey) + '</div>' +
          '<div class="pcard__zone"><svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11z" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="10" r="2.5" stroke="currentColor" stroke-width="2"/></svg>' + t(p.zoneKey) + '</div>' +
          '<div class="pcard__specs">' + t(p.specsKey) + '</div>' +
        '</div>';
      return el;
    }

    function buildDeck() {
      cards.forEach(function (c) { if (c.parentNode) c.parentNode.removeChild(c); });
      cards = [];
      PROPERTIES.forEach(function (p) {
        var el = makeCard(p);
        deck.appendChild(el);
        cards.push(el);
      });
      layout();
    }

    function layout() {
      var n = cards.length;
      cards.forEach(function (card, i) {
        var pos = n - 1 - i; /* 0 = top */
        card.style.zIndex = String(i + 1);
        card.style.transition = reduceMotion ? "none" : "transform .45s cubic-bezier(.2,.7,.2,1), opacity .3s";
        card.style.opacity = pos > 2 ? "0" : "1";
        if (pos === 0) card.style.transform = "translateY(0) scale(1)";
        else if (pos === 1) card.style.transform = "translateY(9px) scale(.95)";
        else if (pos === 2) card.style.transform = "translateY(18px) scale(.9)";
        else card.style.transform = "translateY(22px) scale(.88)";
        card.style.pointerEvents = pos === 0 ? "auto" : "none";
        card.style.cursor = pos === 0 ? "grab" : "default";
      });
    }
    buildDeck();

    function topCard() { return cards[cards.length - 1]; }

    function recycle() {
      var top = topCard();
      if (!top) return;
      top.style.transition = "none";
      top.style.transform = "";
      top.style.opacity = "0";
      deck.insertBefore(top, deck.firstChild);
      cards.pop();
      cards.unshift(top);
      /* force reflow so the reset isn't animated */
      void top.offsetWidth;
      top.style.opacity = "";
      layout();
    }

    function flyOut(card, dir) {
      var likeStamp = card.querySelector(".pcard__stamp--like");
      var skipStamp = card.querySelector(".pcard__stamp--skip");
      var stamp = dir > 0 ? likeStamp : skipStamp;
      if (stamp) stamp.style.opacity = "1";
      card.style.transition = reduceMotion ? "none" : "transform .4s ease, opacity .4s ease";
      card.style.transform = "translateX(" + (dir * 460) + "px) rotate(" + (dir * 24) + "deg)";
      card.style.opacity = "0";
      if (feedback) {
        var name = card.querySelector(".pcard__name").textContent;
        feedback.textContent = dir > 0 ? t("deck.match") + name : t("deck.discard") + name;
      }
      window.setTimeout(function () {
        if (likeStamp) likeStamp.style.opacity = "";
        if (skipStamp) skipStamp.style.opacity = "";
        recycle();
      }, reduceMotion ? 0 : 410);
    }

    /* drag */
    var dragging = false, startX = 0, startY = 0, dx = 0, dy = 0, active = null;
    deck.addEventListener("pointerdown", function (e) {
      active = topCard();
      if (!active) return;
      dragging = true;
      startX = e.clientX; startY = e.clientY; dx = 0; dy = 0;
      active.style.transition = "none";
      active.setPointerCapture(e.pointerId);
    });
    deck.addEventListener("pointermove", function (e) {
      if (!dragging || !active) return;
      dx = e.clientX - startX;
      dy = e.clientY - startY;
      var rot = dx / 18;
      active.style.transform = "translate(" + dx + "px," + dy * 0.25 + "px) rotate(" + rot + "deg)";
      var likeStamp = active.querySelector(".pcard__stamp--like");
      var skipStamp = active.querySelector(".pcard__stamp--skip");
      if (likeStamp) likeStamp.style.opacity = String(Math.max(0, Math.min(1, dx / 120)));
      if (skipStamp) skipStamp.style.opacity = String(Math.max(0, Math.min(1, -dx / 120)));
    });
    function endDrag() {
      if (!dragging || !active) return;
      dragging = false;
      var card = active;
      active = null;
      var likeStamp = card.querySelector(".pcard__stamp--like");
      var skipStamp = card.querySelector(".pcard__stamp--skip");
      if (Math.abs(dx) > 90) {
        if (likeStamp) likeStamp.style.opacity = "";
        if (skipStamp) skipStamp.style.opacity = "";
        flyOut(card, dx > 0 ? 1 : -1);
      } else {
        card.style.transition = reduceMotion ? "none" : "transform .35s cubic-bezier(.2,.7,.2,1)";
        card.style.transform = "translateY(0) scale(1)";
        if (likeStamp) likeStamp.style.opacity = "0";
        if (skipStamp) skipStamp.style.opacity = "0";
      }
    }
    deck.addEventListener("pointerup", endDrag);
    deck.addEventListener("pointercancel", endDrag);
    deck.addEventListener("pointerleave", function () { if (dragging) endDrag(); });

    var btnLike = document.getElementById("btnLike");
    var btnSkip = document.getElementById("btnSkip");
    var btnInfo = document.getElementById("btnInfo");
    if (btnLike) btnLike.addEventListener("click", function () { if (topCard()) flyOut(topCard(), 1); });
    if (btnSkip) btnSkip.addEventListener("click", function () { if (topCard()) flyOut(topCard(), -1); });
    if (btnInfo && feedback) {
      btnInfo.addEventListener("click", function () {
        var c = topCard();
        if (c) feedback.textContent = c.querySelector(".pcard__name").textContent + " · " + c.querySelector(".pcard__zone").textContent;
      });
    }

    /* Rebuild the deck with the new language */
    document.addEventListener("grikona:langchange", function () {
      if (feedback) feedback.textContent = t("phone.feedback");
      buildDeck();
    });
  }

  /* ---------- Roadmap scroll animation ---------- */
  var roadmap = document.getElementById("roadmapEl");
  if (roadmap) {
    var track = roadmap.querySelector(".roadmap__track") || roadmap;
    var trail = document.getElementById("roadmapTrail");
    var walker = document.getElementById("roadmapWalker");
    var milestones = track.querySelectorAll(".milestone");

    var updateRoadmap = function () {
      var rect = track.getBoundingClientRect();
      var vh = window.innerHeight;
      var total = track.offsetHeight;
      var progress = (vh * 0.6 - rect.top) / total;
      progress = Math.max(0, Math.min(1, progress));
      if (trail) trail.style.height = (progress * 100) + "%";
      if (walker) walker.style.top = (progress * (total - 72)) + "px";
      var walkerY = progress * total;
      milestones.forEach(function (m) {
        var mTop = m.offsetTop + m.offsetHeight / 2;
        m.setAttribute("data-active", walkerY >= mTop ? "true" : "false");
      });
    };
    updateRoadmap();
    window.addEventListener("scroll", updateRoadmap, { passive: true });
    window.addEventListener("resize", updateRoadmap);
  }

  /* ---------- Waitlist form ---------- */
  var form = document.getElementById("waitlistForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var btn = form.querySelector("button");
      var inputs = form.querySelectorAll("input");
      var doneKey = form.getAttribute("data-done-key") || "cta.done";
      var original = btn ? btn.textContent : "";
      if (btn) { btn.textContent = t(doneKey); btn.disabled = true; }
      inputs.forEach(function (input) { input.value = ""; });
      window.setTimeout(function () {
        if (btn) { btn.textContent = original; btn.disabled = false; }
      }, 2600);
    });
  }
})();

/* Индикатор прокрутки страницы */
(function () {
  var bar = document.querySelector('.scroll-progress');
  if (!bar) return;
  function update() {
    var h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.setProperty('--scroll', h > 0 ? Math.min(window.scrollY / h, 1) : 0);
  }
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();

/* «Откуда вы смотрите»: спрашиваем свой Cloudflare Worker (/api/visitor).
   Если API нет (локально, GitHub Pages) — карточка просто не показывается. */
(function () {
  var card = document.getElementById('geoCard'), text = document.getElementById('geoText');
  if (!card || !text || !window.fetch) return;
  var t0 = performance.now();
  fetch('/api/visitor', { cache: 'no-store' })
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (d) {
      if (!d || !d.city || d.distanceKm == null) return;
      var ms = Math.round(performance.now() - t0);
      var lang = (document.documentElement.lang || 'es').slice(0, 2);
      var km = d.distanceKm.toLocaleString(lang);
      var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return '&#' + c.charCodeAt(0) + ';'; }); };
      var city = '<strong>' + esc(d.city) + '</strong>';
      var near = d.distanceKm < 30;
      var msg = {
        es: near ? 'Estás en ' + city + ', ¡muy cerca de nosotros!' : 'Nos visitas desde ' + city + ' · <strong>' + km + ' km</strong> hasta Valencia',
        en: near ? 'You are in ' + city + ', right around the corner!' : 'Visiting from ' + city + ' · <strong>' + km + ' km</strong> to Valencia',
        ru: near ? 'Вы в ' + city + ', совсем рядом с нами!' : 'Вы смотрите из ' + city + ' · <strong>' + km + ' км</strong> до Валенсии'
      };
      text.innerHTML = (msg[lang] || msg.es) +
        (d.colo ? ' <span class="geo-card__colo">· edge ' + esc(d.colo) + ' · ' + ms + ' ms</span>' : '');
      card.hidden = false;
    })
    .catch(function () {});
})();
