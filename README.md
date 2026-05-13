# Guacamaya Lab

An online notebook — unfinished, evolving, honest.

Built with [Astro](https://astro.build). No CMS, no database, no framework dependencies. Notes are plain Markdown files.

---

## Local dev

```sh
npm install
npm run dev
```

The dev server runs at `http://localhost:4321`.

---

## Adding a note

1. Create a new file in `src/content/notes/`:

```
src/content/notes/my-note-title.md
```

2. Add frontmatter at the top:

```md
---
title: "My Note Title"
date: 2026-05-13
---

Your content here.
```

The filename becomes the URL slug: `/notes/my-note-title/`.

---

## Building

```sh
npm run build
```

Output goes to `./dist/`. Preview the build locally:

```sh
npm run preview
```

---

## Deploying to Cloudflare Pages

1. Push the repo to GitHub.
2. In [Cloudflare Pages](https://pages.cloudflare.com/), create a new project and connect the repo.
3. Set the build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy. Cloudflare will rebuild automatically on every push to the main branch.
