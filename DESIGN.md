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
| Hero | looping video (its first frame as poster) under a 50% scrim | blanco | Lead, headline, ORDER and SEE THE MENU, pause control |
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
- Hover inverts fill and text in 0.3s. Everything else that moves is tied to the scroll (see Motion): things are pressed into place and settle.
- One local-language slogan, **DABA KE KHAO** (Hindi: roughly "press down and eat", the way "daba ke khao" means "eat your fill"). It appears as the statement heading and in the marquee, and nowhere else.

## Colors

Five flat hues from the kit, two regulated food-mark colours, and one scrim.

- **Blanco** `#F4F3E6`: the page ground and navbar. A warm cream, never pure white.
- **Verde** `#0A4635`: all ink, the add control, the section bar, the dock, the footer.
- **Amarillo** `#FFC62D`: the primary ORDER pill, the full-screen menu, slider cards, the closer, the tray, and the in-order control.
- **Rojo** `#E54D3A`: the order band only.
- **Azul** `#28306C`: hover colour for full-screen menu links only.
- **Scrim** `rgba(0,0,0,.5)`: over the hero video only. The kit specifies 30%. The video has a white glove and burner flames in frame, so 50% is needed to hold the cream text (measured below). Scrolling darkens it further as the cream band rises over it.
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
| blanco on hero video + scrim | worst pixel over every frame 3.56 (headline, lead) | Both set as large text (headline 900 caps; lead 700 at 19px or larger) |
| blanco on hero video + scrim, bottom-left | worst pixel 6.61 | The 13px pause control and "Video for illustration" (bottom-right drops to 3.56: the flames) |

**Never:** amarillo text on blanco (1.41), amarillo on rojo (2.45), rojo text on amarillo
(2.45), verde text on rojo (2.81), or blanco text on rojo below 24px.

## Typography

**Main face:** Archivo, variable (weight 400–900, width 75–100), self-hosted in `fonts/`.
It stands in for the kit's Roc Grotesk. Display type is set at `font-stretch: 87%`, which
brings Archivo closer to Roc Grotesk's proportions. **Accent face:** Fraunces 600, for the
marquee only, standing in for Nazare. The CSS variables `--font-roc` and `--font-nazare`
make the swap one line if the licensed faces are bought. Archivo is subset to ASCII, common
symbols (© ® ° · ×), typographic quotes and dashes, and the accented letters food copy uses
(café, jalapeño, crème), 40KB; any other character falls back to Arial through
`unicode-range`. The ₹ glyph is a separate 1.4KB file (`archivo-rupee.woff2`), preloaded
because the hero sticker shows a price. Fraunces carries only capitals and basic
punctuation (4KB), since the marquee is set uppercase.

| Style | Size (desktop → ≤991 → ≤767 → ≤479) | Weight / leading |
|---|---|---|
| Hero | 160 → 120 → 80 → 70, capped to fit "SINCE 2024" (5.49em) | 900 / 0.8 |
| Section title | 80 → 60 → 40 (the closer is capped to fit "CHEESEBURGERS.", 8.99em) | 900 / 0.9 |
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
A ResizeObserver measures both heights into `--nav-h` and `--catnav-h` (the CSS defaults
already match, 88px and 76px on phones, so nothing reflows), and anchors land clear of
both bars: a menu category heading lands 16px below the section bar.

The page uses `viewport-fit=cover`, so every edge-hugging band (wrap, navbar, hero, section
bar, menu overlay, dock) pads by `max(gutter, safe-area inset)` and nothing sits under a
phone's notch held sideways.

Find us, the closer and the footer use `content-visibility:auto`, so the browser skips their
layout until they scroll near. Only bands below the top of the last jump target qualify: a
jump that scrolled through a skipped band would aim at its placeholder height and land
short. The order dock is hidden until something is added. It floats bottom-right on
wide screens and becomes a full-width bar under 900px.

## Elevation & Depth

None. Depth comes from colour blocks, the video, and parallax as you scroll. There are no shadows, no
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
- **Primary:** verde on amarillo; hover inverts to amarillo on verde. On verde grounds and over the video it hovers to blanco instead.
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

### Hero video
Muted, looping, inline, no controls but one: **PAUSE VIDEO** / **PLAY VIDEO**, 13px 700
capitals, underlined, bottom-left beside "Video for illustration". The poster (the loop's
first frame, AVIF/WebP) is the LCP image; the video fades in over it once playing. The
script picks the file after the page has loaded: the portrait crop for phones held
upright, 1920 wide where the hero is more than 1700 device pixels wide, 1280 otherwise;
AV1 first, then HEVC, then H.264, and on a phone only a codec it can decode in hardware.
It stops decoding when the hero is off screen or the tab is hidden. Reduced motion, Save-Data
and 2G get the still frame, with PLAY VIDEO to opt in.

### Location block
A single-colour glyph, the area in capitals, the address, the hours in 25px / 500, then
GET DIRECTIONS and CALL pills.

## Imagery

Stock photography and video are in use until the restaurant supplies its own, listed with
sources and licences in `images/CREDITS.md`:
- **Hero:** a 7.9s loop of thin patties pressed and flipped with a spatula on a flat-top,
  under the scrim (Pexels License). No free library had a ball being smashed flat; the
  restaurant's own footage of that is the replacement to shoot.
- **Slider:** three studio burgers with the background cut out to transparent WebP (CC0).

Every photo ships as AVIF with the WebP as fallback in `<picture>`. The slider has a 660w
step so a DPR-2 phone doesn't pull the 900w file. `tools/images.mjs`
(`cd tools && npm install && npm run images`) rebuilds every variant from the largest WebP
of each photo; run it after swapping in real photography.

The hero video ships three ways: a 600×1000 portrait crop for phones held upright (with a
slow eased pan that follows the spatula), 1280×720, and 1920×1080; each as AV1, HEVC and
H.264 (no H.264 at 1920). Its last second is cross-faded into its first, so the loop has
no seam, and a light temporal denoise halves the bits the sizzle costs (invisible under
the scrim). Phones download 0.8 to 1.2MB, after the page has loaded. `tools/video.mjs`
(`npm run video`) rebuilds every encode and the posters from the source clip, or from real
footage passed as its first argument. `npm run audit` runs Lighthouse for mobile and desktop.

Rules:
- Every photo is labelled "Picture(s) for illustration" (the video "Video for illustration") where it appears, and in the footer.
- Photos illustrate categories, never a specific named item.
- No photos of other restaurants' branded products, even when freely licensed.
- Re-encode every photo and video so no EXIF, GPS or other metadata ships, and no audio.
- The smash steps (BALL, SMASH, CRISP) are flat sticker drawings in verde, rojo, amarillo and blanco.

## Motion

**Language: pressure.** Things are pressed into place and settle, like a patty on the
steel. Every scroll effect is tied to how far its element has travelled through the
viewport, never triggered on and left to run, so it moves with the reader and reverses
when they scroll back. Each frame the scroll position the effects read is eased toward the
real one (time constant 0.1s, 0.06s when Lenis is smoothing the wheel), so effects glide in
and settle instead of starting and stopping with the scroll. Only `transform` and
`opacity` change.

| Where | On scroll |
|---|---|
| Hero | The cream band rises over the griddle: the video sinks at 0.45× and darkens, the copy drifts up slower than the page, UNDER PRESSURE SINCE 2024 is pressed flat (scaleY to 0.58, from its baseline) and the sticker spins away |
| Statement | DABA KE KHAO pops up through its line letter by letter; the paragraph inks in word by word as it is read (from 72% opacity, the AA floor, to 100%) |
| The smash | Scrolling does the cooking: the ball drops and squashes on landing, the press comes down and the patty spreads under it, the lacy edge spreads and the fat spits |
| Burger cards | Dealt onto the table: they slide up fanned (−7°, 0°, 7°) and square up; each burger floats a little as it passes |
| Marquee | Tilts from −7° to −3° as it passes; scrolling speeds it up, leans it into the motion and turns it round when the scroll turns round. At rest, one loop per 30s |
| Menu | Each category's 4px rule draws in from the left and its name rises; items arrive as they clear the bottom edge, quickly, so scanning never waits |
| Order band | ORDER HERE and OR HERE slide in from opposite edges; the pills are pressed into place |
| Find us, closer, footer | Outlets rise with their glyphs stamped on; the cheeseburger line rises word by word; the footer rises from under the closer and lands at the very end of the page |

On load, the hero has a short intro (1.8s at most): the video settles from 118% to 100%,
the headline rises line by line, the sticker is stamped on with a small overshoot.

Easing: `--ease-out` `cubic-bezier(.16,1,.3,1)` (expo-out) for anything arriving,
`--ease-back` `cubic-bezier(.34,1.56,.64,1)` for the stamped sticker and pills. Colour
swaps on hover stay at `.3s`, and only where a pointer can hover (`@media (hover:hover)`):
on a phone a tapped pill would otherwise stay inverted.

**Smooth wheel.** On mouse and trackpad machines [Lenis](https://github.com/darkroomengineering/lenis)
smooths the wheel (lerp 0.12). It keeps native scrolling, so sticky bars, anchors (with
their scroll-padding and scroll-margin), IntersectionObserver and keyboard scrolling all
work as before. Touch devices keep their own momentum and never download it. It stops
while the full-screen menu is open; the menu and the tray scroll natively
(`data-lenis-prevent`).

Rules:
- **Text is fully opaque before it is substantially on screen.** Fades finish within the
  first third of a move, so wherever the scroll stops nothing rests half-faded and every
  contrast pair keeps its ratio. Solid shapes (cards, the footer) don't fade at all.
- Nothing reads layout while the page parses. The effects are built in the frame after
  first paint and measured in the next, from `offsetTop`, never from transformed boxes;
  they re-measure whenever the page changes size. Inside a `content-visibility:auto` band,
  elements are measured only once the band comes near, so the browser never renders it early.
- At rest the script stops; each frame writes only values that changed.
- `prefers-reduced-motion`: no intro, no scroll effects, no Lenis, no autoplay (PLAY VIDEO
  to opt in), the marquee stands still, smooth scrolling and transitions are off.

## Accessibility

- A focus ring on every control: verde on light grounds, amarillo on verde and the video, blanco on rojo.
- Touch targets are 44px or larger, footer links included.
- The full-screen menu traps focus, closes on Escape, and returns focus to its button.
- Order changes are announced in a polite live region.
- The marquee and glyphs are `aria-hidden`. The slogan heading carries `lang="hi-Latn"`; its letters are split for the scroll effect, so they are `aria-hidden` behind a whole-text copy for screen readers.
- The hero video is decorative (`aria-hidden`, muted) and can be paused (WCAG 2.2.2).
- Veg and non-veg are marked by shape as well as colour, and labelled for screen readers.

## Do's and Don'ts

### Do:
- **Do** give every band one job and one ground colour.
- **Do** make every control a pill and every heading heavy capitals.
- **Do** keep every price visible, in 900 weight with tabular figures, beside its item.
- **Do** mark veg and non-veg with both shape and colour.
- **Do** check text over any new photo or video against the scrim before shipping it, over every frame.
- **Do** tie motion to the scroll and ease it; animate `transform` and `opacity` only.

### Don't:
- **Don't** add shadows, gradients, outlined buttons or icons inside button labels.
- **Don't** leave text resting below full opacity, or animate anything that triggers layout.
- **Don't** set amarillo text on blanco or rojo, or rojo text on amarillo.
- **Don't** use rojo anywhere but the order band.
- **Don't** present a stock photo as a specific menu item, or drop the "for illustration" note.
- **Don't** use Paput's logo, photographs, fonts, menu or copy. Only the tokens come from the kit.
