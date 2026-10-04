# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Hungry locals around Indirapuram (Ghaziabad) and Sector 76, Noida, usually on a phone in the evening, deciding what to eat tonight. They scan the menu and prices, check veg or non-veg, and order through WhatsApp or Zomato. Finding an outlet (directions, timings, calling) is a secondary job.

## Product Purpose

The Smashery is a smash burger restaurant with two outlets, established 2024. The website exists to turn a hungry visitor into an order: show the full menu with honest prices, make veg and non-veg obvious, and put WhatsApp and Zomato ordering one tap away. Success is an order placed, or a visitor walking in knowing what they want.

## Positioning

- Real smash technique: thin patties pressed hard on the griddle so the edges go crispy, which most local burger joints don't do.
- Value prices: burgers from ₹89, most under ₹250.

Also on the menu but not a stated differentiator: momos (steamed, fried, kurkure, pan fried), loaded fries, onion rings, sides, and Indian-flavour burgers (tandoori, paneer, Korean, mutton).

## Operating Context

- Ordering: WhatsApp +91 78950 99420 (pre-filled message), Zomato (Indirapuram listing). No on-site cart or payment.
- Outlets: Lotus Pond Market, Vaibhav Khand, Indirapuram, Ghaziabad (opens 5 PM; maps.app.goo.gl/pe6csEpJZryvv2on6). 76 Complex Street, Sector 76, Noida (timings by phone).
- Indian veg / non-veg marks (green square-dot, brown/red square-dot) are the expected convention for food listings.

## Capabilities and Constraints

- Static site: a single `index.html` (HTML, CSS, small vanilla JS), no build step. Existing codebase answers the stack.
- Menu content, item names, descriptions and prices in the current `index.html` are the source of truth. Two sides (Cheese Corn Cigar Roll, Cheese Corn Nugget) have no price: "Ask for price".
- Veg / non-veg filter on the menu is existing functionality to keep.
- Noida outlet hours are unknown; do not invent them.

## Brand Commitments

- Name: The Smashery. "Est. 2024".
- Footer line in use: "I may look like I'm listening, but I'm thinking cheeseburgers."
- No logo or brand rules exist yet. No binding colours or fonts.

## Evidence on Hand

- Full menu with prices (in `index.html`).
- Two outlet addresses, one phone number, a Zomato listing, geo coordinates for Indirapuram.
- No food or outlet photography, no logo, no reviews, ratings, press, or customer counts. Do not fabricate any of these; visuals are illustrated in code.

## Product Principles

1. The menu is the product. Every price is visible without hunting.
2. Ordering is always one tap away, especially on a phone.
3. Show the smash, don't just say it: the technique is the reason to choose us.
4. Honest value: real prices up front, no invented claims.
5. Veg and non-veg are never ambiguous.

## Accessibility & Inclusion

Mobile-first for evening phone use. Veg / non-veg must not rely on colour alone (shape plus label). WCAG AA contrast.
