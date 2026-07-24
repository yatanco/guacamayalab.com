# guacamayalab.com (Astro)

Portfolio site for Guacamaya Lab. Same Astro/Cloudflare Pages setup as
[yatan.co](https://yatan.co), same shell (monospace nav, dark/light toggle,
mint accent, JetBrains Mono + Source Serif 4) — so the two sites read as
family, not as separate visual languages.

## What changed from the old site

- The old Hugo notebook blog is gone from this domain — those posts moved to
  [yatan.co/writing](https://yatan.co/writing). Set up 301 redirects from the
  old guacamayalab.com post URLs to their new yatan.co/writing URLs (see the
  yatan.co repo's README for the exact redirect map).
- guacamayalab.com is now a portfolio: one page per product, written as
  product descriptions rather than blog posts.

## Structure

- `src/layouts/Shell.astro` — the shared shell, copied 1:1 from yatan.co's
  compiled output so the CSS variables and markup match exactly.
- `src/layouts/ProductLayout.astro` — individual product page: mono eyebrow +
  heading, then a serif "reading mode" body (mirrors yatan.co's EssayLayout
  register-switch).
- `src/content/products/*.md` — one file per product. Frontmatter: `title`,
  `tagline`, `status` (`live` / `building` / `concept`), `url`, `order`.
- `src/pages/index.astro` — portfolio home, lists all non-draft products
  sorted by `order`.
- `src/pages/[slug].astro` — renders each product's markdown.

Launch scope is 3 products: Casa Gaviota, Intentions, c. solar. Add more by
dropping a new file in `src/content/products/` — no page code needed.

## Adding a product

```yaml
---
title: "Product Name"
tagline: "One line, what it does and why"
status: "live" # live | building | concept
url: "https://product-url.com" # optional
order: 4
---
Body copy here, same as an essay: a paragraph or two, product-description
register rather than personal-essay register.
```

## Setup

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
```

## Deploy

Connect this repo to Cloudflare Pages:
- Build command: `npm run build`
- Output directory: `dist`
- Framework preset: Astro

Point `guacamayalab.com` DNS at the Pages project once verified.
