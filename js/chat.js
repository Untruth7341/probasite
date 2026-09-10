/* =========================================================
   Grikona — widget de chat de soporte
   ========================================================= */
(function () {
  "use strict";

  var i18n = window.GRIKONA_I18N;
  function t(key) { return i18n ? i18n.t(key) : key; }

  var html =
    '<button class="chat-launcher" id="chatLauncher" type="button" data-i18n-aria="chat.launcherAria" aria-label="Abrir chat de soporte">' +
      '<svg viewBox="0 0 24 24" fill="none"><path d="M21 11.5a8.5 8.5 0 01-12.3 7.6L3 21l1.9-5.7A8.5 8.5 0 1121 11.5z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>' +
      '<span class="chat-badge" aria-hidden="true"></span>' +
    '</button>' +
    '<section class="chat-panel" id="chatPanel" aria-live="polite" aria-label="Chat">' +
      '<header class="chat-head">' +
        '<span class="chat-head__avatar" aria-hidden="true">G</span>' +
        '<div><h4 data-i18n="chat.title">Soporte Grikona</h4><p data-i18n="chat.status">En línea · respondemos en minutos</p></div>' +
        '<button class="chat-head__close" id="chatClose" type="button" data-i18n-aria="chat.closeAria" aria-label="Cerrar chat">' +
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>' +
        '</button>' +
      '</header>' +
      '<div class="chat-body" id="chatBody"></div>' +
      '<div class="chat-quick" id="chatQuick">' +
        '<button type="button" data-quick="buy" data-i18n="chat.quick1">Quiero comprar</button>' +
        '<button type="button" data-quick="rent" data-i18n="chat.quick2">Quiero alquilar</button>' +
        '<button type="button" data-quick="sell" data-i18n="chat.quick3">Quiero vender</button>' +
      '</div>' +
      '<form class="chat-foot" id="chatForm">' +
        '<input id="chatInput" type="text" autocomplete="off" data-i18n-placeholder="chat.placeholder" placeholder="Escribe tu mensaje...">' +
        '<button type="submit" data-i18n-aria="chat.send" aria-label="Enviar">' +
          '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 12l16-8-6 8 6 8-16-8z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>' +
        '</button>' +
      '</form>' +
    '</section>';

  document.body.insertAdjacentHTML("beforeend", html);
  if (i18n) i18n.apply();

  var panel = document.getElementById("chatPanel");
  var launcher = document.getElementById("chatLauncher");
  var closeBtn = document.getElementById("chatClose");
  var body = document.getElementById("chatBody");
  var quick = document.getElementById("chatQuick");
  var form = document.getElementById("chatForm");
  var input = document.getElementById("chatInput");
  var started = false;
  var welcomeEl = null;

  function scrollDown() { body.scrollTop = body.scrollHeight; }

  function addMsg(text, who) {
    var el = document.createElement("div");
    el.className = "chat-msg chat-msg--" + who;
    el.textContent = text;
    body.appendChild(el);
    scrollDown();
    return el;
  }

  function showWelcome() {
    body.innerHTML = "";
    welcomeEl = addMsg(t("chat.welcome"), "bot");
  }

  function typing() {
    var el = document.createElement("div");
    el.className = "chat-typing";
    el.innerHTML = "<i></i><i></i><i></i>";
    body.appendChild(el);
    scrollDown();
    return el;
  }

  function botReply(replyKey) {
    var ind = typing();
    window.setTimeout(function () {
      if (ind.parentNode) ind.parentNode.removeChild(ind);
      addMsg(t(replyKey), "bot");
    }, 900);
  }

  function openChat() {
    panel.classList.add("open");
    launcher.classList.add("is-hidden");
    if (!started) { started = true; showWelcome(); }
    window.setTimeout(function () { if (input) input.focus(); }, 250);
  }
  function closeChat() {
    panel.classList.remove("open");
    launcher.classList.remove("is-hidden");
  }

  launcher.addEventListener("click", openChat);
  closeBtn.addEventListener("click", closeChat);

  quick.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-quick]");
    if (!btn) return;
    var kind = btn.getAttribute("data-quick");
    addMsg(btn.textContent, "user");
    botReply(kind === "buy" ? "chat.replyBuy" : kind === "rent" ? "chat.replyRent" : "chat.replySell");
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var val = (input.value || "").trim();
    if (!val) return;
    addMsg(val, "user");
    input.value = "";
    botReply("chat.replyDefault");
  });

  /* Re-render texts when the language changes (static labels are handled by i18n.apply) */
  document.addEventListener("grikona:langchange", function () {
    if (welcomeEl && body.firstChild === welcomeEl) {
      welcomeEl.textContent = t("chat.welcome");
    }
  });
})();
