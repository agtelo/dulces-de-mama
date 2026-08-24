# DESIGN.md — Dulces de Mamá (v3 radical)

Agent-readable design system (Stitch / awesome-design-md). Brand tokens locked; layout and components evolved for photo-first craft landing.

## 1. Visual Theme

Warm kitchen-table brand. Refined craft, not rustic fair. Photography + soft color blocks + generous whitespace.

## 2. Palette (unchanged)

berry `#A61B34` · berry-hover `#861428` · peach `#C97B5D` · cream `#F7F3EB` · paper `#FFFCF7` · kraft `#E8DCC8` · ink `#2C2118` · muted `#6B5748` · line `#E0D4C0` · success `#5C7A56`

## 3. Typography

Display: Amatic SC 700 · Body: Cabin 400–600

## 4. Components (v3)

- **Nav**: sticky, blur, pill links, WhatsApp CTA ≥768px
- **Hero**: radial soft wash, large display type, trust chips, photo frame with caption
- **Story**: editorial title + 2-col body + pull quote
- **Flavors**: card grid with left accent stripe (tone-berry/peach/kraft)
- **Values**: soft gradient cards on kraft band
- **Testimonials**: large italic quotes, author + place footer
- **Steps**: numbered cards in 1→2→4 col grid
- **Contact**: full berry panel, light CTA, split desktop
- **Sticky CTA**: mobile only (<768)

## 5. Layout

Section padding 64→80→96px. Container 72rem. Breakpoints: 768 / 1024 / 1280.

## 6. Elevation

sm cards · md hover · lg hero/contact. Soft only.

## 7. Do / Don't

Do: Amatic+Cabin, pill CTAs, photo-forward, Spanish cercano.  
Don't: foreign palettes, Inter-only, emoji icons, hide WhatsApp.

## 8. Agent prompts

- Follow this DESIGN.md and src/styles/global.css as source of truth.
- Keep berry/peach/cream; improve structure and rhythm only.
