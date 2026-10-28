---
name: Clinical Academic Horizon
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#42474f'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#737780'
  outline-variant: '#c3c6d0'
  surface-tint: '#39608e'
  primary: '#002647'
  on-primary: '#ffffff'
  primary-container: '#0b3c68'
  on-primary-container: '#81a7d9'
  inverse-primary: '#a3c9fd'
  secondary: '#006e2d'
  on-secondary: '#ffffff'
  secondary-container: '#7cf994'
  on-secondary-container: '#007230'
  tertiary: '#002743'
  on-tertiary: '#ffffff'
  tertiary-container: '#193d5c'
  on-tertiary-container: '#87a8cc'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e4ff'
  primary-fixed-dim: '#a3c9fd'
  on-primary-fixed: '#001c38'
  on-primary-fixed-variant: '#1d4875'
  secondary-fixed: '#7ffc97'
  secondary-fixed-dim: '#62df7d'
  on-secondary-fixed: '#002109'
  on-secondary-fixed-variant: '#005320'
  tertiary-fixed: '#cfe5ff'
  tertiary-fixed-dim: '#a8caef'
  on-tertiary-fixed: '#001d34'
  on-tertiary-fixed-variant: '#274969'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-hero:
    fontFamily: Inter
    fontSize: 44px
    fontWeight: '800'
    lineHeight: 52px
    letterSpacing: 0.05em
  headline-hero-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '800'
    lineHeight: 34px
    letterSpacing: 0.03em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 28px
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 18px
    letterSpacing: 0.04em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

This design system embodies a modern, clinical, and institutional academic environment tailored for higher medical education. It bridges the authority and solemnity of an established medical faculty with the accessibility and clarity required of an intuitive Virtual Learning Environment (VLE).

The visual aesthetic follows a **Corporate & Institutional Clinical Minimalism**:
- **Tone:** Authoritative, hygienic, structured, encouraging, and clear.
- **Atmosphere:** Clean white surfaces paired with deep clinical blues evoke academic rigor and trust, while rich emerald and foliage greens infuse vitality, progress, and actionable pathways.
- **Target Audience:** Medical students, resident physicians, professors, and health sector researchers who require high legibility, distraction-free content delivery, and rapid navigation across curricular programs.

## Colors

The palette establishes an immediate medical-institutional connection, balancing deep oceanic navy hues with vigorous clinical greens:

- **Primary (`#0b3c68` / `#004080`):** Represents institutional authority, medical legacy, and intellectual focus. Used for primary branding elements, critical headings, primary navigation text, and structural banners.
- **Secondary (`#16a34a` / `#15803d`):** A vital clinical green functioning as the key interaction and signpost color. Applied to the brand mark accent ("FCG"), primary call-to-action buttons ("VER TODOS LOS CURSOS"), navigation highlights, and categorical pills.
- **Tertiary / Base Dark (`#002b49`):** An ultra-deep navy anchor, reserved for the comprehensive institutional footer, session status strips, and high-contrast night overlays.
- **Neutral Palette:**
  - Canvas & Backgrounds: Crisp clean white (`#ffffff`) complemented by an ultra-soft cool gray surface tint (`#f8fafc`).
  - Borders & Dividers: Deliberate, crisp boundaries using subtle slate gray (`#e2e8f0`).
  - Body Text & Subtitles: Slate neutral (`#475569` to `#334155`) ensuring accessible contrast ratios that meet WCAG AAA standards on clinical data displays.

## Typography

The typography leverages **Inter** for its neutral geometry, exceptional legibility at small sizes, and distinct structural figures.

- **Hero & Section Headers:** High-impact bold weights (700 to 800) in uppercase for banner focal points (`ENTORNO VIRTUAL DE APRENDIZAJE`), establishing formal gravitas.
- **Section Headings:** Defined in clinical green (`#16a34a`) or deep blue (`#0b3c68`), often paired with an authoritative horizontal accent bar.
- **Metadata & Tags:** High-density uppercase badges with modest letter spacing (`letterSpacing: 0.04em - 0.05em`) ensure instant recognition of career types (e.g., `PREGRADO`, `TÉCNICO SUPERIOR`).

## Layout & Spacing

A strictly disciplined 12-column responsive fluid grid aligns content across standard desktop viewports (max-width: 1280px container), scaling into 8 columns on tablets and 4 columns on mobile viewports.

- **Vertical Rhythm:** Content clusters adhere to an 8px base rhythm. Card listings employ 24px (`space-lg`) gap intervals.
- **Responsive Adaptations:**
  - Mobile (< 768px): Header condenses to the crest, the brand label, and the green hamburger trigger (`#16a34a`). Cards stack into single-column layouts with edge margins compressed to 16px (`1rem`).
  - Tablet (768px - 1024px): 2-column card layouts, dropdown menus retain compact tap targets.
  - Desktop (> 1024px): 3-column academic course grids with full horizontal navigation bars and integrated search/profile tools.

## Elevation & Depth

Visual hierarchy favors clean surfaces and crisp line art over exaggerated drop shadows, reflecting a sanitary, structured medical framework:

- **Level 0 (Flat Canvas):** Default body background `#ffffff` and subtle `#f8fafc` sectional dividers.
- **Level 1 (Card Rest / Topbar):** Crisp 1px border (`#e2e8f0`) complemented by a gentle ambient shadow: `box-shadow: 0 1px 3px 0 rgba(11, 60, 104, 0.05), 0 1px 2px -1px rgba(11, 60, 104, 0.05)`.
- **Level 2 (Hover State / Floating Modals):** Accentuated hover state for course cards and interactive elements: `box-shadow: 0 10px 15px -3px rgba(11, 60, 104, 0.08), 0 4px 6px -4px rgba(11, 60, 104, 0.04)`, lifting the element 2px via transform.
- **Dark Inversion Depth:** In deep navy containers (e.g., `#002b49` footer), surface tiers are achieved with subtle opacity fills (`rgba(255, 255, 255, 0.08)`) and thin horizontal rules (`rgba(255, 255, 255, 0.12)`).

## Shapes

The shape vocabulary uses gentle, balanced roundedness (8px base) that feels clean, approachable, and ergonomic:

- **Cards & Content Blocks:** Standardized at 12px to 16px corner radii, balancing soft friendliness with clean structure.
- **Pill Elements:** Floating badges, category tags, and the primary "Ingresar" login button utilize full pill geometry (`rounded-full` / 9999px) for clear tactile distinction.
- **Crest & Institutional Media Containers:** Encapsulated in soft rounded containers (`rounded-xl` / 16px) with 1px border frames (`#e2e8f0`).

## Components

### Header & Navigation
- **Top Bar:** Pure `#ffffff` surface, 72px height, pinned to the top with a subtle bottom divider (`#e2e8f0`).
- **Brand Unit:** Calixto García institutional crest framed on the left, paired with the dual-color wordmark: "Aula" in Deep Blue (`#0b3c68`) and "FCG" in Emerald Green (`#16a34a`), accompanied by the sub-label "FACULTAD DE CIENCIAS MÉDICAS 'CALIXTO GARCÍA'" in slate uppercase.
- **Navigation Links:** Dropdown selectors for "Pregrado" and "Postgrado" with `#16a34a` chevron icons and hover states.
- **Access Button ("Ingresar"):** Outlined pill button with 1.5px border (`#0b3c68`), featuring a user avatar icon and text in `#0b3c68`, filling with a light blue wash on hover.

### Action Buttons
- **Primary CTA ("VER TODOS LOS CURSOS"):** Solid emerald green background (`#16a34a`), uppercase bold text (`#ffffff`), rounded-lg (8px-12px), paired with an aligned 4-quadrant grid icon. Active state darkens to `#15803d`.
- **Secondary CTA ("VER CARRERAS"):** Solid deep blue (`#0b3c68`), uppercase bold text (`#ffffff`), accompanied by directional arrow glyphs.
- **Text Links ("Ver cursos →"):** Deep blue bold inline link that shifts to green on hover, coupled with a smooth translating arrow animation.

### Course & Career Cards
- **Architecture:** White container with 1px `#e2e8f0` border, `rounded-xl` (16px), containing a 16:9 contextual banner image at the top.
- **Floating Badge:** Pill-shaped overlay on the image top-left corner, featuring a white/frosted background, green medical iconography (e.g., stethoscope, syringe), and uppercase category text.
- **Card Content:** Upper category subtitle in `#0b3c68` uppercase, bold title in slate dark (`#0f172a`), concise descriptive excerpt, and bottom metadata strip (duration indicator + action link).

### Badges & Category Chips
- Pill geometry with 4px vertical / 12px horizontal padding.
- Semi-transparent tinted backgrounds (e.g., `rgba(22, 163, 74, 0.1)`) paired with high-contrast text (`#15803d`).

### Footer
- Full-bleed deep navy canvas (`#002b49`).
- Features a four-column academic layout: Dual institutional crests (FCG and Universidad Virtual de Salud), social media quick-action squares, site directories, and external links.
- Session indicator strip: "Usted se ha identificado como [Usuario] (Cerrar sesión)" set over a subtle `#0b3c68` horizontal bar.