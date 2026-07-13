# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing site for **Autobanali.am**, an automotive locksmith business in Yerevan, Armenia (services: emergency door opening, key duplication/programming, safe opening, diagnostics, security systems). Originally scaffolded by v0.dev (`package.json` name is still `my-v0-project`), then hand-edited.

Next.js 14 App Router, React 18, TypeScript, Tailwind v4, shadcn/ui. It is a static brochure site: no database, no API routes, no auth, no backend of any kind.

## Commands

```bash
npm run dev      # dev server on :3000
npm run build    # production build
npm start        # serve the build
npx tsc --noEmit # the ONLY way to type-check (see below)
```

Use **npm**. `package-lock.json` is the real lockfile; `pnpm-lock.yaml` is a 92-byte stub with no packages in it.

`npm run lint` is defined but ESLint is not installed as a dependency, so `next lint` drops into its interactive setup prompt rather than linting. There is no working linter in this project today.

## Build safety nets are disabled

`next.config.mjs` sets both `typescript.ignoreBuildErrors: true` and `eslint.ignoreDuringBuilds: true`. **A successful `next build` proves nothing about type correctness.** Always run `npx tsc --noEmit` yourself after changing types or props; the build will happily ship broken code.

## Architecture

Two routes, and both assemble their own chrome:

- `app/page.tsx` composes `Header` → `HeroSection` → `ServicesSection` → `ContactSection`.
- `app/gallery/page.tsx` is a standalone route that separately imports and renders `Header` and `ContactSection` around its own lightbox grid.

`app/layout.tsx` is deliberately thin: Geist fonts, metadata/favicons, Vercel Analytics. It does **not** render a shared Header or Footer, so any change to page chrome must be applied in both places (or lifted into the layout).

Section components live flat in `components/*.tsx`. `components/ui/` holds ~50 generated shadcn/ui primitives; treat those as vendored, and add new ones with `npx shadcn@latest add <name>` rather than hand-authoring. Path alias `@/*` maps to the repo root.

Navigation is hash-anchor based (`#home`, `#services`, `#contact`) and those anchors only exist on `/`. From `/gallery`, the Header's `#home` and `#services` links are dead (nothing to scroll to); only `#contact` happens to work because the gallery page renders `ContactSection`. If you touch nav, the fix is `/#services`-style links.

## Styling

Tailwind **v4**, CSS-first configuration. **There is no `tailwind.config.js`/`.ts` and you should not add one.** Theme tokens are defined in `app/globals.css` via `:root`, `.dark`, and the `@theme inline` block. That file is the design system.

Brand palette (from the logo): `--primary` is dark blue, `--accent`/`--secondary` is orange. CTAs conventionally use `bg-accent hover:bg-accent/90 text-accent-foreground`.

**`styles/globals.css` is dead code.** It is the stale v0 default (neutral palette) and nothing imports it. `app/globals.css` is the live stylesheet. Editing the wrong one is the easiest mistake to make here.

## Known incomplete / non-functional

Be aware of these before "fixing" something that was never wired up:

- **Contact form does not submit.** `ContactSection.handleSubmit` only calls `console.log`. There is no endpoint behind it.
- **Dark mode is dead code.** `next-themes` is installed and `components/theme-provider.tsx` exists, but `ThemeProvider` is never mounted in `app/layout.tsx`, so the `.dark` tokens in `globals.css` never activate.
- **`images.unoptimized: true` means the gallery photos ship at full size.** All images are now local (`public/images/gallery/`, wired into `app/gallery/page.tsx`), but several are 2 to 4 MB straight off a phone and are served as-is, with no resizing or WebP conversion. If page weight matters, either compress them at rest or turn optimization back on. Note that `next/image` with a remote `src` would then also need `images.remotePatterns`, which is why the old stock-photo URLs worked before.

## Content and language

User-facing copy is **Armenian, hardcoded directly in JSX**. There is no i18n framework and no translation files.

The Armenian copy is mixed with leftover English v0 placeholder text that has not been cleaned up yet ("Get Started", "Read More", "Our Services", "Life Needs Locks, We Provide Them"). More importantly, **stale v0 content still claims the business is in Texas** (the `metadata.description` in `app/layout.tsx` and the map placeholder in `ContactSection`), which contradicts the real details used everywhere else.

The `todo` file at the repo root is the owner's outstanding work list, written in Latin-transliterated Armenian: remove the About Us section; add a phone icon bottom-right linking to a direct `tel:`; add a partnership / business solutions section (copy to be supplied).

## Housekeeping

`.a5c/` contains babysitter tooling logs and cache, not project code. This directory is not a git repository.
