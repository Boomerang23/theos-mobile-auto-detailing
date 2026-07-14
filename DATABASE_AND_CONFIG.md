# DATABASE & CONFIGURATION

Project
Theo's Mobile Auto Detailing

Version 1.0

**Authoritative source for environment variables, integrations, and configuration.**

---

# Current Version

Static marketing website.

No database required.

---

# Planned Integrations

Resend

Google Maps

Google Analytics

Google Search Console

Google Business Profile

Google reCAPTCHA

Google Fonts

Vercel

---

# Environment Variables

Authoritative list. `DEPLOYMENT.md` references this section.

```
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=
NEXT_PUBLIC_GA_MEASUREMENT_ID=
RESEND_API_KEY=
CONTACT_EMAIL=
BUSINESS_PHONE=
BUSINESS_ADDRESS=
BUSINESS_NAME=
```

---

# Future Database

Not required for v1. Preferred platform when needed: Supabase.

Possible Tables

customers

quote_requests

services

reviews

gallery

pricing

faq

blog_posts

admins

site_settings

---

# Future Storage

Supabase Storage (when database is introduced)

Folders

gallery/

before-after/

logos/

team/

services/

---

# Email Workflow

Visitor

↓

Contact Form

↓

Validation

↓

Resend API

↓

Business Email

↓

Confirmation Email to Customer

On-page feedback: `CONTENT_COPY.md` → CONTACT (Success Message, Error Message)

---

# Security

Server-side validation

Rate limiting

Spam protection

CAPTCHA (Google reCAPTCHA)

Input sanitization

HTTPS only

---

# Backup (Current Version)

GitHub — source code

Vercel — deployment history

---

# Backup (Future — when Supabase is introduced)

Supabase — daily database backups

---

# Deployment

Production

Vercel

Development

Localhost

Preview

Vercel Preview Deployments

See `DEPLOYMENT.md` for deployment checklist.

---

# Monitoring

Google Analytics

Google Search Console

Vercel Analytics

Error Logging (future)
