---
name: The Smashery
description: Smash burgers on a roadside hoarding at dusk.
colors:
  ink: "#1E130C"
  ink-soft: "#56463B"
  flex-white: "#FAF8F2"
  paper: "#FFFFFF"
  cheese: "#FFC21A"
  cheese-hi: "#FFD24D"
  chilli: "#D9301C"
  chilli-plate: "#C42816"
  sodium: "#FF8A1F"
  veg-green: "#0F7B36"
  nonveg-brown: "#8B3A12"
  night: "#0F1546"
  night-raised: "#151C58"
  steel: "#6B7594"
  steel-dark: "#3B4160"
  on-night: "#F5F3FF"
  on-night-soft: "#BAC0E8"
typography:
  display:
    fontFamily: "Shrikhand, Georgia, serif"
    fontSize: "clamp(3rem, 1.6rem + 6vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.95
  headline:
    fontFamily: "Shrikhand, Georgia, serif"
    fontSize: "clamp(1.85rem, 1.2rem + 2.5vw, 3.05rem)"
    fontWeight: 400
    lineHeight: 1.02
  title:
    fontFamily: "Anek Latin, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 680
    lineHeight: 1.25
    fontVariation: "'wdth' 96"
  body:
    fontFamily: "Anek Latin, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 450
    lineHeight: 1.5
  price:
    fontFamily: "Anek Latin, system-ui, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 800
    lineHeight: 1.2
    fontFeature: "'tnum' 1, 'lnum' 1"
    fontVariation: "'wdth' 84"
  label:
    fontFamily: "Anek Latin, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 700
    letterSpacing: "0.08em"
    fontVariation: "'wdth' 85"
rounded:
  board: "3px"
  panel: "6px"
  plate: "8px"
  tray: "12px"
  pill: "999px"
spacing:
  gutter: "clamp(16px, 4vw, 40px)"
  wrap: "1180px"
  section: "clamp(64px, 8vw, 112px)"
  row: "1rem"
components:
  button-primary:
    backgroundColor: "{colors.cheese}"
    textColor: "{colors.ink}"
    rounded: "{rounded.plate}"
    padding: "0.8rem 1.25rem"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.cheese-hi}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.on-night}"
    rounded: "{rounded.plate}"
    padding: "0.8rem 1.25rem"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.flex-white}"
    rounded: "{rounded.plate}"
    padding: "0.8rem 1.25rem"
  add-control:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    size: "44px"
  in-order-control:
    backgroundColor: "{colors.sodium}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    height: "44px"
  section-tag:
    backgroundColor: "transparent"
    textColor: "{colors.on-night}"
    rounded: "{rounded.panel}"
    padding: "0.45rem 0.85rem"
  section-tag-current:
    backgroundColor: "{colors.cheese}"
    textColor: "{colors.ink}"
  sign-off-plate:
    backgroundColor: "{colors.chilli-plate}"
    textColor: "{colors.paper}"
    rounded: "{rounded.board}"
---

# Design System: The Smashery

## Overview

**Creative North Star: "The Roadside Hoarding at Dusk"**

The Smashery is drawn as the NCR roadside hoarding: a printed board on a steel frame, lit by lamps against an ultramarine evening sky, with a high-rise skyline at its foot. Each hoarding carries one hand-drawn cartoon, one hand-lettered pun and a sign-off plate in the corner. The menu, outlets and order tray are printed from the same flex stock in the same ink. They never pretend to be billboards themselves.

Density follows the job. The hero and the closing board are big and quiet, with one joke each. The menu is a long, dense, scannable printed sheet: every price is visible, veg and non-veg are marked, and every item has a one-tap add. Motion is spent once, on arrival. The lamps flicker on, then the press smashes the patty.

All imagery is drawn in code as flat ink-outlined vector: no photography, no stock, no imitation textures beyond a faint print grain. That is the honest material of a printed cartoon hoarding.

**Key Characteristics:**
- Dusk-ultramarine sky owns the page; white flex boards and panels sit on it.
- Thick brown-black ink outlines and flat poster fills, never gradients on objects.
- Shrikhand, a hand-painted signage face, for every pun and heading; Anek Latin for reading and prices.
- Food drawings share one scale: a double really stands taller than a single, and a momo really is small.
- Sodium-lamp orange means "in your order" and nothing else.

## Colors

A committed night palette with three poster colours and one reserved state colour.

### Primary
- **Dusk Ultramarine** (night): the page ground and sticky bars. The hero carries it as a sky gradient that warms to a sunset horizon behind the skyline.
- **Melted Cheese** (cheese): the primary action (WhatsApp ordering), the wordmark, the current section tag, and section titles set on the night sky.

### Secondary
- **Chilli Red** (chilli): hand-lettered headings and category titles on white flex, plus the cartoon sleeve and griddle knobs.
- **Sign-off Red** (chilli-plate): the sign-off plate behind white and cheese lettering. It is deeper than Chilli so the yellow ₹ price still reads.

### Tertiary
- **Sodium Lamp** (sodium): reserved for things in your order: the quantity pill, the tray badge, the stamped tick.

### Neutral
- **Hoarding Ink** (ink): every outline, all text on white, primary-button text.
- **Faded Ink** (ink-soft): descriptions and secondary text on flex.
- **Flex White** (flex-white): boards, the menu sheet, panels, the tray.
- **Galvanised Steel** (steel, steel-dark): board frames, legs, catwalks, panel rims.
- **Moonlight** (on-night, on-night-soft): text on the night sky.
- **Food marks** (veg-green, nonveg-brown): the Indian veg (square and dot) and non-veg (square and triangle) marks, and only those.

### Named Rules
**The Sodium Rule.** Sodium orange appears only on items in the order, and always beside a tick and a count. It never decorates and never stands alone as a state.

**The Night Owns the Page Rule.** White appears as printed boards on the night ground, never as the page ground itself.

## Typography

**Display Font:** Shrikhand (Georgia fallback), self-hosted from `fonts/`
**Body Font:** Anek Latin variable, width 75–125 and weight 100–800 (system-ui fallback), self-hosted

**Character:** Shrikhand comes from Gujarati hand-painted signage. It is fat, italic-leaning and cheerful, and it carries every pun. Anek is a sturdy Indian-made grotesk whose width axis gives prices and labels a tighter fit than the reading text.

### Hierarchy
- **Display** (Shrikhand 400, clamp(3rem → 6rem), 0.95): section titles on the sky, such as "The menu" and "Find us". The hero pun scales with its board (5.15 container-width units on desktop, 10.4 on phones).
- **Headline** (Shrikhand 400, clamp(1.85rem → 3.05rem), 1.02): category titles on the menu sheet, outlet names, the tray title.
- **Title** (Anek 680, 1.1875rem, 1.25, width 96): menu item names. Signature items use Shrikhand at 1.55rem instead.
- **Body** (Anek 450, 1.0625rem, 1.5): descriptions at 0.98rem, capped at 62ch.
- **Price** (Anek 800, 1.3rem, width 84, tabular lining figures): every ₹ figure.
- **Label** (Anek 700, 0.78rem, 0.08em, uppercase, width 85): small furniture such as "Est. 2024".

### Named Rules
**The One Joke Rule.** Shrikhand sets puns and headings only, never body text, buttons or prices.

**The Tabular Price Rule.** Prices are always Anek 800 with tabular lining figures, so columns of ₹ line up.

## Layout

The page is a one-column stack inside a 1180px wrap with a fluid 16–40px gutter. Sections breathe at 64–112px of vertical padding.

The hero board width is `min(1120px, 100vw − gutters, (viewport height − 300px) × 2)`. The board, both actions and the top of the skyline therefore stay in the first viewport from 1024×768 up. The board is a container (`container-type: inline-size`), and its lettering, sign-off and lamps are sized in container units, so the composition scales as one object.

At 760px and below the board turns portrait: pun, then cartoon (a reframed viewBox), then a full-width sign-off band, all on a single unipole leg. At 1000px and up, menu items sit in two columns. Items with option grids (momos, dips, chicken strips) span both columns with four options per row, or two on phones. Below 900px a fixed dock carries Call and Order on WhatsApp, and it becomes the order bar once anything is added.

## Elevation & Depth

Depth is physical. Boards and panels sit in a steel rim (a 10px steel ring plus a 3px ink ring) and cast a soft drop shadow onto the night. Buttons lift slightly on hover with a soft blurred shadow. Lamps cast warm pools that are multiplied onto the board and glow as halos on the sky. Nothing uses a hard offset shadow.

### Shadow Vocabulary
- **Board rim and drop** (`0 0 0 10px steel-dark, 0 0 0 13px ink, 0 30px 60px -24px rgba(3,5,25,.85)`): every printed panel and the menu sheet.
- **Plate lift** (`0 8px 18px -10px rgba(0,0,0,.6)`, hover `0 14px 24px -12px`): primary buttons.
- **Tray float** (`0 20px 40px -16px rgba(3,5,25,.85)`): the order tray and dock.

### Named Rules
**The Steel Rim Rule.** A printed surface is always framed by steel and ink. Floating white rectangles without a rim do not exist in this world.

## Shapes

Shapes are nearly square: boards at 3px, panels at 6px, sign plates (buttons) at 8px, the tray at 12px. Pills (999px) are reserved for round controls: the add button and the in-order quantity pill. Borders are ink, 3–4px on surfaces and controls. Dividers inside the menu are dotted (rows) or dashed (categories). The veg and non-veg marks keep their regulated square-with-dot and square-with-triangle shapes.

## Components

### Buttons
- **Shape:** painted sign plate (8px radius, 3px ink border, minimum 48px tall, 56px in the hero).
- **Primary:** melted cheese with ink text and a chat-bubble icon. It always means ordering.
- **Hover / Focus:** lifts 2px and brightens to cheese-hi. Focus is a 3px cheese outline on night, or an ink outline on flex.
- **Ghost (on night):** transparent with a moonlight border and text. **Ink / Line (on flex):** solid ink, or an ink outline for secondary outlet actions.

### Chips
- **Section tags:** a sticky night bar of 6px-radius tags with a faint moonlight border. The current section fills with cheese.
- **Diet filter:** a three-way segmented plate (All / Veg / Non-veg) with the food marks inside. The pressed segment turns moonlight with ink text.

### Cards / Containers
- **Menu sheet:** one long flex-white board holding every category. The signature category is a full-bleed cheese band at its top.
- **Panels:** the explainer and the outlets use the same flex, rim and 6px corners. No nested cards.

### Navigation
The wordmark is set in Shrikhand cheese, with text links and a primary plate on desktop. On phones only the wordmark shows, and the dock takes over the actions.

### Order controls (signature)
A 44px white round add button with an ink ring. Once added, it becomes a sodium pill: minus, a ticked count, plus. Option grids use the same control inside 10px-radius white cells that take an ink border when chosen. The tray is a non-modal sheet above the dock. It holds order lines with the same pills, a tabular total, an outlet choice, and a Send on WhatsApp plate that pre-writes the message.

### The hoarding (signature)
A flex board in a steel rim with lamp arms on top, a catwalk and legs below, and one cartoon, one pun and one sign-off plate. It is used exactly twice: the hero and the closing board.

## Do's and Don'ts

### Do:
- **Do** draw food in flat ink-outlined vector at one shared scale (one unit per millimetre, 130-unit-tall viewBox, baseline at 124).
- **Do** keep every price visible as Anek 800 tabular figures beside its item.
- **Do** mark veg and non-veg with both shape and colour.
- **Do** spend motion once, on the hero: lamps flicker on, then the smash. Respect reduced motion by showing the finished frame.
- **Do** reserve sodium orange for the order state, always with a tick and a count.

### Don't:
- **Don't** use food photography or stock imagery until the restaurant supplies real photos. Never present a drawing as a photo.
- **Don't** put white or cream behind the whole page. The night is the ground.
- **Don't** set body copy, buttons or prices in Shrikhand.
- **Don't** add a third hoarding. More content goes on the printed sheet, not on more billboards.
- **Don't** use hard offset shadows, gradient text, or eyebrow labels above headings.
