# Dulces de Mamá

Landing de mermeladas caseras — Astro + Tailwind.
Concepto: *Invitación a la mesa*. Pedidos por WhatsApp.

## Desarrollo

```bash
npm install
npm run dev
```

## Estructura

```
src/
  components/   Header, Invite, Jar, Season, Path, Voices, Door, Footer, StickyCta
  layouts/      BaseLayout
  pages/        index.astro
  styles/       global.css
public/img/     logo, producto, sabores (sabor-*.jpg)
```

## Deploy

Vercel o GitHub Pages. Las imágenes de marca se bajan con `scripts/decode-assets.mjs` (predev/prebuild).

Poner en `public/img/` las acuarelas de sabores:
`sabor-frutilla.jpg`, `sabor-durazno.jpg`, `sabor-membrillo.jpg`, `sabor-naranja.jpg`, `sabor-frutos-rojos.jpg`, `sabor-manzana.jpg`.
