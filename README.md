# Let's Think in Machine Learning

Marketing site for the book "Let's Think in Machine Learning" built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui. The site highlights the audience, learning outcomes, author details, and provides a clear contact CTA.

## Features
- Hero, intro, and flip-card sections detailing who the book is for and what readers will learn
- Dark editorial visual system with animated card flips and smooth reveals
- Author spotlight and final CTA pointing visitors to the Contact page
- Responsive navigation with theme toggle (light/dark) and mobile menu
- Component library based on shadcn/ui (Radix + Tailwind)

## Tech Stack
- Vite + React 18 + TypeScript
- Tailwind CSS + tailwindcss-animate + class-variance-authority/tailwind-merge
- shadcn/ui (Radix primitives) and lucide-react icons
- React Router for page routing

## Getting Started
Prerequisites: Node.js 18+ and pnpm/npm/yarn (examples use npm).

```sh
# Install dependencies
npm install

# Start dev server
npm run dev

# Lint
npm run lint

# Production build
npm run build

# Preview production build
npm run preview
```

## Project Structure
- [src/main.tsx](src/main.tsx): App bootstrap with router
- [src/App.tsx](src/App.tsx): Route wiring
- [src/pages/Index.tsx](src/pages/Index.tsx): Homepage (hero, flip cards, author, final CTA)
- [src/pages/Contact.tsx](src/pages/Contact.tsx): Contact page referenced by CTAs
- [src/components](src/components): Shared UI (Header, HeroSection, IntroSection, shadcn/ui primitives)
- [src/assets](src/assets): Static assets; favicon/logo in [public/main-logo.png](public/main-logo.png)

## Styling Notes
- Tailwind drives layout/spacing; shadcn/ui components provide accessible primitives
- Card flips use `transform` with preserve-3d on hover/focus (desktop) and keep content readable on mobile
- Theme toggle persists preference via `localStorage` (`dark` class on `document.documentElement`)

## Accessibility & UX
- Interactive cards are keyboard focusable; flip on focus (desktop) for parity with hover
- Buttons/links use clear labels; Contact CTA appears in header and final hero
- Color choices maintain contrast in both themes; animations use modest durations

## Deployment
- Build output: `dist/` via `npm run build`
- Deploy the static bundle to any static host (Netlify, Vercel, Azure Static Web Apps, etc.)

## Contact
For site/content updates or inquiries, use the Contact page linked throughout the site.
