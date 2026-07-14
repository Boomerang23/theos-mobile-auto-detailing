import { Instagram } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { businessConfig } from "@/data/business";
import { footerCopy, footerNavLinks } from "@/data/navigation";

export function Footer() {
  const year = new Date().getFullYear();
  const contactEmail = process.env.CONTACT_EMAIL;

  return (
    <footer className="bg-primary text-secondary">
      <Container className="py-section-mobile md:py-section-tablet">
        <div className="grid gap-48 md:grid-cols-2 lg:grid-cols-4 lg:gap-32">
          <div className="lg:col-span-2">
            <p className="font-heading text-card-title font-semibold">
              {businessConfig.name}
            </p>
            <p className="mt-8 font-heading text-body font-medium text-accent">
              {footerCopy.tagline}
            </p>
            <p className="mt-16 max-w-xl text-small text-secondary/80">
              {footerCopy.description}
            </p>
            <p className="mt-16 text-small text-secondary/80">
              {businessConfig.location}
            </p>
          </div>

          <div>
            <p className="font-heading text-body font-semibold">
              {footerCopy.callToday}
            </p>
            <a
              href={`tel:${businessConfig.phone}`}
              className="mt-16 inline-block text-body text-accent transition duration-DEFAULT hover:brightness-110 focus-ring-on-dark"
            >
              {businessConfig.phoneFormatted}
            </a>
            {contactEmail ? (
              <a
                href={`mailto:${contactEmail}`}
                className="mt-8 block text-small text-secondary/80 transition duration-DEFAULT hover:text-secondary focus-ring-on-dark"
              >
                {contactEmail}
              </a>
            ) : (
              <p className="mt-8 text-small text-secondary/60">
                [PLACEHOLDER] Email — set CONTACT_EMAIL
              </p>
            )}

            <p className="mt-32 font-heading text-body font-semibold">
              {footerCopy.businessHours}
            </p>
            <p className="mt-8 text-small text-secondary/60">
              {businessConfig.hoursPlaceholder}
            </p>
          </div>

          <div>
            <nav aria-label="Footer">
              <ul className="flex flex-col gap-16">
                {footerNavLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-small text-secondary/80 transition duration-DEFAULT hover:text-accent focus-ring-on-dark"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-32 flex flex-col gap-12">
              <a
                href={businessConfig.socials.instagram}
                aria-label={`Instagram ${businessConfig.instagramHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-12 text-secondary/80 transition duration-DEFAULT hover:text-accent focus-ring-on-dark"
              >
                <Instagram
                  className="h-24 w-24"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <span className="text-small">
                  {businessConfig.instagramHandle}
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-48 flex flex-col gap-16 border-t border-secondary/15 pt-32 text-small text-secondary/80 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {businessConfig.name}
          </p>
          <div className="flex gap-24">
            <Link
              href="/privacy"
              className="transition duration-DEFAULT hover:text-secondary focus-ring-on-dark"
            >
              {footerCopy.privacy}
            </Link>
            <Link
              href="/terms"
              className="transition duration-DEFAULT hover:text-secondary focus-ring-on-dark"
            >
              {footerCopy.terms}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
