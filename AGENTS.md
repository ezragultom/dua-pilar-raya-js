# AGENTS.md

## Project Overview
This is a Next.js project using TypeScript and Tailwind CSS. It is a landing page for "Dua Pilar Raya", featuring 3D animations with React Three Fiber and Framer Motion.

## Setup Commands
- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Build for production: `npm run build`
- Lint code: `npm run lint`

## Code Style
- **Framework**: Next.js (App Router)
- **Language**: TypeScript (Strict mode enabled)
- **Styling**: Tailwind CSS (v4)
- **Components**: Functional components with hooks
- **Formatting**:
    - Use double quotes for strings (where possible)
    - No semicolons (as per current file style observation, though not strictly enforced by config, consistency is key)
    - 4 spaces for indentation (observed in existing files)

## Project Structure
- `src/app`: App Router pages (`page.tsx`) and layouts (`layout.tsx`).
- `src/components`: Reusable UI components, organized by feature (e.g., `home`, `services`, `layout`, `ui`).
- `src/lib`: Utility functions (e.g., `utils.ts` for `cn`).
- `public`: Static assets.

## Key Technologies
- **Next.js**: 16.0.6
- **React**: 19.2.0
- **Tailwind CSS**: 4.0
- **Framer Motion**: 12.23.24
- **React Three Fiber**: 9.4.2
- **Lucide React**: 0.555.0

## Conventions
- Use `cn()` utility for merging Tailwind classes.
- Use `lucide-react` for icons.
- Ensure all new components are responsive.
- Use `use client` directive for components using hooks or browser-only features.
