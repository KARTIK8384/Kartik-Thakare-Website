# Kartik Thakare — Website

A one-page engineering portfolio focused on embedded firmware, RTL design, ASIC verification, FPGA systems, education, experience, and technical projects.

## Tech stack

- React 19
- Next.js / Vinext
- TypeScript
- Tailwind CSS 4
- Lucide icons

## Run locally

Install [Node.js 22 or newer](https://nodejs.org/) and [pnpm](https://pnpm.io/), then run:

```bash
pnpm install
pnpm dev
```

Open the local address shown in the terminal. To create a production build:

```bash
pnpm build
```

## Main files

- `app/page.tsx` — page content and structure
- `app/globals.css` — visual system, layouts, responsive rules, and animations
- `app/layout.tsx` — page metadata and global document setup
- `public/` — résumé PDFs, patent certificate, and favicon

## Editing content

Projects, experience, education, volunteering, notes, and résumé links are stored as data near the top of `app/page.tsx`. Update those arrays first; the page renders the cards from them automatically.

The black-and-cyan palette is controlled by CSS variables at the top of `app/globals.css`. Motion also respects the visitor's reduced-motion preference.
