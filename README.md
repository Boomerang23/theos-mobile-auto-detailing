# Theo's Mobile Auto Detailing

Premium marketing website for Theo's Mobile Auto Detailing — a mobile auto detailing business in the United States. Built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Forms | React Hook Form + Zod |
| Email | Resend |
| Maps | Google Maps |
| Analytics | Google Analytics |
| Deployment | Vercel |

See `ARCHITECTURE.md` for the full architectural specification.

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd theos-mobile-auto-detailing

# Install dependencies
npm install

# Copy environment variables and fill in values
cp .env.example .env.local
```

### Environment Variables

Copy `.env.example` to `.env.local` and configure the following integrations:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Production site URL |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Google Maps API key |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics GA4 measurement ID |
| `RESEND_API_KEY` | Resend API key for contact form emails |
| `RESEND_FROM_EMAIL` | Verified Resend sender (optional; defaults to onboarding@resend.dev) |
| `CONTACT_EMAIL` | Business email for form submissions |
| `BUSINESS_PHONE` | Business phone number |
| `BUSINESS_ADDRESS` | Business address |
| `BUSINESS_NAME` | Business name |

Full variable reference: `DATABASE_AND_CONFIG.md`.

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
  app/              # Next.js App Router pages and layouts
    page.tsx        # Homepage
    layout.tsx      # Root layout
    globals.css     # Global styles and CSS variables
    services/       # /services
    gallery/        # /gallery
    pricing/        # /pricing
    about/          # /about
    contact/        # /contact
    privacy/        # /privacy
    terms/          # /terms
  components/
    layout/         # Navbar, Footer, etc.
    sections/       # Homepage and page sections
    ui/             # Reusable UI primitives
  data/             # Static content arrays (services, packages, FAQ)
  lib/              # Utilities and helpers
  types/            # Shared TypeScript types
public/             # Static assets (images, icons, favicon)
```

Authoritative folder structure: `ARCHITECTURE.md`.

## Design System

All design tokens (colors, typography, spacing, breakpoints, border radius, shadows, animations) are defined in `DESIGN_SYSTEM.md` and implemented in `tailwind.config.ts`.

- **Brand colors:** navy `#0A192F`, electric `#00E5FF`, gold `#FFD700`
- **Fonts:** Poppins (headings), Inter (body)
- **Mobile-first breakpoints** starting at 390px

Do not hardcode colors or spacing values in components — use Tailwind token classes.

## Documentation

This project uses a single-source-of-truth documentation model. When documents conflict, follow the priority order in `CURSOR.md`.

| Document | Purpose |
|----------|---------|
| `CURSOR.md` | AI assistant rules and documentation priority |
| `ARCHITECTURE.md` | Tech stack, folder structure, routing, coding rules |
| `DESIGN_SYSTEM.md` | Design tokens, typography, colors, UI patterns |
| `COMPONENT_INVENTORY.md` | Authoritative component names and inventory |
| `CONTENT_COPY.md` | All UI copy (headlines, CTAs, form labels) |
| `CONTENT_PLAN.md` | Content strategy and page section structure |
| `USER_FLOW.md` | User journeys and conversion paths |
| `DATABASE_AND_CONFIG.md` | Environment variables and integrations |
| `SEO_PLAN.md` | Metadata, structured data, sitemap |
| `IMPLEMENTATION_PLAN.md` | Phased build plan and deliverables |
| `TESTING_PLAN.md` | QA checklist and test scenarios |
| `DEPLOYMENT.md` | Vercel deployment and production checklist |
| `STYLE_GUIDE.md` | Code style conventions |

## Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage with all preview sections |
| `/services` | Full services listing |
| `/gallery` | Before & after gallery |
| `/pricing` | Pricing and packages |
| `/about` | About Theo |
| `/contact` | Contact form, map, service area |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |

FAQ is a homepage section only — there is no `/faq` route.

## Deployment

Hosted on Vercel. See `DEPLOYMENT.md` for the production checklist and environment variable setup.

## License

Private — all rights reserved.
