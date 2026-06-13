# Ankit Bind — Editorial Data Science Portfolio

A warm, illustrated multi-page portfolio (sage + cream + plum) built on TanStack Start + Tailwind v4.

## Edit content

All content lives under `src/data/`:

- `profile.ts` — name, contact, hero copy, story, stats, "currently exploring"
- `skills.ts` — skills + categories + levels
- `projects.ts` — projects (slug used for `/projects/:slug` detail pages)
- `certifications.ts` — issuer + title
- `education.ts` — timeline entries

## Swap illustrations

The flat illustrations live inline in `src/components/illustrations/Illustrations.tsx` using the brand palette (ink `#352640`, terracotta `#E8A85C`, forest teal `#51695B`, cream `#F6F1E3`).

To replace with library art:
1. Download an SVG from [unDraw](https://undraw.co/illustrations) or [Storyset](https://storyset.com/).
2. Recolor strokes/fills to the brand palette above.
3. Drop the SVG markup into the relevant exported component in `Illustrations.tsx`.

## Resume

`public/resume.pdf` is the downloadable file. Replace it to update. A future pass should redesign the PDF in the same cream/sage/serif system so it matches the site when downloaded.
