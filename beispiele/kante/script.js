/* Kante Beispielseite: Menü, Karten-Platzhalter, Galerie-Großansicht,
   Terminformular (Demo, sendet nichts). */
(function () {
  "use strict";

  /* Burger-Menü */
  var knopf = document.querySelector(".menue-knopf");
  var nav = document.getElementById("hauptnav");
  function menue(offen) {
    nav.classList.toggle("offen", offen);
    knopf.setAttribute("aria-expanded", offen ? "true" : "false");
    knopf.setAttribute("aria-label", offen ? "Menü schließen" : "Menü öffnen");
  }
  if (knopf && nav) {
    knopf.addEventListener("click", function () { menue(!nav.classList.contains("offen")); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") menue(false); });
  }

  /* Karte erst nach Klick (Platzhalter, lädt nichts). Der Cookie-Hinweis kommt auf hevice.de vom Build (scripts/beispiele.mjs). */
  var karte = document.getElementById("karte");
  function karteZeigen() {
    if (!karte) return;
    karte.innerHTML = "";
    var s = document.createElement("span");
    s.textContent = "Hier würde jetzt die Karte erscheinen. In der Vorschau wird nichts geladen.";
    karte.appendChild(s);
  }
  var karteKnopf = document.getElementById("karte-knopf");
  if (karteKnopf) karteKnopf.addEventListener("click", karteZeigen);
  var google = document.getElementById("google-link");
  if (google) google.addEventListener("click", function (e) {
    e.preventDefault();
    this.querySelector("span").textContent = "In der echten Seite öffnet sich hier das Google-Unternehmensprofil des Barbershops.";
  });

  /* Galerie: Großansicht */
  var gross = document.getElementById("grossbild");
  if (gross) {
    document.querySelectorAll(".galerie button").forEach(function (b) {
      b.addEventListener("click", function () {
        var ziel = document.getElementById("grossbild-platz");
        ziel.innerHTML = "";
        ziel.appendChild(b.querySelector(".platz").cloneNode(true));
        document.getElementById("grossbild-text").textContent = b.dataset.text;
        gross.showModal();
      });
    });
    gross.addEventListener("click", function (e) { if (e.target === gross) gross.close(); });
    gross.querySelector("[data-schliessen]").addEventListener("click", function () { gross.close(); });
  }

  /* Terminformular */
  var form = document.getElementById("formular");
  if (!form) return;
  var fehler = document.getElementById("fehler");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var feldName = document.getElementById("name");
    var feldKontakt = document.getElementById("erreichbar");
    var feldDs = document.getElementById("ds");
    var name = feldName.value.trim();
    var fehlt = [];
    var erstes = null;
    function markiere(feld, ok, text) {
      if (ok) { feld.removeAttribute("aria-invalid"); return; }
      feld.setAttribute("aria-invalid", "true");
      fehlt.push(text);
      if (!erstes) erstes = feld;
    }
    markiere(feldName, name, "Ihren Namen");
    markiere(feldKontakt, feldKontakt.value.trim(), "eine Telefonnummer oder E-Mail-Adresse");
    markiere(feldDs, feldDs.checked, "Ihre Zustimmung zur Datenschutzerklärung");
    if (fehlt.length) {
      fehler.textContent = "Bitte ergänzen Sie noch " + fehlt.join(", ") + ".";
      fehler.hidden = false;
      erstes.focus();
      return;
    }
    var bereich = document.getElementById("formular-bereich");
    bereich.innerHTML = "";
    var box = document.createElement("div");
    box.className = "bestaetigung";
    box.setAttribute("role", "status");
    var h = document.createElement("h2");
    h.textContent = "Danke, " + name + "!";
    var p = document.createElement("p");
    p.textContent = "So sähe die Bestätigung nach dem Absenden aus. Da dies eine Beispielseite ist, wurde nichts verschickt.";
    box.appendChild(h);
    box.appendChild(p);
    bereich.appendChild(box);
  });
})();
