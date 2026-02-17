## EchoTales – AI Audiobook Creator

EchoTales is a modern web application for creating **immersive, 15‑minute AI audio stories** in just a few steps.  
Users choose a genre, style, mood, and narrator, then EchoTales generates a tailored story and provides tools to track listening progress, streaks, and engagement.

The app is built with **Next.js App Router**, **React**, **Tailwind CSS**, **Radix UI**, and **Framer Motion**, with a **light/dark theme system** powered by `next-themes`.

---

## Features

- **Marketing Landing Page**
  - High‑level overview of EchoTales and its value proposition.
  - Highlighted feature grid (reading progress, gamification, analytics, quotes, premium membership).
  - Clear calls to action to **Login** and **View Pricing**.

- **Authenticated Home Experience**
  - Dashboard‑style home page (`/home`) with a hero section and animated background.
  - Primary CTA to **Create a new story**.
  - Feature cards describing speed, customization, and cinematic audio.

- **Guided Story Creation Wizard**
  - Multi‑step flow (`/create`) with progress indicator:
    - **Genre** → **Style** → **Mood** → **Narrator** → **Review**.
  - Each step is encapsulated in dedicated components (`StepGenre`, `StepStyle`, `StepMood`, `StepNarrator`, `StepReview`).
  - Validation per step and final review before generation.
  - Smooth animations and transitions using **Framer Motion**.

- **Generating & Library / History**
  - A dedicated generating view (`/generating`) to show progress feedback.
  - **Library** and **History** pages to review created stories, filter/sort them, and re‑engage with content.

- **Inspiration & Gamification**
  - **Quotes/Inspiration** page with curated quotes and gradient cards.
  - Copy emphasizes streaks, reward points, and engagement analytics.

- **Account & Profile**
  - **Profile** page to view user details and various engagement/usage panels.
  - Avatar, tabs, cards, and metrics implemented with Radix UI primitives and Tailwind theming.

- **Pricing & About**
  - **Pricing** page describing tiers and comparison table.
  - **About** page explaining the mission, product pillars, and team vision.

- **Theming & Design System**
  - **Light and dark themes** with HSL‑based CSS variables.
  - Centralized design tokens for:
    - `background`, `foreground`, `card`, `popover`
    - `primary`, `secondary`, `muted`, `accent`, `destructive`
    - `border`, `input`, `ring`
    - `sidebar-*` and chart colors.
  - **Glassmorphism utilities** (`glass-effect`, `glow-effect`) and gradient highlights.

- **Notifications**
  - Themed toast notifications powered by **Sonner** (`components/ui/sonner.tsx`) integrated with the theme provider.

---

## Tech Stack

- **Framework**: Next.js 16 (App Router, TypeScript)
- **Language**: TypeScript, React 19
- **Styling**:
  - Tailwind CSS 3
  - Custom `app/globals.css` with CSS variables and utility classes
- **UI Components**:
  - Radix UI primitives (Accordion, Dialog, DropdownMenu, Select, Tabs, Toast, Tooltip, etc.)
  - Custom component library under `components/ui/`
- **Animations**: Framer Motion
- **Theming**: `next-themes` with class‑based dark mode (`darkMode: ['class']` in `tailwind.config.ts`)
- **Forms & Validation**: `react-hook-form`, `zod`, and `@hookform/resolvers` (where used)
- **Notifications**: `sonner`

---

## Project Structure (High Level)

- **`app/`**
  - `layout.tsx` – Root layout, global fonts, theme provider, and Sonner toaster.
  - `page.tsx` – Public marketing landing page.
  - `home/page.tsx` – Authenticated home/dashboard view.
  - `create/page.tsx` – Multi‑step story creation wizard.
  - Additional routes:
    - `login/`, `about/`, `pricing/`, `library/`, `history/`, `quotes/`, `generating/`, `story/[id]/`, etc.
  - `globals.css` – Tailwind setup, theme tokens, and design utilities.

- **`components/`**
  - Layout & navigation: `header.tsx`, `marketing-nav.tsx`, `cta-button.tsx`.
  - Theming: `theme-provider.tsx`, `theme-toggle.tsx`.
  - Creation flow: `components/create/*` (step components, progress, review).
  - Shared UI: `components/ui/*` (buttons, inputs, select, tabs, toast, sidebar, etc.).

- **`hooks/`**
  - Custom hooks such as `use-toast` and `use-mobile`, and other UI/UX utilities.

- **`lib/`**
  - Utility functions and mock data (for avatars, sample content, etc.).

---

## Theming System

The application uses a **token‑based theming system** built on CSS variables and Tailwind.

- **CSS Variables** (`app/globals.css`)
  - `:root` defines the **light theme** tokens.
  - `.dark` overrides the same tokens for the **dark theme**.
  - Tailwind color mappings in `tailwind.config.ts` reference these tokens:
    - `background: 'hsl(var(--background))'`
    - `primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' }`
    - Similar setup for `secondary`, `muted`, `accent`, `destructive`, `border`, `input`, `ring`, `chart`, and `sidebar`.

- **Theme Provider** (`components/theme-provider.tsx`)
  - Thin wrapper around `next-themes` `ThemeProvider`.
  - Configured in `app/layout.tsx`:
    - `attribute="class"` – toggles `class="light"` / `class="dark"` on `<html>`.
    - `defaultTheme="system"` and `enableSystem` – respects `prefers-color-scheme`.
    - `disableTransitionOnChange` – avoids jarring transitions when switching.

- **Theme Toggle** (`components/theme-toggle.tsx`)
  - Accessible dropdown with Sun/Moon icons.
  - Options: **Light**, **Dark**, and **System**.
  - Uses `useTheme()` from `next-themes` to update theme and persist preference in `localStorage`.
  - Placed in:
    - The **header** for authenticated pages.
    - The **marketing navigation** for public pages.

- **Global Background & Glass Effects**
  - Light vs dark background gradients controlled by body CSS:
    - Light: softer violet/cyan radial gradients.
    - Dark: stronger, higher‑opacity gradients.
  - `glass-effect` adjusts its background and border based on theme:
    - Light: subtle dark overlay + `border: hsl(var(--border))`.
    - Dark: semi‑transparent white overlay + light border.

All components built with Tailwind utilities like `bg-background`, `text-foreground`, `border-border`, `bg-muted`, etc. automatically adapt to the active theme.

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 20 (recommended)
- A package manager: **pnpm**, **npm**, or **yarn**

### Installation

Clone the repository and install dependencies:

```bash
git clone <your-repo-url>
cd ai-audiobook-app

# using pnpm (recommended)
pnpm install

# or npm
npm install

# or yarn
yarn install
```

### Development

Run the development server:

```bash
# pnpm
pnpm dev

# or
npm run dev

# or
yarn dev
```

Then open `http://localhost:3000` in your browser.

### Production Build

Create an optimized production build:

```bash
pnpm build
# or: npm run build / yarn build
```

Start the production server:

```bash
pnpm start
# or: npm start / yarn start
```

### Linting

Run the linter:

```bash
pnpm lint
# or: npm run lint / yarn lint
```

---

## Application Workflow

### 1. Landing & Marketing

- Visit `/` to see the **public landing page**.
- Read about EchoTales, explore feature highlights, and navigate to **Login**, **Pricing**, or **About**.
- Toggle between **light** and **dark** themes directly from the navigation bar.

### 2. Authentication

- From the landing page, choose **Login** to access the main application.
- After login, you are typically redirected to `/home`.

### 3. Home Dashboard (`/home`)

- See a hero section introducing the AI storyteller.
- Primary CTA to **Create a new story**.
- Review core selling points via animated feature cards.

### 4. Create a Story (`/create`)

- Guided multi‑step wizard:
  - **Genre** – pick the story genre.
  - **Style** – choose narrative style.
  - **Mood** – define emotional tone.
  - **Narrator** – select the narrator voice.
  - **Review** – confirm selections.
- Progress bar and step indicator at the top.
- Navigation controls:
  - **Next / Previous** step.
  - Final **Generate My Story** button (simulated redirect to `/generating`).

### 5. Generating, Library, History, and Quotes

- **Generating** (`/generating`):
  - Visual feedback and animated loading sequence while a story is being produced.
- **Library** (`/library`):
  - Browse created stories with cards and filters.
- **History** (`/history`):
  - View chronological list with search, genre filter, and sort options.
  - Uses theme‑aware inputs and selects for a consistent look in both themes.
- **Quotes / Inspiration** (`/quotes`):
  - Explore inspirational quotes, daily prompts, and thematic cards.

### 6. Profile, Pricing, and About

- **Profile** (`/profile`):
  - See user avatar, engagement stats, and tabs for different account views.
- **Pricing** (`/pricing`):
  - Compare tiers, view a feature table, and review CTAs for upgrading.
- **About** (`/about`):
  - Learn about the product vision, who it is for, and the underlying philosophy.

---

## Development Notes

- **Component Library**  
  UI components are built on top of Radix primitives with Tailwind variants. When adding new components:
  - Prefer existing tokens (`bg-background`, `text-foreground`, `border-border`).
  - Use `primary`, `secondary`, `accent`, and `muted` variants to stay in the design system.

- **Theming Best Practices**
  - Avoid hardcoded colors like `#000` / `#fff` where possible; use theme tokens instead.
  - For new glass or gradient effects, keep light/dark variants in `globals.css` utilities.

- **Animations**
  - Use Framer Motion variants defined per component for enter/exit transitions.
  - Keep motion logic declarative and colocated with the UI it animates.

---

## Contributing

Contributions are welcome. When adding new pages or components:

- **Reuse existing design tokens** and utilities.
- Ensure **both light and dark themes** look good.
- Keep UX consistent with the existing multi‑step flows and transitions.

Before opening a pull request:

- Run `pnpm lint` (or your package manager equivalent).
- Manually test the main flows (**landing → login → home → create → generating → library/history**) in both light and dark themes.

