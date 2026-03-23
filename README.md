# My Portfolio Builder

A modern, interactive portfolio website built with React, TypeScript, Vite, and Tailwind CSS.
The site focuses on smooth motion, clean section-based storytelling, and a retro-inspired visual style.

## Highlights

- Framer Motion powered section transitions and micro-interactions
- Reusable UI foundation with shadcn/ui and Radix primitives
- Single-page portfolio flow with responsive navigation
- React Query + Router setup ready for future content/API growth
- Unit/integration test setup with Vitest + Testing Library
- Fast local development and optimized production builds via Vite

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| TypeScript | Type safety |
| Vite | Dev server and build tooling |
| Tailwind CSS | Styling system |
| Framer Motion | Animation and transitions |
| shadcn/ui + Radix UI | Accessible component primitives |
| React Router | Routing (`/` and `*`) |
| TanStack React Query | Query cache and async state |
| Vitest + Testing Library | Testing |
| ESLint | Linting and code quality |

## Prerequisites

- Node.js 18+
- npm 9+ (pnpm/bun also work)

## Quick Start

```bash
git clone <your-repo-url>
cd my-portfolio-builder
npm install
npm run dev
```

The app runs on [http://localhost:8080](http://localhost:8080).

## Available Scripts

- `npm run dev`: Start Vite dev server with HMR
- `npm run build`: Create production build in `dist/`
- `npm run build:dev`: Build in development mode
- `npm run preview`: Preview the production build locally
- `npm run lint`: Run ESLint across the project
- `npm run test`: Run tests once
- `npm run test:watch`: Run tests in watch mode

## Environment Variables

Only one custom environment variable is currently used:

| Variable | Default | Used In | Purpose |
|---|---|---|---|
| `VITE_CONTACT_EMAIL` | `kshathishka@email.com` | `src/components/Navbar.tsx` | Mailto CTA in navbar |

Create a `.env.local` file at the project root if you want to override it:

```env
VITE_CONTACT_EMAIL=hello@yourdomain.com
```

## Project Structure

```text
src/
	components/
		ui/               # shadcn/ui and Radix-based primitives
		*.tsx             # portfolio sections (Hero, About, Projects, etc.)
	hooks/              # reusable hooks
	lib/                # utility helpers
	pages/              # route-level pages (Index, NotFound)
	test/               # Vitest setup + test files
	App.tsx             # providers + router wiring
	main.tsx            # app bootstrap
	index.css           # global styles and design tokens
```

## How To Customize

- Update section content in `src/components/`
- Adjust theme/design tokens in `src/index.css` and `tailwind.config.ts`
- Add new routes in `src/App.tsx`
- Swap contact links/details in `src/components/Contact.tsx` and `src/components/Navbar.tsx`

## Testing

Tests are configured with `jsdom` and a shared setup file at `src/test/setup.ts`.

```bash
npm run test
```

## Linting

```bash
npm run lint
```

## Contributing

Contributions are welcome. See [CONTRIBUTING.md](./CONTRIBUTING.md) for branch, commit, and pull request guidelines.

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE).

## Contact

- Email: kshathishka@email.com
- GitHub: [@kshathishka](https://github.com/kshathishka)
- LinkedIn: [Kshathishka Parakala](https://linkedin.com/in/kshathishka)
