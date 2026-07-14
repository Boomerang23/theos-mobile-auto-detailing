# CURSOR.md — Theo's Mobile Auto Detailing

## Project Context

This project is a premium marketing website for Theo's Mobile Auto Detailing, a mobile auto detailing business in the United States.

The website must be modern, professional, mobile-first, fast, and easy to maintain.

The main goal is to help visitors understand the services, compare detailing packages, and request a quote or call the business quickly.

## Tech Stack

Authoritative source: `ARCHITECTURE.md`

Do not maintain a separate stack definition here.

## Core Rules

- Use TypeScript everywhere.
- Use reusable components.
- Do not duplicate code.
- Keep data in reusable arrays when possible.
- Keep components small and readable.
- Use semantic HTML.
- Use accessible labels for forms and buttons.
- Use mobile-first responsive design.
- Do not hardcode repeated content inside JSX when it can be mapped from data.
- Do not introduce unnecessary libraries beyond those listed in `ARCHITECTURE.md`.
- Do not create backend features unless explicitly requested.
- Do not invent business information that is not in `CONTENT_COPY.md` or `DATABASE_AND_CONFIG.md`.

## File Organization

Authoritative structure. Must match `ARCHITECTURE.md` and `IMPLEMENTATION_PLAN.md`.

```text
src/
  app/
    page.tsx
    layout.tsx
    globals.css
    services/
    gallery/
    pricing/
    about/
    contact/
    privacy/
    terms/
  components/
    layout/
    sections/
    ui/
  data/
    packages.ts
    services.ts
    faq.ts
  lib/
  types/
public/
```

## Single Source of Truth

| Topic | Document |
|-------|----------|
| Architecture | `ARCHITECTURE.md` |
| Design | `DESIGN_SYSTEM.md` |
| Components | `COMPONENT_INVENTORY.md` |
| Content (UI copy) | `CONTENT_COPY.md` |
| Content strategy | `CONTENT_PLAN.md` |
| User journey | `USER_FLOW.md` |
| Configuration | `DATABASE_AND_CONFIG.md` |
| SEO | `SEO_PLAN.md` |
| Implementation | `IMPLEMENTATION_PLAN.md` |
| Testing | `TESTING_PLAN.md` |
| Deployment | `DEPLOYMENT.md` |

# Documentation Priority

When documents conflict always follow this order:

1. IMPLEMENTATION_PLAN.md
2. ARCHITECTURE.md
3. COMPONENT_INVENTORY.md
4. DESIGN_SYSTEM.md
5. CONTENT_COPY.md
6. CONTENT_PLAN.md
7. USER_FLOW.md
8. DATABASE_AND_CONFIG.md
9. SEO_PLAN.md
10. TESTING_PLAN.md
11. DEPLOYMENT.md

Never merge conflicting requirements.

Always follow the highest priority document.
