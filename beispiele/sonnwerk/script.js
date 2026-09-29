/* Sonnwerk Beispielseite: Burger-Menü, Cookie-Hinweis, Formular-Validierung (Demo, sendet nichts). */
(function () {
  "use strict";

  /* Burger-Menü */
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("hauptnavigation");
  function setMenu(open) {
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.textContent = open ? "Schließen" : "Menü";
  }
  if (toggle && nav) {
    toggle.addEventListener("click", function () { setMenu(!nav.classList.contains("open")); });
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });
  }

  /* Cookie-Hinweis: nur technisch notwendig */
  var banner = document.getElementById("cookie-banner");
  var KEY = "sonnwerk-hinweis";
  var gesehen = false;
  try { gesehen = localStorage.getItem(KEY) === "1"; } catch (e) {}
  if (banner && !gesehen) banner.hidden = false;
  var ok = document.getElementById("cookie-ok");
  if (ok) ok.addEventListener("click", function () {
    try { localStorage.setItem(KEY, "1"); } catch (e) {}
    banner.hidden = true;
  });

  /* Formular */
  var form = document.getElementById("kontaktformular");
  if (!form) return;
  var status = document.getElementById("form-status");
  var regeln = [
    ["f-name", "e-name", function (v) { return v.trim().length >= 2 ? "" : "Bitte geben Sie Ihren Namen ein."; }],
    ["f-tel", "e-tel", function (v) {
      if (!v.trim()) return "Bitte geben Sie Ihre Telefonnummer ein.";
      return /^[0-9 +()\/.-]{6,}$/.test(v.trim()) && v.replace(/\D/g, "").length >= 6 ? "" : "Bitte prüfen Sie die Telefonnummer, z. B. 01234 567890.";
    }],
    ["f-mail", "e-mail", function (v) {
      if (!v.trim()) return "Bitte geben Sie Ihre E-Mail-Adresse ein.";
      return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "" : "Bitte prüfen Sie die E-Mail-Adresse, z. B. name@beispiel.de.";
    }],
    ["f-ort", "e-ort", function (v) {
      if (!v.trim()) return "Bitte geben Sie PLZ und Ort ein.";
      return /^\d{5}\s+\S.*$/.test(v.trim()) ? "" : "Bitte geben Sie fünfstellige PLZ und Ort an, z. B. 12345 Musterstadt.";
    }],
    ["f-interesse", "e-interesse", function (v) { return v ? "" : "Bitte wählen Sie, woran Sie interessiert sind."; }],
    ["f-msg", "e-msg", function (v) { return v.trim().length >= 10 ? "" : "Bitte schreiben Sie uns kurz, worum es geht (mindestens 10 Zeichen)."; }],
    ["f-dsgvo", "e-dsgvo", function (v, el) { return el.checked ? "" : "Bitte stimmen Sie der Datenschutzerklärung zu."; }]
  ];
  function pruefe(r) {
    var el = document.getElementById(r[0]);
    var msg = r[2](el.value, el);
    document.getElementById(r[1]).textContent = msg;
    if (msg) el.setAttribute("aria-invalid", "true"); else el.removeAttribute("aria-invalid");
    return msg === "";
  }
  regeln.forEach(function (r) {
    var el = document.getElementById(r[0]);
    el.addEventListener("blur", function () { if (el.type !== "checkbox" && el.value) pruefe(r); });
    el.addEventListener("change", function () { pruefe(r); });
    el.addEventListener("input", function () { if (el.getAttribute("aria-invalid")) pruefe(r); });
  });
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    status.hidden = true;
    var ersterFehler = null;
    regeln.forEach(function (r) { if (!pruefe(r) && !ersterFehler) ersterFehler = document.getElementById(r[0]); });
    if (ersterFehler) { ersterFehler.focus(); return; }
    status.hidden = false;
    form.reset();
  });
})();
