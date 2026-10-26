---
name: Clinical Academic Horizon
colors:
  surface: '#f8f9ff'
  surface-dim: '#ccdbf3'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d5e3fc'
  on-surface: '#0d1c2e'
  on-surface-variant: '#44474e'
  inverse-surface: '#233144'
  inverse-on-surface: '#eaf1ff'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#495f82'
  primary: '#001026'
  on-primary: '#ffffff'
  primary-container: '#0b2545'
  on-primary-container: '#778db2'
  inverse-primary: '#b1c7f0'
  secondary: '#904d00'
  on-secondary: '#ffffff'
  secondary-container: '#fe932c'
  on-secondary-container: '#663500'
  tertiary: '#001404'
  on-tertiary: '#ffffff'
  tertiary-container: '#002c0f'
  on-tertiary-container: '#3c9e57'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#b1c7f0'
  on-primary-fixed: '#001c3b'
  on-primary-fixed-variant: '#314769'
  secondary-fixed: '#ffdcc3'
  secondary-fixed-dim: '#ffb77d'
  on-secondary-fixed: '#2f1500'
  on-secondary-fixed-variant: '#6e3900'
  tertiary-fixed: '#95f8a7'
  tertiary-fixed-dim: '#79db8d'
  on-tertiary-fixed: '#00210a'
  on-tertiary-fixed-variant: '#005323'
  background: '#f8f9ff'
  on-background: '#0d1c2e'
  surface-variant: '#d5e3fc'
typography:
  display-hero:
    fontFamily: Inter
    fontSize: 42px
    fontWeight: '800'
    lineHeight: 52px
    letterSpacing: 0.08em
  display-hero-mobile:
    fontFamily: Inter
    fontSize: 26px
    fontWeight: '800'
    lineHeight: 34px
    letterSpacing: 0.04em
  headline-lg:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 28px
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
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
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
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.06em
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
---

## Brand & Style

This design system establishes an institutional, modern, and clinically precise virtual learning environment for the Facultad de Ciencias Médicas "Calixto García". It merges the heritage and gravitas of traditional medical academia with clean, efficient digital usability tailored to health sciences students, clinicians, and faculty members.

The visual style blends **Corporate / Modern Institutional** discipline with **Clinical Cleanliness**. Surfaces are pristine white and soft slate, punctuated by deep navy anchors, medical laurel green accents derived from the historical faculty crest, and high-visibility ochre gold calls to action. The interface inspires confidence, academic rigor, reliability, and mental clarity under rigorous study conditions.

## Colors

The palette is anchored in four functional roles:

- **Primary (`#0B2545` - Academic Deep Navy):** Represents scholarly authority and institutional permanence. It covers key application headers, primary form buttons, major headlines, and the structural top bar and footer.
- **Secondary (`#D97706` - Academic Ochre Gold):** High-contrast accent color reserved for prominent action pathways (e.g., "Carreras", "Ver Todos Los Cursos", key interactive milestones), bringing energy to an otherwise clinical canvas.
- **Tertiary (`#15803D` - Medical Laurel Green):** Sourced from the medical heraldry of the facultad crest. Used for badge indicators, clinical departmental tags, progress tracking, and validation highlights.
- **Neutral (`#475569` - Slate):** Delivers balanced, legible contrast across subtitles, metadata, borders (`#E2E8F0`), and page canvases (`#F8FAFC`).

Light mode acts as the primary mode to maintain clinical clarity and document-grade readability.

## Typography

The design system adopts **Inter** across all typographic hierarchies for its crisp x-height, neutral tone, and superior legible rendering on desktop monitors and mobile devices alike.

- **Hero & Institutional Headers:** Capitalized tracking (`letterSpacing: 0.08em`) is deployed exclusively for major institutional banners (e.g., "ENTORNO VIRTUAL DE APRENDIZAJE") to evoke monolithic architectural weight.
- **Section Titles & Module Names:** Semi-bold to bold weights in lower-case/sentence-case ensure effortless scanning across large catalog rosters.
- **Labels & Meta:** Micro-labels utilize slight letter-spacing and uppercase styles for categorical categorization (e.g., "USUARIO INSTITUCIONAL O CORREO", "PROGRAMA DE CICLO CORTO").

## Layout & Spacing

A 12-column responsive fluid grid governs desktop layouts with a maximum inner container constraint of 1280px. Tablet experiences transition to an 8-column layout, while mobile operates on a single or 4-column flow.

- **Desktop (≥ 1024px):** 12 columns, 24px (`1.5rem`) gutters, and dynamic outer margins up to 32px (`2rem`). Hero card panels conform to centered 480px–520px blocks during authentication flows. Course catalogs sit on a balanced 4-column grid layout.
- **Tablet (768px – 1023px):** 8 columns, 16px gutters, course cards adapt to a 2-column grid.
- **Mobile (< 768px):** 4 columns / single-column stack, 16px margins, cards expand to full-width containers with internal `space-md` or `space-lg` padding.

## Elevation & Depth

Visual hierarchy combines **crisp micro-borders** (`#E2E8F0`) with **soft ambient shadows** to preserve clean medical aesthetics without visual clutter:

- **Flat Surface (Level 0):** Used for base page canvas (`#F8FAFC`). No shadow, no outline.
- **Container Card (Level 1):** Subtle card elevation with `0 1px 3px rgba(11, 37, 69, 0.05), 0 1px 2px rgba(11, 37, 69, 0.03)` wrapped in a 1px solid border (`#E2E8F0`).
- **Interactive Elevated Card (Level 2 - Hover / Login Focus):** Floated modules such as the authentication modal card or active course modules use `0 10px 25px -5px rgba(11, 37, 69, 0.1), 0 8px 10px -6px rgba(11, 37, 69, 0.04)`.
- **Institutional Top Bars & Footers:** Grounded by flat blocks of solid deep navy (`#0B2545`) with no shadows, separating them cleanly from white content regions.

## Shapes

The design system employs **Rounded** geometry (`roundedness: 2`, where base elements receive `0.5rem` / 8px border radius).

- **Standard Elements (8px / `0.5rem`):** Applied to form input fields, primary call-to-action buttons, dropdown containers, and course thumbnails.
- **Large Cards & Modals (16px / `1rem`):** Applied to elevated surface containers, the central login modal box, and course grid cards (`rounded-lg`).
- **Pill Badges (`9999px`):** Reserved exclusively for user avatar initials, status indicators, and notification counters.

## Components

### 1. Navigation Header
- **Deep Navy Banner:** Height `64px`, background `#0B2545`, text `#FFFFFF`.
- **Branding:** Contains left menu toggle icon, golden EVA badge (`#D97706` bold text), and university crest alignment.
- **User Profile Area:** Displays the user's full academic name in subtle high-legibility white/slate font, accompanied by notification/message icons and a circular user avatar badge (`#FFFFFF` with `#0B2545` icon).

### 2. Buttons
- **Primary Institutional Button:** Filled deep navy (`#0B2545`), white text, font weight 600, 8px radius. Hover state lightens to `#133863`.
- **Secondary Accent Button:** Ochre gold background (`#D97706`), bold white uppercase text (`letterSpacing: 0.05em`), 6px–8px radius. Hover transition to `#B45309`.
- **Ghost / Outlined Button:** Transparent background, 1px `#CBD5E1` border, `#0B2545` text.

### 3. Form Inputs
- **Text Inputs:** Height 44px, white background, 1px solid border (`#CBD5E1`), 8px border radius, text color `#0F172A`. Left-aligned icon (user icon, lock icon) in `#64748B`. Focused state applies a 2px `#0B2545` ring and outline.
- **Field Labels:** Uppercase `label-sm` in `#475569` with 8px margin bottom.

### 4. Course & Career Cards
- **Structure:** Solid white card with 16px corner radius, composed of an upper 16:9 thumbnail image, followed by a body container with 16px padding.
- **Card Metadata:** Department/discipline category displayed in uppercase `label-md` using medical green (`#15803D`) or navy blue (`#0B2545`), followed by a bold `headline-sm` title.
- **Hover Behavior:** Translates upward 4px with an elevated drop shadow.

### 5. Institutional Footer
- **Structure:** Dark navy background (`#0B2545`), partitioned into four structured vertical columns: Institutional Logo/Identity, Social Links, Sites of Interest ("Sitios de interés"), and Sister Portals ("Otros sitios").
- **Divider & Sub-footer:** 1px hairline border (`#1E3A5F`) separating the navigation links from identity attribution and copyright credits.