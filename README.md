# LEWERENZ Objektservice — Website

Onepager für LEWERENZ Objektservice, Zwickau & Umgebung.
Fertig gebaut, technisch geprüft, bereit zum Hochladen.

---

## Was drin ist

```
index.html         → die komplette Seite (alle 10 Sektionen)
style.css          → gesamtes CSS, Markenfarben ganz oben
script.js          → Header-Scroll, Vorher/Nachher-Regler, Formular
impressum.html     → Rechtsseite (Platzhalter ausfüllen!)
datenschutz.html   → Rechtsseite (Platzhalter ausfüllen!)
assets/            → Logos, Fotos (24 Dateien)
```

Gesamtgröße: rund 3,4 MB.

---

## Schritt 1: Repository anlegen

1. Auf **github.com** einloggen
2. Oben rechts auf **+** → **New repository**
3. Name: `lewerenz-website`
4. Auf **Public** lassen (Pflicht für kostenloses GitHub Pages)
5. **KEIN** Häkchen bei "Add a README file"
6. **Create repository** klicken

---

## Schritt 2: Dateien hochladen

1. Im leeren Repo auf **uploading an existing file** klicken
2. ZIP-Datei entpacken
3. **Den Inhalt** des Ordners ins Browserfenster ziehen — nicht den Ordner selbst!
   Also: `index.html`, `style.css`, `script.js`, `impressum.html`,
   `datenschutz.html`, `README.md` und den Ordner `assets`
4. Unten Commit-Notiz eintragen, z. B. „Website erste Version"
5. **Commit changes** klicken

---

## Schritt 3: Live schalten

1. Im Repo auf **Settings** (oben rechts)
2. Links in der Seitenleiste auf **Pages**
3. Unter *Source*: **Deploy from a branch**
4. Branch: **main**, Ordner: **/ (root)**
5. **Save**

Nach ein bis zwei Minuten läuft die Seite unter:

```
https://DEIN-GITHUB-NAME.github.io/lewerenz-website/
```

Der Link erscheint oben auf der Pages-Seite. Beim ersten Mal kann es
bis zu 5 Minuten dauern.

---

## Schritt 4: Eigene Domain verbinden (optional)

Damit die Seite unter `lewerenz-objektservice.com` läuft:

**Bei GitHub:**
- Settings → Pages → *Custom domain* → `www.lewerenz-objektservice.com` eintragen → Save
- Danach Häkchen bei **Enforce HTTPS** setzen (erscheint nach ein paar Minuten)

**Bei IONOS im DNS-Bereich:**
- Einen `CNAME`-Eintrag für `www` anlegen, Ziel: `DEIN-GITHUB-NAME.github.io`
- Für die Domain ohne www vier `A`-Records anlegen:
  ```
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
  ```

Die Umstellung kann bis zu 24 Stunden dauern.

---

## Änderungen später machen

1. Datei im Repo anklicken
2. Oben rechts auf den **Stift** (Edit this file)
3. Ändern
4. Unten **Commit changes**

Nach ein bis zwei Minuten ist die Änderung live.

---

## VOR dem Livegang erledigen

- [ ] **Impressum**: alle 14 goldenen Platzhalter ausfüllen
- [ ] **Datenschutz**: alle 7 goldenen Platzhalter ausfüllen
- [ ] **Hinweiskästen** in beiden Rechtsseiten löschen
      (der goldene Kasten „Hinweis an dich, Michel")
- [ ] **Google-Link** in der Bewertungs-Sektion:
      in `index.html` nach `TODO` suchen, echte Profil-URL eintragen
- [ ] **Postfach** `info@lewerenz-objektservice.com` bei IONOS anlegen
- [ ] **Formular testen**: einmal absenden, prüfen ob die Mail ankommt
      (die allererste Nachricht muss bei Web3Forms bestätigt werden)
- [ ] **Google-Bewertungen**: Platzhalterbilder durch echte Screenshots ersetzen
      (betrifft beide Bewertungs-Sektionen)
- [ ] **Stats prüfen**: „10+ Betreute Objekte" — Zahl aktuell halten
- [ ] Rechtsseiten von einem Anwalt prüfen lassen

---

## Markenfarben ändern

Alle Farben stehen als Variablen ganz oben in `style.css`:

| Variable | Wert | Bedeutung |
|---|---|---|
| `--lw-gold` | `#C9A34E` | Primary, Premium Gold |
| `--lw-anthrazit` | `#121212` | Secondary |
| `--lw-gold-dark` | `#A67C2D` | Accent, Dunkelgold |
| `--lw-bg` | `#0A0A0A` | Hintergrund |
| `--lw-card` | `#1B1B1B` | Karten |
| `--lw-btn-hover` | `#B48A36` | Button Hover |
| `--lw-btn-text` | `#000000` | Button-Text |
| `--lw-text` | `#FFFFFF` | Text Haupt |
| `--lw-text-muted` | `#D1D1D1` | Text Sekundär |
| `--lw-wa` | `#25D366` | WhatsApp-Grün |

Einen Wert ändern, ganze Seite zieht mit.

---

## Kontaktdaten zentral ändern

- **Telefon/WhatsApp**: in `index.html` nach `491724695433` suchen (kommt 9× vor)
- **E-Mail**: nach `info@lewerenz-objektservice.com` suchen
- **Web3Forms-Key**: nach `access_key` suchen

---

## Aufbau der Seite

| # | Sektion | Anker |
|---|---|---|
| 01 | Header & Hero | `#top` |
| 02 | Google-Bewertungen (oben) | `#bewertungen` |
| 03 | Problem („Kennst du das?") | `#problem` |
| 04 | Die Lösung | `#loesung` |
| 05 | Unsere Leistungen (9 Karten) | `#leistungen` |
| 06 | Vorher / Nachher (Schieberegler) | `#ergebnisse` |
| 07 | Google-Bewertungen (unten) | `#bewertungen-2` |
| 08 | Warum Lewerenz (Stats + 5 Kacheln) | `#warum` |
| 09 | Über mich | `#story` |
| 10 | Abschluss-CTA | `#cta` |
| 11 | Kontakt & Formular | `#kontakt` |
| 12 | Footer | — |

Die Google-Bewertungen kommen bewusst zweimal vor: einmal früh als
Vertrauensanker, einmal nach den Vorher/Nachher-Bildern als Bestätigung.

---

## Technischer Stand

Geprüft mit **42 automatisierten Tests**, alle bestanden.

**Funktion (26 Tests)**
- Keine JavaScript-Fehler
- Alle 28 Bilder laden, alle mit Alt-Texten
- Alle Navigations-, Telefon-, WhatsApp- und E-Mail-Links korrekt
- Header dunkelt beim Scrollen ab
- Vorher/Nachher-Schieberegler funktionieren, Bilder deckungsgleich
- Formular: leer wird blockiert, ausgefüllt sendet, Spamschutz aktiv
- SEO: eine H1, Sprache gesetzt, Social-Meta und Schema.org vorhanden
- 25 von 28 Bildern mit Lazy Loading

**Burger-Menü (16 Tests)**
- Öffnet und schließt per Klick, Burger wird zum X
- Schließt nach Link-Klick, bei Escape und beim Wechsel auf Desktop
- Hintergrund-Scrollen wird gesperrt, solange offen
- Alle Links min. 44 px hoch, Anruf- und WhatsApp-Button integriert
- Barrierefrei: aria-expanded, aria-hidden, Label wechselt mit

**Responsive (10 Gerätegrößen)**
Getestet von 320 px (iPhone SE) bis 1920 px. Kein horizontaler Überlauf,
keine JS-Fehler auf keiner Größe.

| Breite | Leistungen | Warum | Vorher/Nachher | Navigation |
|---|---|---|---|---|
| ab 1180 px | 3 Spalten | 5 Spalten | 3 Spalten | Desktop-Menü |
| 1100–1180 px | 3 | 3 | 3 | Desktop-Menü |
| 980–1100 px | 2 | 3 | 2 | **Burger** |
| 720–980 px | 2 | 2 | 2 | Burger |
| unter 720 px | 1 | 1 | 1 | Burger |

**Touch-Ziele**: Alle Buttons und Links min. 44 × 44 px
(Empfehlung von Apple und Google).

---

## Bekannte offene Punkte

- **Google-Bewertungen** sind noch Platzhalterbilder.
- **Google Fonts** werden von Google geladen. Datenschutzfreundlicher wäre,
  sie lokal einzubinden. Dann entfällt der Abschnitt in der Datenschutzerklärung.
