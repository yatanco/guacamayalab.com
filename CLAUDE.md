# guacamayalab.com

Portfolio site for Guacamaya Lab — one page per product, written as product
descriptions, not blog posts. Astro, static output, deployed to Cloudflare
Pages. Same shell (monospace nav, dark/light toggle, mint accent,
JetBrains Mono + Source Serif 4) as [yatan.co](https://yatan.co), so the two
sites read as one family.

This used to be a Hugo notebook/blog. That's gone — the old posts moved to
yatan.co/writing. If you see references to Hugo, `themes/`, or `_posts/`
anywhere (old commits, old CLAUDE.md), that's history, not current state.

## Stack

- Astro (`^4.15.0`), `output: 'static'`, no framework islands — plain
  `.astro` files and markdown content collections.
- `@astrojs/sitemap` is the only other integration.
- Deploy: Cloudflare Pages. Build command `npm run build`, output dir `dist`.

## Commands

```
npm install
npm run dev       # local dev, http://localhost:4321
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Structure

```
src/
  layouts/
    Shell.astro          → shared page shell: nav, footer, theme toggle,
                            all global CSS (variables, fonts, base styles)
    ProductLayout.astro   → product page: mono eyebrow + h1 + tagline,
                            then a serif "reading mode" body for the content
  content/
    config.ts             → the `products` collection schema
    products/*.md          → one file per product (frontmatter below)
  pages/
    index.astro            → home: lists all non-draft products, sorted by
                              `order`
    [slug].astro            → renders one product's markdown via
                               ProductLayout
```

## Decisions already made — don't re-litigate these without being asked

**`Shell.astro` is copied 1:1 from yatan.co's compiled output**, not
independently designed. The CSS variables, markup, and theme-toggle script
all need to match yatan.co exactly so the two sites feel like the same
product family. If yatan.co's shell changes, this file should be updated to
match — don't let them drift, and don't "improve" this file in isolation.

**Products are markdown files in `src/content/products/`, not database
rows or hardcoded pages.** Adding a product means adding a file — no new
route, no page code:

```yaml
---
title: "Product Name"
tagline: "One line, what it does and why"
status: "live" # live | building | concept
url: "https://product-url.com" # optional
order: 4
---
Body copy, product-description register (see casa-gaviota.md for the
target voice — plainspoken, specific, no marketing fluff).
```

`order` controls homepage sort. `draft: true` (defaults to `false`) hides a
product from the homepage and from `[slug].astro`'s static paths without
deleting the file.

**Body copy reads like an essay paragraph, not ad copy.** `ProductLayout`
renders the markdown body in the serif "reading mode" font
(`--serif`/`--read-*` CSS vars), matching yatan.co's essay register. Keep
new product descriptions in that voice — a couple of grounded paragraphs
about what the thing is and the bet behind it, not bullet-pointed features.

**Launch scope is deliberately small: 3 products.** Casa Gaviota, Intentions,
c. solar. Don't add unrelated content types (blog, about page, contact
form) unless asked — this site's whole job is "portfolio of products,"
nothing else.

**Theme toggle and dark/light CSS variables are inherited from yatan.co's
implementation**, not built fresh here. If touching theme switching, check
yatan.co's `Shell.astro` first — it's the reference, and the two should
stay identical.

## Working style for this repo

- Ultra-simple and static. No client-side framework, no state management,
  no API routes. If a change needs JS beyond the theme-toggle script,
  stop and ask whether it's actually needed.
- Don't add dependencies or build tooling unless something genuinely can't
  be done without it.
- Don't add new page types, sections, or content collections unprompted.
  This is a 3-product launch site by design, not a scaffold for a bigger
  site — see the "launch scope" decision above.
- When copy or shell styling is in question, treat yatan.co as the source
  of truth this site should match, not the other way around.
