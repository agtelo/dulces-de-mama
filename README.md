# Dulces de Mamá

Landing page de **Dulces de Mamá** — mermeladas y dulces caseros hechos con amor en casa.

> No vendemos mermelada. Compartimos un pedacito de casa.

## Stack

- [Astro](https://astro.build) 7
- [Tailwind CSS](https://tailwindcss.com) v4 (`@tailwindcss/vite`)
- Tipografía: Amatic SC + Cabin
- Estilo: craft / feria / cocina de mamá

## Desarrollo

```bash
npm install
npm run dev
```

Abrí http://localhost:4321/dulces-de-mama/

## Build

```bash
npm run build
npm run preview
```

## Deploy (GitHub Pages)

El `astro.config.mjs` ya tiene:

```js
site: 'https://agtelo.github.io',
base: '/dulces-de-mama',
```

1. En el repo → Settings → Pages → Source: **GitHub Actions**
2. O subí la carpeta `dist/` a la branch `gh-pages`

## WhatsApp

Reemplazá `54911XXXXXXXX` por el número real en:

- `src/components/Hero.astro`
- `src/components/HowToOrder.astro`
- `src/components/StickyCta.astro`

## Estructura

```
src/
├── components/     # Header, Hero, Flavors, etc.
├── layouts/        # BaseLayout
├── pages/          # index.astro
└── styles/         # global.css (tokens de marca)
public/img/         # logos y foto de producto
```

## Marca

Colores y tipografía definidos en `src/styles/global.css` (`@theme`).

Manual de marca y assets en el proyecto original.
