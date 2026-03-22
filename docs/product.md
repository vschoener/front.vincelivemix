# Vince Live Mix — product context

This document captures **why this project exists** and **what it is responsible for**, so contributors and future maintainers do not have to infer it only from code or an aging README.

---

## Why this product exists

**Vince Live Mix** is the public web presence for a DJ mixing project: it lets listeners **discover episodes**, **play mixes on the site**, and **follow the show** (subscription UI, RSS). The site exists to share House/Electro-oriented mixes (with room for related styles) under a consistent brand—**“Feel the vibe of the sound”**—and to support discovery and SEO for the catalog.

### Brand

- **Domain**: [www.vincelivemix.fr](https://www.vincelivemix.fr) (canonical).
- **Naming**: **Vince** (personal name) + **Live Mix** as the subtitle-style product name → **Vince Live Mix** as the public label.

### Audience (current scope)

The product **lists podcast-style episodes so people can listen to the music**. There is **no** separate positioning for booking, events, or services on the site today—those would be out of scope unless you add them deliberately.

Secondary benefit: **search engines and feeds** (episodes listing, RSS-related API routes) for discoverability.

---

## What this repository is

| Aspect | Detail |
|--------|--------|
| **Name** | `front.vincelivemix` |
| **Public URL (configured)** | `www.vincelivemix.fr` (see `next.config.js` `publicRuntimeConfig.meta`) |
| **Role** | **Frontend only** — Next.js app that loads episode and highlight data from a **separate backend** (`BACKEND_URL` / `serverRuntimeConfig.backend.url`). |

This repo is **not** the source of truth for episode audio files or CMS content; it **consumes** APIs from the backend service.

### Backend (sibling repository)

| | |
|--|--|
| **Repository** | [github.com/vschoener/vincelivemix](https://github.com/vschoener/vincelivemix) |
| **Stack** | NestJS, TypeScript |
| **Production API host** | `backend.vincelivemix.fr` |

API contract and migrations live in that repo; this frontend points to it via `BACKEND_URL` (see below).

---

## Core capabilities (as implemented)

- **Home**: subscription block + latest episodes in a block layout.
- **Episodes page**: vertical list of episodes.
- **Audio experience**: in-app audio player components.
- **Highlight episode**: featured content from the API.
- **Internationalization**: `i18next` / `react-i18next` (language switcher in the header).
- **Analytics**: Google Tag integration (configurable via env).
- **API routes** (Next.js): e.g. episodes, highlight episode, RSS proxy — server-side integration with the backend.

---

## Technical stack (high level)

- **Next.js** (Pages Router), **React**, **TypeScript**
- **styled-components** (alongside legacy Bootstrap/class-based markup noted in README)
- **SWR**, **axios** for data fetching
- **CI/CD**: CircleCI (lint + Docker image **build** on every branch; **no** registry push — production is Vercel)
- Dependency updates: Renovate (per project conventions)

---

## Product direction & maintenance stance

The project was originally shipped quickly with a **legacy HTML/CSS/JS** base; incremental modernization (theming, bundling, removing unused public scripts) is documented in README as **desired** work, not necessarily completed.

**Current maintainer intent** (from internal notes): treat the codebase as **long-term maintenance**: avoid scope creep; prefer small, purposeful changes; keep docs aligned with reality when you touch them.

---

## Environment & configuration (for context)

- **Backend**: `BACKEND_URL` — local default in `next.config.js` is `http://localhost:3000`; in production, point to **`https://backend.vincelivemix.fr`** (or your deployment’s URL).
- **Vercel**: `package.json` pins Node with `engines.node` (**`24.x`**, aligned with `.tool-versions`). In the Vercel project, set **Settings → General → Node.js Version** to **24.x** (supported options are typically **20.x**, **22.x**, **24.x**) so the dashboard matches the repo. See [Node.js on Vercel](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions). Production env vars (`BACKEND_URL`, `GOOGLE_TAG`, etc.) belong in **Settings → Environment Variables**.
- **Public site metadata**: title/description and front URL are centralized in `next.config.js` `publicRuntimeConfig`.
- **Analytics**: `GOOGLE_TAG` when applicable.

---

## Roadmap (README vs. reality)

The README once listed ideas (e.g. contact page, about page, richer episodes for SEO). **Current status of those items is unclear** (they may already exist, be partial, or not be shipped). **Default stance**: treat them as **optional**; if they are not implemented and you do not need them, **you can drop them** from planning rather than keeping them as committed roadmap items.

---

## How this doc should evolve

- After meaningful product or URL changes, align **`next.config.js` meta** and this file in the same change when possible.
- If the README is trimmed or replaced, keep **one** place that explains “why we ship this” — this file or a short section in README that points here.
