# PROJECT ARCHITECTURE



Project Name



Theo's Mobile Auto Detailing



---



# Tech Stack



Framework



Next.js 16 (App Router)



Language



TypeScript



UI



React



Styling



Tailwind CSS



Animations



Framer Motion



Icons



Lucide React



Deployment



Vercel



Forms



React Hook Form



Validation



Zod



Emails



Resend



Maps



Google Maps



Analytics



Google Analytics



Vercel Analytics



---



# Folder Structure



Authoritative structure. Must match `CURSOR.md` and `IMPLEMENTATION_PLAN.md`.



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



---



# Routing Model



Homepage (`/`) is a single scrollable page with preview sections.



Dedicated pages provide full content for the same topics where applicable.



There is no `/faq` route. FAQ exists only as a homepage section.



| Route | Type | Description |

|-------|------|-------------|

| `/` | Homepage | All homepage sections in order (see `CONTENT_PLAN.md`) |

| `/services` | Dedicated page | Full services listing |

| `/gallery` | Dedicated page | Full before & after gallery |

| `/pricing` | Dedicated page | Full pricing and packages |

| `/about` | Dedicated page | About Theo |

| `/contact` | Dedicated page | Full contact form, map, service area |

| `/privacy` | Dedicated page | Privacy Policy |

| `/terms` | Dedicated page | Terms of Service |



Homepage sections that link to dedicated pages:



- Services section → `/services`

- Gallery section → `/gallery`

- Pricing Preview section → `/pricing`

- Contact section → `/contact` (homepage embeds a contact form; `/contact` is the full page)



---



# Components



Authoritative component names and inventory: `COMPONENT_INVENTORY.md`



Do not redefine component names in other documents.



---



# Features



Quote Request



Online Contact Form



Click to Call



Google Maps



Service Area



Testimonials



FAQ



Gallery



Responsive Navigation



Animations



SEO



Accessibility



---



# State Management



Local state only.



No Redux.



No Zustand.



---



# API



Contact Form



Send Email



Validate Input



Return Success/Error



Details: `DATABASE_AND_CONFIG.md`



---



# Images



Optimized with Next Image.



Lazy loading enabled.



Modern formats.



---



# SEO



Authoritative SEO specification: `SEO_PLAN.md`



---



# Accessibility



Keyboard navigation



Visible focus



Semantic HTML



ARIA when necessary



Target: WCAG AA



---



# Performance Goals



Lighthouse



Performance >95



Accessibility 100



SEO 100



Best Practices 100



---



# Coding Rules



Reusable components



No duplicated code



Strict TypeScript



Clean folder structure



Consistent naming



One responsibility per component



No inline styles



No hardcoded colors



Everything configurable



Component names must match `COMPONENT_INVENTORY.md`



Design tokens must match `DESIGN_SYSTEM.md`



UI copy must match `CONTENT_COPY.md`


