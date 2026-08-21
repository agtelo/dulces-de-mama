# Dulces de Mamá

Landing page de **Dulces de Mamá** — mermeladas y dulces caseros hechos con amor en casa.

> No vendemos mermelada. Compartimos un pedacito de casa.

## Stack

- [Astro](https://astro.build) 7
- [Tailwind CSS](https://tailwindcss.com) v4 (`@tailwindcss/vite`)
- Tipografía: Amatic SC + Cabin
- Estilo: craft / feria / cocina de mamá

## Desarrollo local

```bash
git clone https://github.com/agtelo/dulces-de-mama.git
cd dulces-de-mama
npm install
npm run dev
```

Las imágenes se descargan automáticamente a `public/` en `predev` / `prebuild` desde `assets-urls.json`.

Abrí http://localhost:4321/dulces-de-mama/

## WhatsApp

Reemplazá `54911XXXXXXXX` por el número real en:

- `src/components/Hero.astro`
- `src/components/HowToOrder.astro`
- `src/components/StickyCta.astro`

## Deploy (GitHub Pages)

1. Repo → **Settings → Pages**
2. Source: **GitHub Actions**
3. Al pushear a `main`, el workflow descarga assets, buildea y despliega

URL esperada: `https://agtelo.github.io/dulces-de-mama/`

## Estructura

```
src/
├── components/   # Header, Hero, Flavors, Testimonials…
├── layouts/      # BaseLayout
├── pages/        # index.astro
└── styles/       # global.css (tokens de marca)
assets-urls.json  # URLs de logos y foto de producto
scripts/          # descarga de assets en prebuild
```

## Marca

Colores y tipografía en `src/styles/global.css` (`@theme`).
