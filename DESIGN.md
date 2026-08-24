# DESIGN.md — Dulces de Mamá

Agent-readable design system (Stitch format). Brand craft identity + patterns adapted from warm hospitality/food systems (Airbnb photo-forward trust, Starbucks cream canvas & pill CTAs) without foreign brand colors.

Source collection: https://github.com/voltagent/awesome-design-md

## 1. Visual Theme & Atmosphere

Warm, intimate kitchen-table brand for homemade jams sold to close friends. Feels like paper labels, wooden spoons, and a quiet Buenos Aires kitchen — refined craft, not rustic fair stall, not corporate food.

- Mood: cálido, honesto, cercano, fotográfico
- Density: breathable sections, photo carries emotion
- Philosophy: photography + soft surfaces > decorative texture overload
- Shape language: soft (pills for CTAs, 12–16px cards, no hard commercial corners)

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| berry | `#A61B34` | Primary brand, titles, primary CTA fill |
| berry-hover | `#861428` | Primary CTA press/hover |
| peach | `#C97B5D` | Accent quotes, secondary emphasis |
| cream | `#F7F3EB` | Page canvas |
| paper | `#FFFCF7` | Elevated sections, cards, sticky bars |
| kraft | `#E8DCC8` | Soft band (values), borders ambient |
| ink | `#2C2118` | Primary text |
| muted | `#6B5748` | Secondary text, captions |
| line | `#E0D4C0` | Hairlines, card borders |
| success | `#5C7A56` | Available badges |
| white | `#FFFFFF` | Pure card surface when needed |

Do not introduce foreign brand greens or neon reds. Max 6 colors on any single composition.

## 3. Typography Rules

| Role | Family | Weight | Size | Notes |
|------|--------|--------|------|-------|
| Display | Amatic SC | 700 | clamp(2.5rem–4rem) | Hero H1, section H2 |
| Title | Amatic SC | 700 | 1.35–1.5rem | Nav brand, flavor names |
| Body | Cabin | 400–500 | 1.0625rem / 1.7 lh | Paragraphs |
| Button | Cabin | 600 | 1rem | CTAs |
| Meta | Cabin | 600 | 0.7–0.85rem | Badges, captions |

- One display + one body only
- Avoid Inter, Cormorant, Space Grotesk, pure black text

## 4. Component Stylings

### Navigation
- Sticky top, height 64px (mobile) / 72px (desktop)
- Background: paper @ 92% + backdrop blur
- 1px bottom hairline (`line`)
- Mobile: logo + hamburger (44px target), slide-down panel
- Tablet+: horizontal links + pill WhatsApp CTA

### Buttons
- Primary: berry fill, white text, full pill (`border-radius: 999px`), min-height 48px
- Hover: berry-hover + slight lift + soft shadow
- Ghost: transparent, berry border 1.5px, berry text
- Focus-visible: 3px peach outline offset 3px

### Cards
- Radius 12px
- Background paper or white, 1px `line` border
- Shadow: `0 1px 3px rgba(44,33,24,0.06)`
- Value cards, testimonials, contact box

### Hero
- Mobile: stacked, centered copy, photo below
- Desktop ≥1024px: 2-column split (~1.1fr copy / 0.9fr media), copy left-aligned
- Badge pill above H1
- Photo aspect ~3/4, radius 20px, soft large shadow

### Badges
- Full pill, 0.7rem uppercase
- Available: success on light green wash
- Soon: muted on kraft wash

### Sticky CTA (mobile only)
- Fixed bottom bar, paper + top hairline
- Full-width primary button max 28rem
- Hide ≥640px

## 5. Layout Principles

Spacing scale: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 px  
Section vertical padding: 48px mobile → 64px tablet → 80px desktop  
Container max: 72rem, gutters 20 → 32 → 40px  
Prose max for story: ~38rem centered  
Whitespace separates sections more than heavy dividers  
Rhythm: cream → paper band → cream → kraft band → paper → cream → dark footer

## 6. Depth & Elevation

| Level | Use | Shadow |
|-------|-----|--------|
| 0 | Canvas | none |
| 1 | Cards, nav | `0 1px 3px rgba(44,33,24,0.06)` |
| 2 | Sticky CTA, panels | `0 4px 16px rgba(44,33,24,0.08)` |
| 3 | Hero photo | `0 12px 40px rgba(44,33,24,0.1)` |

No neon glow, no harsh drop shadows.

## 7. Do's and Don'ts

**Do**
- Keep Amatic SC + Cabin
- Photo-forward hero with real product shot
- Pill CTAs, soft cards, sticky mobile WhatsApp
- Touch targets ≥44px
- Spanish tone: cálido, argentino, sin pretensiones

**Don't**
- Pure white sterile canvas or pure black text
- Generic AI fonts (Inter-only systems)
- Emoji as icons (use SVG)
- Heavy kraft texture backgrounds everywhere
- Complex multi-level navigation
- Hide contact / WhatsApp

## 8. Responsive Behavior

| Name | Width | Behavior |
|------|-------|----------|
| Mobile | <640px | 1-col, hamburger, sticky CTA, stacked hero |
| Tablet | ≥640px | Nav links + CTA, 2-col values/testimonials, no sticky |
| Desktop | ≥1024px | Hero split, 4-col values, 3-col testimonials |
| Large | ≥1280px | Larger display type, wider hero gap |

Touch: buttons min 48px height. No horizontal scroll.

## 9. Agent Prompt Guide

Quick colors: berry `#A61B34` · peach `#C97B5D` · cream `#F7F3EB` · paper `#FFFCF7` · kraft `#E8DCC8` · ink `#2C2118` · muted `#6B5748`

Ready prompts:
- “Build the landing following DESIGN.md — photo-forward hero, pill WhatsApp CTAs, soft cards.”
- “Refine navbar/hero/sections to DESIGN.md responsive table (640 / 1024 / 1280).”
- “Do not change brand palette; improve spacing, elevation, and component states only.”

## References

- Collection: https://github.com/voltagent/awesome-design-md
- Pattern sources (structure only): starbucks, airbnb DESIGN.md
- Brand assets: logo-principal-v2.jpg, foto-producto.jpg
