# AI Agent Guidelines for dakshyadav.com

Essential context for AI agents working on this codebase: the personal portfolio of Daksh Yadav, a Full Stack Developer.

## Project Overview

A single-page developer portfolio aimed at recruiters and hiring managers. It presents current work, shipped projects, work history, tech stack and contact links.

### Key Features

- **Two layouts from one set of components**: "editorial" and "boxy", switched via a `data-design` attribute on `<html>`. Boxy is the default; the switcher (`src/components/design-dock.tsx`) is currently hidden.
- **Light/dark themes** with system preference support
- **SEO**: JSON-LD schema, sitemap, robots.txt, Open Graph image
- **Spam-protected contact details**: email and phone are stored base64-encoded and decoded on the client
- **PWA manifest**

### Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Styling**: Tailwind CSS v4
- **UI**: shadcn/ui primitives + custom components
- **Language**: TypeScript (strict)
- **Package manager**: pnpm
- **Deployment**: Vercel

## Project Structure

```
src/
├── app/
│   ├── (app)/(root)/page.tsx   # Homepage
│   ├── (app)/layout.tsx        # Header, scroll-to-top
│   ├── og/                     # Page used to capture the Open Graph image
│   ├── layout.tsx              # Root layout, fonts, theme + design scripts
│   ├── manifest.ts, sitemap.ts, robots.ts
├── components/                 # Shared UI (header, section nav, theme toggle, ui/)
├── features/portfolio/
│   ├── components/home/        # Homepage sections (hero, projects, work, stack, contact)
│   ├── data/                   # All portfolio content
│   └── types/
├── hooks/
├── lib/
└── styles/globals.css          # Theme tokens, `boxy:` variant, utilities
```

## Editing Content

All content lives in `src/features/portfolio/data/`:

- `user.ts`: name, job title, intro (Markdown), current jobs, encoded contact details
- `projects.ts`: projects; set `pinned: true` on one to feature it, omit `githubLink` for private repos
- `experiences.ts`: work history and education; `companyLogo` or `companyIcon`, otherwise a monogram is shown
- `tech-stack.ts`: technologies; grouping on the page is defined in `components/home/toolbox.tsx`
- `social-links.ts`: profile links shown in the hero and contact section

Images go in `public/images/`, icons in `public/icons/`.

## Design System Notes

- Colors are zinc-based CSS variables in `globals.css`; always support both themes.
- Boxy-only styles use the `boxy:` variant (e.g. `boxy:border-x`). Keep editorial styles as the base classes so both layouts keep working.
- Section wrappers come from `components/home/section.tsx` (`Section`, `boxClass`, `Corners`).

## Coding Guidelines

- Write type-safe TypeScript; explicit types where they help.
- Comment the "why", not the "what"; no obvious comments.
- No emojis in code, comments or commit messages.
- Kebab-case file names, PascalCase components.
- Keep functions small and names descriptive.

## Development

```bash
pnpm install
pnpm dev            # http://localhost:3000
pnpm build
pnpm lint
pnpm check-types
pnpm format:write
```

If CSS changes stop appearing in dev, restart with `rm -rf .next/dev && pnpm dev`.

## Attribution

This project began as a fork of an MIT-licensed portfolio. The original copyright notice must stay in `LICENSE`.
