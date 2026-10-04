---
name: The Smashery
description: Smash burgers in flat colour bands, pill buttons and heavy capitals.
colors:
  blanco: "#F4F3E6"
  verde: "#0A4635"
  amarillo: "#FFC62D"
  rojo: "#E54D3A"
  azul: "#28306C"
  scrim: "rgba(0,0,0,.5)"
  veg-mark: "#0F7B36"
  nonveg-mark: "#8B3A12"
typography:
  hero:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "min(160px, (100vw - 48px) / 5.8)"
    fontWeight: 900
    lineHeight: 0.8
    fontStretch: "87%"
    textTransform: "uppercase"
  section-title:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "80px"
    fontWeight: 900
    lineHeight: 0.9
    fontStretch: "87%"
    textTransform: "uppercase"
  category-title:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "50px"
    fontWeight: 900
    lineHeight: 0.9
    fontStretch: "87%"
    textTransform: "uppercase"
  burger-name:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "35px"
    fontWeight: 900
    lineHeight: 0.95
    fontStretch: "87%"
    textTransform: "uppercase"
  item-name:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "22px"
    fontWeight: 900
    lineHeight: 1
    fontStretch: "87%"
    textTransform: "uppercase"
  body:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.25
  price:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "22px"
    fontWeight: 900
    lineHeight: 1
    fontFeature: "'tnum' 1, 'lnum' 1"
  button:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 900
    lineHeight: 1
    fontStretch: "87%"
    textTransform: "uppercase"
  marquee:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "100px"
    fontWeight: 600
    lineHeight: 1.05
    textTransform: "uppercase"
rounded:
  pill: "100px"
  card: "20px"
  large: "25px"
spacing:
  scale: "5 10 15 20 25 30 40 60"
  gutter: "40px (15px at 767px and below)"
  wrap: "1240px"
  section: "60px"
components:
  button-primary:
    backgroundColor: "{colors.amarillo}"
    textColor: "{colors.verde}"
    rounded: "{rounded.pill}"
    padding: "20px 25px"
    height: "56px"
  button-primary-hover:
    backgroundColor: "{colors.verde}"
    textColor: "{colors.amarillo}"
  button-inverse:
    backgroundColor: "{colors.verde}"
    textColor: "{colors.amarillo}"
    rounded: "{rounded.pill}"
    padding: "20px 25px"
  button-cream:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.verde}"
    rounded: "{rounded.pill}"
    padding: "20px 25px"
  add-control:
    backgroundColor: "{colors.verde}"
    textColor: "{colors.amarillo}"
    rounded: "{rounded.pill}"
    height: "44px"
  in-order-control:
    backgroundColor: "{colors.amarillo}"
    textColor: "{colors.verde}"
    rounded: "{rounded.pill}"
    height: "44px"
  section-chip:
    backgroundColor: "transparent"
    textColor: "{colors.amarillo}"
    rounded: "{rounded.pill}"
    height: "44px"
  section-chip-current:
    backgroundColor: "{colors.amarillo}"
    textColor: "{colors.verde}"
---

# Design System: The Smashery

## Overview

**Creative North Star: "Pressed hard, served loud"**

The site is built in the visual language of the Paput Menorca design kit: a stack of
full-bleed flat colour bands, each with one job, every control a pill, and headings in
enormous heavy capitals. The tokens (colours, type scale, radii, spacing, breakpoints and
hover timing) come from that kit. The brand expression (name, copy, slogan, menu,
photographs) is The Smashery's own. Nothing of Paput's logo, photography, fonts or menu is
used.

The page is a run of bands, top to bottom:

| Band | Ground | Text | Job |
|---|---|---|---|
| Navbar (sticky) | blanco | verde | Wordmark, ORDER pill, menu button |
| Full-screen menu | amarillo | verde | Six big links |
| Hero | photograph under a 50% scrim | blanco | Lead, headline, ORDER and SEE THE MENU |
| Statement and the smash | blanco | verde | DABA KE KHAO, two sentences, three steps |
| Smash-burger slider | blanco, amarillo cards | verde | Three burger lines with photo, "from" price and link |
| Marquee | blanco | verde | DABA KE KHAO rotated −5°, solid and outlined |
| Menu | blanco, verde section bar | verde | Every item, every price, ADD on each |
| Order band | rojo | blanco | ORDER HERE / OR HERE beside WhatsApp and Zomato |
| Find us | blanco | verde | Two outlets: glyph, name, address, hours, actions |
| Closer | amarillo | verde | The cheeseburger line and one ORDER pill |
| Footer | verde | amarillo | Wordmark, links, addresses, contact |
| Order dock and tray | verde bar, amarillo tray | amarillo / verde | Appears once anything is added |

**Key characteristics:**
- Flat colour fields. No shadows, no gradients except the hero scrim.
- Pills everywhere: buttons, chips, the diet filter, the add control and the outlet choice.
- Heavy capitals (Archivo 900) for headings, buttons, item names and prices. Sentence case only in body copy.
- Hover inverts fill and text in 0.3s. Nothing else moves except the marquee.
- One local-language slogan, **DABA KE KHAO** (Hindi: roughly "press down and eat", the way "daba ke khao" means "eat your fill"). It appears as the statement heading and in the marquee, and nowhere else.

## Colors

Five flat hues from the kit, two regulated food-mark colours, and one scrim.

- **Blanco** `#F4F3E6`: the page ground and navbar. A warm cream, never pure white.
- **Verde** `#0A4635`: all ink, the add control, the section bar, the dock, the footer.
- **Amarillo** `#FFC62D`: the primary ORDER pill, the full-screen menu, slider cards, the closer, the tray, and the in-order control.
- **Rojo** `#E54D3A`: the order band only.
- **Azul** `#28306C`: hover colour for full-screen menu links only.
- **Scrim** `rgba(0,0,0,.5)`: over the hero photograph only. The kit specifies 30%. This photo is bright, so 50% is needed to hold the cream text (measured below).
- **Food marks** `#0F7B36` and `#8B3A12`: the Indian veg (square and dot) and non-veg (square and triangle) marks, and nothing else. They are a legal convention, not brand colour.

### Contrast

| Pair | Ratio | Use |
|---|---|---|
| verde on blanco | 9.69 | Body, headings, menu |
| verde on amarillo | 6.89 | Buttons, menu overlay, cards, closer, tray |
| amarillo on verde | 6.89 | Footer, section bar, add control, dock |
| blanco on verde | 9.69 | Inverse grounds |
| azul on amarillo | 7.73 | Menu-link hover |
| blanco on rojo | 3.45 | Order band titles at 40–50px only |
| blanco on hero photo + scrim | worst pixel 3.59 (headline), 3.60 (lead) | Both set as large text (headline 900 caps; lead 700 at 19px or larger) |

**Never:** amarillo text on blanco (1.41), amarillo on rojo (2.45), rojo text on amarillo
(2.45), verde text on rojo (2.81), or blanco text on rojo below 24px.

## Typography

**Main face:** Archivo, variable (weight 400–900, width 75–100), self-hosted in `fonts/`.
It stands in for the kit's Roc Grotesk. Display type is set at `font-stretch: 87%`, which
brings Archivo closer to Roc Grotesk's proportions. **Accent face:** Fraunces 600, for the
marquee only, standing in for Nazare. The CSS variables `--font-roc` and `--font-nazare`
make the swap one line if the licensed faces are bought. The ₹ glyph is a separate 1.4KB
file (`archivo-rupee.woff2`) loaded only where a price appears.

| Style | Size (desktop → ≤991 → ≤767 → ≤479) | Weight / leading |
|---|---|---|
| Hero | 160 → 120 → 80 → 70, capped to fit "SINCE 2024" (5.49em) | 900 / 0.8 |
| Section title | 80 → 60 → 40 | 900 / 0.9 |
| Category title | 50 → 44 → 34 | 900 / 0.9 |
| Burger name, step title | 35 → 30 → 28 | 900 / 0.95 |
| Address title | 30 → 26 | 900 / 1 |
| Band title | 50 → 40 | 900 / 1 |
| Hero lead | 22 → 19 | 700 / 1.15 |
| Body | 20 → 18 → 17 | 400 / 1.25 |
| Item name | 22 → 19 | 900 / 1 |
| Item description | 16 | 400 / 1.35, max 52ch |
| Price | 22 → 20, tabular lining figures | 900 |
| Hours | 25 | 500 |
| Button | 18 (small 16) | 900 |
| Marquee | 100 → 70 → 50 | Fraunces 600 |

## Layout

One column inside a 1240px wrap with a 40px gutter (15px at 767px and below). Sections are
60px top and bottom. The kit's breakpoints are 991, 767 and 479px. At 1000px and up, menu
items sit in two columns and option grids (momos, dips, chicken strips) span both, four
options per row (two on phones, where each option stacks label, price and ADD).

The navbar is sticky. Inside the menu, the verde section bar sticks directly beneath it.
The script measures both heights into `--nav-h` and `--catnav-h`, so anchors land clear of
both bars. The order dock is hidden until something is added. It floats bottom-right on
wide screens and becomes a full-width bar under 900px.

## Elevation & Depth

None. Depth comes from colour blocks and the photograph. There are no shadows, no
gradients on objects, and no hairline borders as decoration. The exceptions are
structural: a 4px verde rule above each menu category, a 2px verde border on option
cells, and a 3px rule above the tray total.

## Shapes

- **Pill** (100px): every button, chip, filter, add control and outlet choice.
- **Card** (20px): menu option cells.
- **Large** (25px): slider cards, the tray sheet, the phone dock's top corners.
- **Sticker**: the "Burgers from ₹89" circle in the hero, amarillo, rotated −10°.

## Components

### Buttons
Pill, 20px × 25px padding, 18px / 900 capitals, no icons inside the label.
- **Primary:** verde on amarillo; hover inverts to amarillo on verde. On verde grounds and over the photo it hovers to blanco instead.
- **Inverse:** amarillo on verde; hover inverts. On amarillo grounds it hovers to blanco.
- **Cream:** verde on blanco, for a secondary action on a dark or red ground.
- The primary verb is always ordering: **ORDER ON WHATSAPP** (shortened to ORDER in the navbar on phones).

### Add and in-order control (signature)
A verde **ADD** pill. Once added it becomes an amarillo pill: minus, a ticked count, plus.
State is shown by shape and count as well as colour. In the amarillo tray, the same
control is verde.

### Diet filter
An amarillo pill holding three pills (ALL / VEG / NON-VEG). The pressed one fills verde.
The veg and non-veg marks sit inside their labels.

### Section bar
A verde strip of pill chips in amarillo. The current section fills amarillo.

### Smash-burger slider
Three amarillo cards, each with a studio cut-out photo, name, one ingredients line,
"From ₹…", and a link to that menu section. They sit three across on wide screens and
scroll-snap with BACK / NEXT pills when they overflow. Each card stands for a menu
category, never a named item.

### Order band
ORDER HERE / OR HERE in 50px blanco capitals beside the WhatsApp (amarillo) and Zomato
(blanco) pills. It is used once.

### Location block
A single-colour glyph, the area in capitals, the address, the hours in 25px / 500, then
GET DIRECTIONS and CALL pills.

## Imagery

Stock photography is in use until the restaurant supplies its own. All of it is CC0,
listed with sources in `images/CREDITS.md`:
- **Hero:** a double smash burger with melted cheese, under the scrim.
- **Slider:** three studio burgers with the background cut out to transparent WebP.

Rules:
- Every photo is labelled "Picture(s) for illustration" where it appears, and in the footer.
- Photos illustrate categories, never a specific named item.
- No photos of other restaurants' branded products, even when freely licensed.
- Re-encode every photo so no EXIF or GPS data ships.
- The smash steps (BALL, SMASH, CRISP) are flat sticker drawings in verde, rojo, amarillo and blanco.

## Motion

One duration, `.3s`, on colour swaps only. The marquee loops in 30s. There are no
springs, parallax or scroll reveals. `prefers-reduced-motion` stops the marquee, turns off
smooth scrolling and removes transitions.

## Accessibility

- A focus ring on every control: verde on light grounds, amarillo on verde and the photo, blanco on rojo.
- Touch targets are 44px or larger, footer links included.
- The full-screen menu traps focus, closes on Escape, and returns focus to its button.
- Order changes are announced in a polite live region.
- The marquee and glyphs are `aria-hidden`. The slogan heading carries `lang="hi-Latn"`.
- Veg and non-veg are marked by shape as well as colour, and labelled for screen readers.

## Do's and Don'ts

### Do:
- **Do** give every band one job and one ground colour.
- **Do** make every control a pill and every heading heavy capitals.
- **Do** keep every price visible, in 900 weight with tabular figures, beside its item.
- **Do** mark veg and non-veg with both shape and colour.
- **Do** check text over any new photo against the scrim before shipping it.

### Don't:
- **Don't** add shadows, gradients, outlined buttons or icons inside button labels.
- **Don't** set amarillo text on blanco or rojo, or rojo text on amarillo.
- **Don't** use rojo anywhere but the order band.
- **Don't** present a stock photo as a specific menu item, or drop the "for illustration" note.
- **Don't** use Paput's logo, photographs, fonts, menu or copy. Only the tokens come from the kit.
