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

Abrí http://localhost:4321/dulces-de-mama/

## Imágenes

Las imágenes van en `public/img/`:

- `logo-principal-v2.jpg`
- `logo-etiqueta-v2.jpg`
- `foto-producto.jpg`
- `icono-frasco.jpg`
- `public/favicon.jpg`

Si clonás el repo vacío de imágenes, copialas desde el proyecto de marca.

## WhatsApp

Reemplazá `54911XXXXXXXX` por el número real en:

- `src/components/Hero.astro`
- `src/components/HowToOrder.astro`
- `src/components/StickyCta.astro`

## Deploy (GitHub Pages)

1. Repo → **Settings → Pages**
2. Source: **GitHub Actions**
3. Al pushear a `main`, el workflow despliega automáticamente

URL esperada: `https://agtelo.github.io/dulces-de-mama/`

## Estructura

```
src/
├── components/   # Header, Hero, Flavors, Testimonials…
├── layouts/      # BaseLayout
├── pages/        # index.astro
└── styles/       # global.css (tokens de marca)
public/img/       # logos y foto de producto
```

## Marca

Colores y tipografía en `src/styles/global.css` (`@theme`).
