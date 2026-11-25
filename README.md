# Day 06 — Next.js App Router

Learning outcome: understand routing and the Next.js application model.

## Demonstrated
- `app/layout.tsx`: shared root layout and metadata
- `app/page.tsx`, `app/about/page.tsx`: route pages
- `app/courses/page.tsx`: list route
- `app/courses/[slug]/page.tsx`: dynamic segment
- Server Components by default; `components/ClickCounter.tsx` is an explicit Client Component for browser state

## Run
`npm install` → `npm run dev` → open http://localhost:3000

## Design choice
Use the App Router file-system convention so URL structure is visible from the `app` directory. The shared layout avoids repeating site navigation. The course detail is a Server Component because it needs no browser-only state.
