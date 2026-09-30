# Beispielseite „Sonnwerk Solartechnik“ (Basic-Paket)

Fiktiver Elektrotechnik-Meisterbetrieb für Photovoltaik. Demo für das **Basic-Paket** von HeViCe:
OnePage mit 5 Sektionen, Kontaktformular (Demo, sendet nichts), Impressum, Datenschutz, Cookie-Hinweis,
Basis-SEO inkl. LocalBusiness-JSON-LD. Keine Animationen, keine Galerie, keine Team-Sektion, keine Karte.

## Inhalt

| Pfad | Zweck |
|---|---|
| `beispiele/sonnwerk/` | Die Seite (statisches HTML/CSS/JS, keine externen Ressourcen) inkl. `beispiel.json` |
| `beispiele/sonnwerk/fonts/` | Lokale Schriften (Bricolage Grotesque, Public Sans, IBM Plex Mono, alle SIL Open Font License, Lizenzen liegen bei) |
| `public/beispiele/sonnwerk/desktop.webp`, `mobile.webp` | Screenshots (1440×900 / 390×844) für Hero und Projektübersicht |

Der Ordner `beispiele/sonnwerk/` folgt der Konvention aus `docs/06-beispielseiten.md` im HeViCe-Repo
(Ordner + `beispiel.json`, `"paket": "Basic"`). Den Hinweis-Balken „Beispiel-Entwurf von HeViCe · Basic-Paket · Zurück zu hevice.de“
und `noindex, nofollow` fügt dort `scripts/beispiele.mjs` beim Build automatisch in alle HTML-Seiten ein.

## Einbinden ins HeViCe-Projekt

1. Ordner `beispiele/sonnwerk/` nach `beispiele/sonnwerk/` im HeViCe-Repo kopieren, Screenshots nach `public/beispiele/sonnwerk/`.
2. `src/content/hero.ts`, Branche `handwerker`, ergänzen:

```ts
beispiel: {
  slug: "sonnwerk",
  paket: "Basic",
  titel: "Sonnwerk Solartechnik",
  alt: "Beispiel-Entwurf „Sonnwerk Solartechnik“: Startseite eines fiktiven Solar-Meisterbetriebs",
},
```

3. `src/content/projekte.ts`, neuen Eintrag am Ende von `projekte` ergänzen:

```ts
{
  slug: "sonnwerk",
  paket: "Basic",
  titel: "Sonnwerk Solartechnik",
  branche: "Handwerker · Photovoltaik",
  beschreibung:
    "Ein schlichter, vertrauenswürdiger Auftritt für einen Meisterbetrieb – alles Wichtige auf einer Seite.",
  highlights: ["Leistungen auf einen Blick", "Ablauf in 4 Schritten", "Kontaktformular"],
},
```

Die Labels („Beispiel · Basic-Paket“) entstehen aus `paket` plus den vorhandenen Texten in `hero.vorschau` / `projekteSeite`.

## Geprüft (lokal im HeViCe-Projekt mit obigen Änderungen)

- `npm run lint`, `npm run build`, `npm run check` grün (keine Konsolenfehler, kein Overflow, Hinweis-Balken und noindex vorhanden)
- Lighthouse (Mobil und Desktop): Performance 100, Barrierefreiheit 100, Best Practices 100; SEO 66 nur wegen des gewollten `noindex`
- 375 / 768 / 1440 px ohne horizontalen Scroll; Ankerlinks, Burger-Menü, Formular-Validierung, Cookie-Hinweis getestet

---

# Beispielseite „Kante“ (Standard-Paket)

Fiktiver Barbershop, Demo für das **Standard-Paket**: 5 Unterseiten (`/`, `leistungen/`, `galerie/`, `team/`, `termin/`) plus `impressum/` und `datenschutz/`.
Statisches HTML/CSS/JS, lokale Schriften (Limelight, Bodoni Moda, Karla, OFL), keine Animationen, keine externen Ressourcen. Details und Abweichungen von der Vorlage: `TODO.md`.

| Pfad | Zweck |
|---|---|
| `beispiele/kante/` | Die Seiten inkl. `beispiel.json` (`"paket": "Standard"`) |
| `public/beispiele/kante/desktop.webp`, `mobile.webp` | Screenshots (1440×900 / 390×844) |

## Einbinden ins HeViCe-Projekt

`src/content/hero.ts`, passende Branche:

```ts
beispiel: {
  slug: "kante",
  paket: "Standard",
  titel: "Kante Barbershop",
  alt: "Beispiel-Entwurf „Kante“: Startseite eines fiktiven Barbershops",
},
```

`src/content/projekte.ts`, Eintrag am Ende von `projekte`:

```ts
{
  slug: "kante",
  paket: "Standard",
  titel: "Kante Barbershop",
  branche: "Barbershop",
  beschreibung:
    "Ein Auftritt mit Charakter für einen Barbershop: Fliesenwand, Preistafeln, Galerie und Terminanfrage auf fünf Seiten.",
  highlights: ["Preistafeln", "Galerie mit Großansicht", "Terminanfrage"],
},
```
