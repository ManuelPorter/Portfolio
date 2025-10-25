<!-- .github/copilot-instructions.md - guidance for AI coding agents working on this repo -->

# Quick context

- This is a small single-page React portfolio built with Vite + TailwindCSS. Entry point: `src/main.jsx` -> `src/App.jsx`.
- Styling relies on Tailwind utility classes in `src/index.css` and `tailwind.config.js`.
- Animations and icons use `framer-motion` and `react-icons`; SVG components live in `src/components/anim`.

# What to change and why

- Focus on component edits inside `src/components/*`. `App.jsx` composes top-level layout and theme toggle (persisted to localStorage).
- Preserve global theming behavior: document.documentElement.classList is used to set `dark`/`light` theme classes. When adding styles, prefer toggling classes rather than direct style injection.

# Build / dev / debug commands (what to run locally)

- Start dev server with: `npm run dev` (runs `vite`).
- Build production bundle: `npm run build`.
- Preview production build: `npm run preview`.
- Lint: `npm run lint` (ESLint configured).

# Project-specific conventions & patterns

- Files are JSX (not TSX) but TypeScript is present in devDependencies; stick to `.jsx` files unless adding types deliberately.
- Tailwind utility-first classes are used everywhere; avoid adding global CSS unless necessary - prefer small component-scoped utilities.
- Theme state is stored in `localStorage` under key `theme` and applied to `<html>` via classes `dark`/`light`. Tests or patches must respect that flow.
- Images and static assets live under `src/assets/` (logo, profile pics, project thumbnails). Import them directly (e.g., `import logo from '../assets/logo.png'`).
- Animated SVG components are exported as named exports from `src/components/anim/*` and are used directly in JSX (props: `width`, `height`). Keep their prop signature consistent.

# Examples of common edits

- To add a new section: create `src/components/YourSection.jsx`, export default, then import and use in `App.jsx` alongside existing sections (`Hero`, `About`, `Technologies`).
- To add a new SVG animation: add `src/components/anim/yourSvg.jsx`, export a named React component that accepts `width`/`height`, and import in `App.jsx` or `Technologies.jsx`.

# Files to inspect for behavior or style rules

- `src/App.jsx` — top-level composition and theme handling.
- `src/main.jsx` — app bootstrap and global CSS import.
- `src/index.css` — global styles (Tailwind directives + any overrides).
- `tailwind.config.js` — theme and plugin configuration.
- `src/components/Navbar.jsx`, `Hero.jsx`, `About.jsx`, `Technologies.jsx`, `Experience.jsx` — primary UI components.

# External integrations

- No backend or API integrations in this repo. Social links in `Navbar.jsx` link to external profiles. No secrets or env files expected.

# Editing rules for AI agents

- Keep edits small and focused. Update or add one component per PR when possible.
- Preserve import paths and file extensions used in the project (`.jsx`).
- When touching theme-related code, ensure `localStorage` and `document.documentElement.classList` behavior remain intact.
- Do not convert the repo to TypeScript or change build tooling without explicit request.

# When adding tests or tooling

- There are no test runners configured; do not add a heavy testing setup without approval. Small unit tests can be added if they are lightweight and come with scripts in `package.json`.

# If you can't find something

- If a behavior isn't obvious, open `src/App.jsx`, `src/main.jsx`, and likely the component that renders the UI you are investigating. For CSS issues, check `src/index.css` and `tailwind.config.js`.

---
If any section is unclear or you want the file to include more examples (example PR checklist, preferred commit message format, or code style rules), tell me what to add and I'll update this file.
