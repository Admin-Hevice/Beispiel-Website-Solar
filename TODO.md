# TODO · Beispielseite „Kante“ (Standard-Paket)

## Vor dem Merge ins HeViCe-Repo zu prüfen

- [ ] **Regeln nicht geprüft:** In diesem Repo liegen weder `CLAUDE.md` noch `docs/` (auch nicht `docs/referenz/` oder `docs/06-beispielseiten.md`), kein `atelier-lumen`, kein `package.json`, kein `scripts/beispiele.mjs`. Aufbau und Einbindung folgen daher dem einzig vorhandenen Beispiel `sonnwerk` und der Konvention aus dessen README. Die Regeln aus `CLAUDE.md` und `docs/` bitte gegen `beispiele/kante/` halten.
- [ ] **`npm run lint`, `build`, `check` konnten nicht laufen** (Projekt fehlt). Stattdessen geprüft: alle 7 Seiten liefern 200, alle internen Links gültig, keine Konsolenfehler, kein horizontaler Überlauf bei 375, 768 und 1440 px, Sichtvergleich mit der Vorlage.
- [ ] **Einträge in `src/content/hero.ts` und `src/content/projekte.ts`** (Label „Beispiel · Standard-Paket“) gehören ins HeViCe-Repo und sind hier nicht möglich. Vorlage siehe `README.md`, Abschnitt Kante.
- [ ] Screenshots liegen wie bei sonnwerk unter `public/beispiele/kante/` (`desktop.webp` 1440×900, `mobile.webp` 390×844). Ggf. vom Build neu erzeugen lassen.

## Abweichungen von der Vorlage

- Einzelne Datei mit `#hash`-Umschaltung → 5 echte Unterseiten plus `impressum/` und `datenschutz/` als eigene Seiten (statt Dialoge). Die Texte sind wörtlich übernommen, ergänzt um Überschrift, Zurück-Link und Fußbereich.
- Beispiel-Hinweisbalken der Vorlage („Beispielseite von HeViCe …“) entfällt. Wie bei sonnwerk fügt ihn `scripts/beispiele.mjs` beim Build ein. `noindex, nofollow` steht zusätzlich in jeder Seite.
- Schriften lokal als woff2 (@fontsource 5.3.0, OFL-Lizenzen liegen in `fonts/`): Limelight 400, Bodoni Moda 700 und 500 kursiv, Karla 400/500/700. Keine Google-Fonts-Requests. Bodoni Moda 500 normal wird nicht gebraucht und fehlt.
- Cookie-Hinweis: Die vorhandene Komponente von sonnwerk kennt nur „Verstanden“, die Karten-Zustimmung braucht zwei Optionen. Daher Komponente der Vorlage verwendet (Speicherschlüssel `kante-cookie`). Bei Bedarf an die Komponente des Hauptrepos angleichen.
- Fotos in Galerie-Buttons: `<span>` statt `<div>` (gültiges HTML), Buttons haben ein `aria-label`.
- Kleine Barrierefreiheits-Ergänzungen: Skip-Link, `aria-required`, `aria-invalid` bei Fehlern, Fokus auf das erste fehlerhafte Feld, Öffnungszeiten als Tabelle mit `th`, Überschriften `h2` statt `h3` im Fuß und in den Infokarten, Menü ohne JavaScript dauerhaft sichtbar.
- Nav-Schaltfläche „Termin anfragen“ zeigt die aktive Seite ebenfalls an.
- Ergänzt: `HairSalon`-JSON-LD mit fiktiven Angaben, Meta-Description und Open-Graph wie bei sonnwerk, Favicon.
- Entfernt: Safe-Area-Paddings am `:root` und Dark-Mode-Reste der Vorlage (Seite ist bewusst hell), ungenutzte Dialog-Styles.

## Platzhalter für Fotos (alle gestaltet, keine Bilddateien)

- Startseite: „Barbier bei der Arbeit“ (Spiegelrahmen), „Bartpflege“, 4× „Frisur“ (Seitenscheitel, Undercut, Dutt und Vollbart, Kurz mit Volumen)
- Leistungen: „Schnitt und Styling“, „Schnurrbart“
- Galerie: 9 Fotos (Der Laden, 4× Frisur, Bartpflege, Bart, Schnurrbart, Schnitt und Styling)
- Team: 3 Porträts (Ben, Tom, Jonas)
- Karte auf der Termin-Seite: lädt nichts, nur Platzhalter; Google-Link ist ein Platzhalter

## Fiktive Angaben

Kante Barbershop, Ben Mustermann, Musterstraße 7, 12345 Musterstadt, 01234 987650, hallo@kante-beispiel.de, Handwerkskammer Musterstadt. Vor echter Nutzung ersetzen.
