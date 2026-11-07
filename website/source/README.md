# NoTraceFiles React landing

React + TypeScript + Vite, Tailwind CSS v4 via @tailwindcss/vite, and shadcn-compatible components.json and aliases are installed.

Run `npm install`, then `npm run dev -- --port 5173`. Build with `npm run build`.

Reusable components live in `components/ui`, demo in `components/aurora-background-demo.tsx`, utility in `lib/utils.ts`, Tailwind styles in `src/styles.css`. This folder and the matching aliases let shadcn-generated components resolve consistently. Use `npx shadcn@latest add button` to add a component. For a fresh Vite project use `npx shadcn@latest init` after configuring Tailwind and TypeScript.

The existing landing markup is preserved in landing.html and mounted as a static React content island; its metadata/parallax behavior is retained. AuroraBackground is a reusable React component. The wrapper uses a div to avoid nesting main landmarks and the landing overrides its height for the full page. `?demo=aurora` shows the supplied standalone Motion demo. Reduced-motion preference stops the aurora animation.

Downloads still require real Windows/Android URLs. Local build does not publish the website.
