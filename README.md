# Tengku Zarul Fariman — Portfolio

A static portfolio built with Astro and Tailwind CSS. The visual direction takes cues from editorial retail and streetwear: a clear point of view, strong project imagery, and an easy-to-browse collection. Visitors can add projects to a cart; there is no checkout.

## Get started

```sh
npm install
npm run dev
```

The development server runs at `http://localhost:4321`. Build the static site with `npm run build`, then preview it with `npm run preview`.

## Portfolio content

Portfolio details and project content live in `src/data/portfolio.ts`. Each project becomes a static detail page at `/projects/<slug>/`; keep each `slug` unique and URL-friendly. Project images, videos, reports, and the resume are imported from `src/assets`.

The project catalog, detail routes, About, Resume, Contact, and Resources pages are statically generated. The Resources page credits the external visual-asset sources, the site stack, and Cloudflare hosting. Cart contents and the selected display currency are optional browser-side preferences stored in local storage; the rest of the portfolio works without JavaScript. Project prices are currently RM 0.00 and shown as “Free to peek.”

## Project structure

```text
src/
  components/ProductCard.astro
  data/portfolio.ts
  layouts/Layout.astro
  pages/
    about.astro
    contact.astro
    index.astro
    projects/[slug].astro
    resume.astro
    resources.astro
  styles/global.css
public/
```
