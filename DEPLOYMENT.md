# DEPLOYMENT

**Authoritative source for deployment process and production checklist.**

Configuration and environment variables: `DATABASE_AND_CONFIG.md`

Architecture and hosting: `ARCHITECTURE.md`

---

## Repository

GitHub

Main Branch

main

Development

feature/*

---

## Hosting

Vercel

Production Branch

main

---

## Environment Variables

See `DATABASE_AND_CONFIG.md` → Environment Variables.

Do not redefine variables in this document.

---

## Domain

Connect custom domain

Enable HTTPS

Redirect www

---

## Analytics

See `DATABASE_AND_CONFIG.md` → Monitoring.

---

## Production Checklist

✓ Build passes

✓ Images optimized

✓ Metadata complete (see `SEO_PLAN.md`)

✓ Sitemap generated

✓ Robots configured

✓ Lighthouse >95 (see `ARCHITECTURE.md`)

✓ Contact form works

✓ Email received

✓ Mobile tested (see `TESTING_PLAN.md`)

✓ Desktop tested

✓ SEO verified

✓ Accessibility verified

✓ Performance verified

---

## Post Deployment

Monitor analytics

Monitor search console

Fix reported issues

Optimize based on user behavior

Schedule regular updates
