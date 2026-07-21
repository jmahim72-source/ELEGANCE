# Stitch Prompt Kit — Premium Clothing Brand Website

## How to use this
1. Paste the **MASTER BRAND BRIEF** into Stitch first (as the system/context prompt if it supports persistent context, or at the top of every screen prompt if it doesn't retain context between generations).
2. Then generate **one screen at a time** using the MASTER BRIEF + the relevant SCREEN PROMPT below.
3. Keep every screen prompt in the same session/thread so Stitch has visual continuity (color, type, spacing) — don't start fresh sessions per screen unless you're okay with drift.
4. Replace `[BRAND NAME]`, `[PRIMARY COLOR]` etc. with your actual choices before pasting.

---

## MASTER BRAND BRIEF (paste with every screen)

```
Design a premium, editorial fashion e-commerce website for "[BRAND NAME]," 
a minimalist contemporary clothing brand positioned between quiet-luxury 
(The Row, Toteme, COS) and directional streetwear-adjacent minimalism 
(Jacquemus, Ganni). The brand voice is confident, understated, and 
unhurried — never loud, never cluttered.

DESIGN PRINCIPLES (apply to every screen):
- Radical whitespace. When in doubt, remove an element rather than add one.
- Full-bleed, high-contrast photography does the storytelling — UI chrome 
  should almost disappear.
- Typography-led hierarchy over decorative UI elements. No drop shadows, 
  no gradients, no rounded "app-like" cards unless explicitly noted.
- Grid-based, asymmetric layouts occasionally (not everything centered).
- Micro-interactions should feel quiet: subtle underline reveals on hover, 
  slow fade transitions, no bouncy/playful motion.

COLOR PALETTE:
- Base: off-white / bone (#F5F3EF) and near-black (#161513) — avoid pure 
  white/pure black, it reads cheap and flat.
- One accent color used sparingly (10% of the page max) — e.g. a muted 
  clay, olive, or ink blue. Choose [PRIMARY ACCENT COLOR].
- No more than 3 colors total on any screen excluding photography.

TYPOGRAPHY:
- Display/headline font: a high-contrast serif or elegant grotesk 
  (reference feel: Canela, Reckless, GT Sectra, or Söhne if grotesk) — 
  large sizes (48–96px on desktop), generous negative letter-spacing 
  on headlines, wide tracking on all-caps labels.
- Body font: a clean neutral sans (reference feel: Suisse Int'l, Neue 
  Haas, or Inter) at restrained sizes (14–16px), high line-height (1.5–1.7).
- Navigation and micro-labels in small caps or uppercase with wide 
  letter-spacing (e.g. "SHOP" "NEW ARRIVALS" "THE EDIT").

LAYOUT SYSTEM:
- 12-column grid, generous gutters (32–48px desktop).
- Consistent vertical rhythm — large section padding (96–160px between 
  major sections on desktop).
- Product images: mostly 3:4 or 4:5 portrait crop, consistent across grids.

NAVIGATION (persistent across all pages):
- Slim top bar: logo centered or left, nav links (SHOP, COLLECTIONS, 
  JOURNAL, ABOUT) right or split either side of centered logo, 
  cart/search/account icons far right, minimal line icons only.
- Nav bar transparent over hero imagery, becomes solid bone/off-white 
  on scroll.
- No mega-menu clutter — a slim dropdown with 2–3 curated categories 
  and one editorial image, not a wall of links.

FOOTER (persistent across all pages):
- Dense but organized: newsletter signup (minimal, single email field, 
  understated button), sitemap columns (Shop, Company, Help, Legal), 
  social icons (line style), payment icons, small print copyright line.
- Footer background: near-black (#161513) with off-white text for contrast 
  against the rest of the site.

Do NOT include: chat bubbles, colorful badges/stickers, countdown timers, 
busy carousels with dots+arrows+thumbnails all at once, stock "sale 50% 
off" banner aesthetics, emoji, playful illustrations, or SaaS-style 
dashboard UI patterns.
```

---

## SCREEN 1 — Homepage

```
[paste MASTER BRIEF above, then:]

Generate the HOMEPAGE.

Structure top to bottom:
1. Full-bleed hero: single striking editorial photo/video-still of a 
   model in the brand's current collection, minimal text overlay — 
   one line headline (e.g. "THE AUTUMN EDIT") in display serif, one 
   small CTA button "Shop the Collection" with a thin border, no fill.
2. Marquee/ticker strip directly below hero: subtle scrolling text 
   line (e.g. "FREE SHIPPING OVER $200 — NEW ARRIVALS WEEKLY — 
   MADE RESPONSIBLY") in tiny uppercase tracked type, one thin 
   horizontal rule above and below.
3. "Shop by Category" — 3 large asymmetric image tiles (not equal 
   grid; one large tile + two stacked smaller ones), each with a 
   category name overlay in bottom-left corner.
4. Featured product carousel: "New Arrivals" — horizontal scroll of 
   6 products, each card = image, product name, price, no add-to-cart 
   button visible until hover.
5. Full-width editorial break: large lifestyle photo with a short 
   brand philosophy line centered on top (2 sentences max, serif 
   italic), no button.
6. "The Edit" / lookbook teaser: 2-column layout — left side large 
   image, right side short editorial text + "View Lookbook" link 
   with underline-on-hover animation.
7. Instagram/UGC strip: 5 square images in a row, minimal, no icons.
8. Newsletter signup band: centered, single line headline 
   ("Join the List"), email input + minimal button, on near-black 
   background.
9. Footer as specified in master brief.

Include subtle scroll-reveal notes (fade-up on scroll) as annotations.
```

---

## SCREEN 2 — Category / Collection Grid (PLP)

```
[MASTER BRIEF +]

Generate the PRODUCT LISTING PAGE for a category (e.g. "Outerwear").

Structure:
1. Slim page header: category name in large serif, small product 
   count ("42 items"), one-line category description in muted gray.
2. Sticky filter/sort bar below header (not a heavy sidebar): 
   horizontal row with "Filter" and "Sort by" as understated 
   text-triggered dropdowns, plus a size-quick-filter row of small 
   pill outlines (XS S M L XL).
3. Product grid: 3 columns desktop / 2 tablet, consistent 4:5 image 
   crop, on-hover shows second product image (back view) with a 
   slow crossfade, product name + price below image in small type, 
   a small heart/wishlist icon top-right of each card only, no 
   colorful "SALE" tags — if on sale, price shown as strikethrough + 
   new price in the accent color only.
4. "Load more" understated text button at bottom (not pagination 
   numbers, not infinite scroll indicator).
5. Footer as specified in master brief.

Filters panel (if expanded): renders as a slide-over panel from the 
right, minimal checkboxes, no heavy borders, "Apply" as a full-width 
bordered button at the bottom.
```

---

## SCREEN 3 — Product Detail Page (PDP)

```
[MASTER BRIEF +]

Generate the PRODUCT DETAIL PAGE.

Structure:
1. Two-column layout: LEFT 60% = image gallery (large primary image, 
   thumbnail strip or dot indicators below, all in 4:5 crop, 
   include a "zoom on hover" note), RIGHT 40% = product info panel.
2. Right panel top to bottom: category eyebrow label (uppercase, 
   small, muted), product name (large serif), price (medium sans), 
   short 1-line product description, color swatch selector (small 
   circles, not big blocks), size selector (row of outlined boxes, 
   selected state = filled near-black), "Add to Bag" button 
   (full-width, near-black fill, off-white text, no rounded corners 
   or very minimal 2px radius), "Add to Wishlist" as a text link 
   below (not another button), small trust row (shipping/returns 
   icons, line style, 3 items).
3. Expandable accordion sections below: "Details & Care," 
   "Sizing & Fit," "Shipping & Returns" — thin dividing lines, 
   plus/minus icon that rotates, no rounded card backgrounds.
4. "Complete the Look" section: 3–4 product cards styled to match 
   the PLP grid cards, horizontal scroll.
5. Footer as specified in master brief.
```

---

## SCREEN 4 — About / Brand Story

```
[MASTER BRIEF +]

Generate the ABOUT/BRAND STORY page.

Structure:
1. Full-bleed atmospheric hero image (studio, atelier, or founder 
   portrait), large serif headline overlay ("Our Story" or brand 
   philosophy line), no CTA button on this hero.
2. Long-form editorial text block, generous line-height, max-width 
   ~640px centered, broken into 2–3 short paragraphs with a pull-quote 
   in large italic serif between them.
3. Founder/team image + short bio side-by-side (image left, text 
   right), alternate on next block (text left, image right) for rhythm.
4. Values/pillars section: 3 columns, minimal icon (line style) + 
   short label + one sentence, no icon backgrounds/circles.
5. Sustainability/craftsmanship statement block on near-black 
   background with off-white serif text, full-width.
6. Footer as specified in master brief.
```

---

## SCREEN 5 — Cart / Bag (slide-over or full page — pick one)

```
[MASTER BRIEF +]

Generate the CART/BAG page as a right-side slide-over panel.

Structure:
1. Header: "Your Bag (3)" in serif, close icon (thin X) top-right.
2. Line items: small product thumbnail (4:5), name, size/color, 
   quantity stepper (minimal – / number / +), price, remove as small 
   text link ("Remove") — no trash-can icon, keep it text-based for 
   the premium feel.
3. Subtotal line, note about shipping/taxes calculated at checkout 
   in small muted text.
4. "Checkout" full-width button (near-black fill), "Continue Shopping" 
   as text link below.
5. Optional: "You may also like" — 2 small product cards below the 
   button, muted, clearly secondary.
```

---

## SCREEN 6 — Checkout

```
[MASTER BRIEF +]

Generate the CHECKOUT page.

Structure:
1. Two-column layout: LEFT = form steps (Contact → Shipping Address 
   → Payment) as a single scrollable form (not a multi-step wizard 
   unless you prefer that — note both options), minimal input fields 
   with thin bottom-border style (not boxed inputs) inspired by 
   editorial/luxury checkout UX. RIGHT = sticky order summary card: 
   product thumbnails, name, price, subtotal, shipping, total, 
   promo code field (understated, text-link style "Add promo code").
2. Trust markers row above the fold: secure checkout icon, accepted 
   payment icons in line style, return policy note.
3. Final CTA: "Place Order" full-width button.
4. Keep this screen the most restrained of all — checkout is not the 
   place for brand storytelling, just clarity and trust.
```

---

## SCREEN 7 — Journal / Editorial (Blog)

```
[MASTER BRIEF +]

Generate the JOURNAL landing page (editorial/lookbook content, not 
a typical blog).

Structure:
1. Page header: "Journal" in serif, one-line description.
2. Featured story: one large full-width image + headline + short 
   excerpt, positioned as a hero article.
3. Grid of articles below: 2 columns, each = image (4:5 or 16:9 
   depending on content type), category tag (small uppercase), 
   headline (serif), date + read time in muted small type.
4. No comment counts, no like buttons, no author avatars unless 
   the brand voice is personality-led — keep it editorial-magazine, 
   not blog-platform.
5. Footer as specified in master brief.
```

---

## Notes for your portfolio framing

A few things worth deciding *before* you generate, since they'll shape how the portfolio piece reads:

- **Pick a real fictional brand name and stick to it** across every screen prompt — reviewers notice when a "portfolio project" has placeholder text like "Brand Name" still visible in a screenshot.
- **Decide checkout flow once** (single-page vs multi-step) — don't let Stitch decide differently per generation, or your case study will look inconsistent.
- **Source or generate consistent photography** before running screens — if each screen prompt lets Stitch invent unrelated stock-style imagery, the "premium" feel collapses because the model/product photography won't match across pages. This is the single biggest risk to the polish you're after.
- When you move into Antigravity, keep this same brief as a `DESIGN.md` or system prompt reference so the coded implementation doesn't drift from what Stitch generated.
