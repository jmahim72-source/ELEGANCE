---
name: Silent Editorial
colors:
  surface: '#fdf8f4'
  surface-dim: '#ded9d5'
  surface-bright: '#fdf8f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f8f3ef'
  surface-container: '#f2ede9'
  surface-container-high: '#ece7e3'
  surface-container-highest: '#e6e2de'
  on-surface: '#1d1b19'
  on-surface-variant: '#44474c'
  inverse-surface: '#32302e'
  inverse-on-surface: '#f5f0ec'
  outline: '#74777c'
  outline-variant: '#c4c6cc'
  surface-tint: '#516071'
  primary: '#152434'
  on-primary: '#ffffff'
  primary-container: '#2b3a4a'
  on-primary-container: '#94a4b7'
  inverse-primary: '#b8c8dc'
  secondary: '#5e5e5c'
  on-secondary: '#ffffff'
  secondary-container: '#e1dfdc'
  on-secondary-container: '#636360'
  tertiary: '#331f0c'
  on-tertiary: '#ffffff'
  tertiary-container: '#4b341f'
  on-tertiary-container: '#bd9c81'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e4f9'
  primary-fixed-dim: '#b8c8dc'
  on-primary-fixed: '#0d1d2c'
  on-primary-fixed-variant: '#394859'
  secondary-fixed: '#e4e2de'
  secondary-fixed-dim: '#c8c6c3'
  on-secondary-fixed: '#1b1c1a'
  on-secondary-fixed-variant: '#474744'
  tertiary-fixed: '#ffdcc0'
  tertiary-fixed-dim: '#e3c0a3'
  on-tertiary-fixed: '#2a1705'
  on-tertiary-fixed-variant: '#5a422c'
  background: '#fdf8f4'
  on-background: '#1d1b19'
  surface-variant: '#e6e2de'
typography:
  display-xl:
    fontFamily: Bodoni Moda
    fontSize: 96px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: -0.04em
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 64px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 42px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  body-main:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.7'
    letterSpacing: 0.01em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  nav-label:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.15em
  caption:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: 0.05em
spacing:
  section-padding: 160px
  gutter: 48px
  margin-mobile: 24px
  stack-xl: 120px
  stack-lg: 80px
  stack-md: 40px
  stack-sm: 20px
---

## Brand & Style

This design system embodies the "Quiet Luxury" philosophy, prioritizing restraint, material quality, and architectural precision over ornamentation. The brand personality is sophisticated, exclusive, and intellectually driven, targeting a discerning audience that values permanence and subtle detail.

The visual style is a fusion of **Minimalism** and **High-Fashion Editorial**. It relies on the deliberate tension between expansive negative space and precise, high-contrast typography. There is a total absence of decorative flourishes; beauty is derived from the proportions of the grid and the rhythm of the layout. The interface should feel more like a printed monograph or a gallery wall than a traditional software application.

## Colors

The palette is rooted in an organic, bone-toned off-white (#F5F3EF), which provides a softer, more premium foundation than pure white. Typography and structural elements utilize a near-black (#161513) to maintain maximum legibility and a sharp, authoritative edge. 

Ink Blue (#2B3A4A) serves as the sole atmospheric accent, used sparingly for interactive states or specific editorial callouts to signify depth without breaking the minimalist harmony. Neutrality is key; avoid any use of vibrance or synthetic hues.

## Typography

The typographic hierarchy is the primary vehicle for the brand’s voice. **Bodoni Moda** is utilized for display roles; its high-contrast strokes and sharp serifs evoke historical luxury and editorial authority. Display sizes must use tight letter-spacing to create a dense, "blocky" visual impact that balances the surrounding whitespace.

**Inter** provides a neutral, utilitarian counterpoint for body copy and UI labels. Large line-heights (1.7) are mandatory for body text to ensure a relaxed, breathable reading experience. Navigation and small labels use wide-tracked small caps to signal secondary hierarchy and structural organization.

## Layout & Spacing

This design system employs a **Fixed 12-Column Grid** for desktop (1440px base) with substantial 48px gutters. The layout philosophy is **asymmetric**; elements should rarely span the full width. Instead, stagger content across the grid (e.g., an image spanning columns 2-8 while text sits in columns 9-11) to create visual tension.

**Radical Whitespace:** A minimum of 160px vertical padding is required between major sections. Use the `stack-xl` (120px) and `stack-lg` (80px) units to create significant separation between disparate content types. On mobile, the grid collapses to 4 columns with 24px margins, but the philosophy of vertical breathing room remains.

## Elevation & Depth

Depth is communicated through **Tonal Layering** and **Grid Alignment**, never through shadows or blurs. This is a flat, architectural system.

- **Strictly No Shadows:** All elements exist on the same physical plane or are clearly "pasted" on top via color contrast.
- **Surface Contrast:** Use the #F5F3EF base for the canvas and the pure #FFFFFF surface for specific containers (like modal drawers or product cards) to create a subtle "lift" through value difference.
- **Borders:** When necessary to define boundaries, use ultra-fine 1px solid lines in #161513 with 10% opacity.

## Shapes

Shape language is strictly **Sharp (0px)**. All containers, buttons, image frames, and input fields must have square corners. This reinforces the architectural and editorial nature of the design system, echoing the clean edges of a printed magazine or a high-end clothing tag.

## Components

### Navigation
The header is slim and begins as transparent, transitioning to a solid #F5F3EF on scroll. Use the `nav-label` typography style. Links should have a subtle underline on hover that animates from the center.

### Buttons
Buttons are either "Primary" (Solid #161513 with #F5F3EF text) or "Outline" (1px solid #161513). Both are rectangular with no radius. The hover state for Primary buttons is a shift to the Ink Blue accent; for Outline buttons, it is a solid #161513 fill.

### Inputs & Newsletter
Newsletter fields consist of a single 1px bottom border in #161513. Labeling is done in small-caps `caption` style above the line. The "Subscribe" button is a simple text link with an arrow icon (→).

### Product Cards
Cards use a "no-border" approach. Images should be high-resolution with a slight desaturation. Product titles use `body-sm` (Bold), and prices use `body-sm` (Regular). 

### Lists
Lists are separated by 1px horizontal rules spanning the container width. Items use `body-main` for the primary text and `caption` for metadata, aligned to the right of the row.

### Footer
A high-contrast block using a #161513 background with #F5F3EF text. Layout should be organized into 4 columns of small-caps links, with the brand mark occupying the final 4 columns on the right.