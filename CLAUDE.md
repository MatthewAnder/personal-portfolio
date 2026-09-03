# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start dev server (Next.js)
- `npm run build` — production build
- `npm run start` — run production build
- `npm run lint` — ESLint (next/core-web-vitals + import/no-unresolved)

No test suite exists in this repo.

## Architecture

Single-page personal portfolio site, Next.js 15 App Router, single route (`src/app/page.tsx`). No sub-routes except the API handler. Page is one long scroll composed of sections (`Home`, `About`, `Projects`, `Contact`) separated by `SectionDivider`.

**Active-section tracking**: `src/context/active-section-context.tsx` holds `activeSection` + `timeOfLastClick` app-wide via React context. Each section calls `useSectionInView` (`src/lib/hooks.ts`), which uses `react-intersection-observer` to set itself active when scrolled into view. `timeOfLastClick` suppresses the observer for 1s after a nav-link click so manual navigation doesn't get overridden by scroll position. `Navbar` reads `activeSection` to highlight the current link.

**Styling**: Chakra UI (`ChakraProvider` + custom `theme.ts` in `src/app/providers.tsx`) is the styling system — components use Chakra style props, not CSS modules/Tailwind. `globals.css` is minimal/reset only. Custom theme fonts are `Khand` (headings) and `Hind` (body) via `next/font/google`.

**Animation**: GSAP (`useGSAP` hook + `ScrollTrigger`, registered in `page.tsx`) drives scroll-linked and entrance animations; used directly in components (see `Home` in `page.tsx`) rather than centralized.

**Path alias**: `@/*` → `src/*` (tsconfig + ESLint import resolver).

**Data-driven content**: Project cards and nav links are static data in `src/lib/data.ts`, typed via `src/lib/types.ts` (`ProjectData`, `SectionName` derived from `links`). Add/edit projects there rather than hardcoding in components.

**Contact form flow**: `ContactForm` (react-hook-form) → `POST /api/contact` (`src/app/api/contact/route.ts`) → Resend API sends an email rendered from `src/email/EmailTemplate.tsx` (`@react-email/components`) to `process.env.CONTACT_EMAIL`. Requires `RESEND_API_KEY` and `CONTACT_EMAIL` env vars.

**Icons**: `react-icons` (migrated off `@chakra-ui/icons` except where still in use, e.g. `DownloadIcon`).
