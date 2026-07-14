import { Instagram } from "lucide-react";
import { CTAButton } from "@/components/layout/CTAButton";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { businessConfig } from "@/data/business";
import { galleryCopy, galleryItems } from "@/data/gallery";
import { pageGraphSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "Gallery",
  description: galleryCopy.subtitle,
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        id="ld-gallery"
        data={pageGraphSchema([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ])}
      />
      <PageHeader
        title={galleryCopy.title}
        description={galleryCopy.subtitle}
      />

      <Section ariaLabelledby="gallery-grid-heading">
        <AnimatedSection>
          <h2 id="gallery-grid-heading" className="sr-only">
            Before and after gallery
          </h2>
          <GalleryGrid items={galleryItems} />
          <div className="mt-48 flex flex-col gap-16 sm:flex-row sm:items-center">
            <a
              href={businessConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-interactive inline-flex h-button items-center justify-center gap-12 rounded-button border border-primary px-32 text-button font-medium text-primary hover:bg-primary hover:text-secondary"
            >
              <Instagram className="h-20 w-20" strokeWidth={1.5} aria-hidden />
              {galleryCopy.instagramCta}
            </a>
            <CTAButton className="w-full sm:w-auto" />
          </div>
        </AnimatedSection>
      </Section>
    </>
  );
}
