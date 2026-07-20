# IMPLEMENTATION PLAN



Project

Theo's Mobile Auto Detailing



Version 1.0



---



# Goal



Build a premium, fast, modern website for Theo's Mobile Auto Detailing.



Every phase must be completed, reviewed, tested and committed before moving to the next.



Never skip phases.



---



# Routing Model



See `ARCHITECTURE.md` for the authoritative route list.



Homepage (`/`) contains all preview sections defined in `CONTENT_PLAN.md`.



Dedicated pages: `/services`, `/gallery`, `/pricing`, `/about`, `/contact`, `/privacy`, `/terms`.



FAQ is a homepage section only. There is no `/faq` route.



---



# Folder Structure



See `ARCHITECTURE.md` for the authoritative structure.



Must be created in Phase 2.



---



# Phase 1 — Project Initialization



Objectives



- Create Next.js project

- Configure TypeScript

- Configure Tailwind CSS

- Configure ESLint

- Configure Prettier

- Configure absolute imports

- Configure aliases

- Verify production build



Deliverables



- Clean project

- No warnings

- No errors



Review Required



YES



---



# Phase 2 — Project Foundation



Objectives



Create



- Folder structure (per `ARCHITECTURE.md`)

- Global styles (per `DESIGN_SYSTEM.md`)

- Theme variables

- Fonts

- Color system

- Layout

- Metadata

- SEO defaults



Deliverables



- Global layout finished

- Responsive container

- Typography system



Review Required



YES



---



# Phase 3 — Core Components



Objectives



Build reusable components per `COMPONENT_INVENTORY.md` — Shared Components and Layout sections.



Deliverables



Reusable component library



Review Required



YES



---



# Phase 4 — Navigation



Objectives



Create components per `COMPONENT_INVENTORY.md` — Layout and Navigation sections.



- DesktopNav

- MobileNav

- Navbar

- Footer



Deliverables



Fully responsive navigation



Review Required



YES



---



# Phase 5 — Homepage Hero



Objectives



Build homepage hero section.



Copy: `CONTENT_COPY.md` → HERO



Components: `COMPONENT_INVENTORY.md` — Hero section



Deliverables



Hero section on homepage



Review Required



YES



---



# Phase 6 — Services



Objectives



Build homepage Services section and `/services` dedicated page.



Copy: `CONTENT_COPY.md` → SERVICES



Components: `COMPONENT_INVENTORY.md` — Services section



Deliverables



- Homepage Services section (summary, links to `/services`)

- `/services` page (full listing)



Review Required



YES



---



# Phase 7 — About Theo



Objectives



Build `/about` dedicated page.



Content to be provided.



Components: `COMPONENT_INVENTORY.md` — PageHeader, Section, AnimatedSection



Deliverables



`/about` page



Review Required



YES



---



# Phase 8 — Gallery



Objectives



Build homepage Gallery preview and `/gallery` dedicated page.



Copy: `CONTENT_COPY.md` → GALLERY



Components: `COMPONENT_INVENTORY.md` — Gallery section



Deliverables



- Homepage Gallery section (preview, links to `/gallery`)

- `/gallery` page (full grid)



Review Required



YES



---



# Phase 9 — Pricing



Objectives



Build homepage Pricing Preview and `/pricing` dedicated page.



Content to be provided.



Components: `COMPONENT_INVENTORY.md` — Pricing section



Deliverables



- Homepage Pricing Preview section (summary, links to `/pricing`)

- `/pricing` page (full packages)



Review Required



YES



---



# Phase 10 — Testimonials



Objectives



Build homepage Testimonials section.



Copy: `CONTENT_COPY.md` → TESTIMONIALS



Components: `COMPONENT_INVENTORY.md` — Testimonials section



Deliverables



Testimonials section on homepage



Review Required



YES



---



# Phase 11 — FAQ



Objectives



Build FAQ section on homepage.



Accordion structure per `CONTENT_PLAN.md` FAQ topic inventory.



Components: `COMPONENT_INVENTORY.md` — FAQ section



Deliverables



FAQ section on homepage (no `/faq` route)



Review Required



YES



---



# Phase 12 — Contact



Objectives



Build homepage Contact section, Service Area, and `/contact` dedicated page.



Copy: `CONTENT_COPY.md` → CONTACT



Components: `COMPONENT_INVENTORY.md` — Contact section



Deliverables



- Homepage Contact section (embedded form)

- Homepage Service Area section

- `/contact` page (full form, map, service area)



Review Required



YES



---



# Phase 13 — Email Backend



Objectives



Resend integration



Validation



Error handling



Spam protection



Configuration: `DATABASE_AND_CONFIG.md`



Deliverables



Working contact form email delivery



Review Required



YES



---



# Phase 14 — SEO



Objectives



Per `SEO_PLAN.md`:



Metadata



OpenGraph



Twitter



Robots



Sitemap



Schema.org



Local Business



Deliverables



SEO complete for all routes in `ARCHITECTURE.md`



Review Required



YES



---



# Phase 15 — Performance



Objectives



Optimize



Images



Fonts



Loading



Animations



Bundle



Deliverables



Lighthouse >95



Review Required



YES



---



# Phase 16 — Accessibility



Objectives



Keyboard navigation



ARIA



Contrast



Focus states



Screen readers



Target: WCAG AA per `DESIGN_SYSTEM.md`



Deliverables



WCAG AA



Review Required



YES



---



# Phase 17 — Final QA



Objectives



Cross-browser testing



Responsive testing



Bug fixing



Code cleanup



Legal pages (`/privacy`, `/terms`)



Documentation



Deliverables



Production-ready website



Review Required



YES



---



# Git Workflow



Each completed phase:



1. Implement

2. Review

3. Fix

4. Test

5. Commit



Never combine multiple phases in one commit.



---



# Rule



Cursor must NEVER jump to another phase unless the current phase has been validated.



Small commits.



Small PRs.



Clean architecture.



Always prioritize maintainability over speed.


