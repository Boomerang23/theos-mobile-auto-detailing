import Link from "next/link";
import { Instagram } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Section } from "@/components/layout/Section";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { businessConfig } from "@/data/business";
import { galleryCopy, galleryPreview } from "@/data/gallery";

export function GallerySection() {
  return (
    <Section id="gallery" ariaLabelledby="gallery-heading" deferPaint>
      <AnimatedSection>
        <div className="mb-48 flex flex-col gap-24 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Heading as={2} id="gallery-heading">
              {galleryCopy.title}
            </Heading>
            <Paragraph className="mt-16 max-w-3xl text-gray-dark">
              {galleryCopy.subtitle}
            </Paragraph>
          </div>
          <Link
            href="/gallery"
            className="btn-interactive inline-flex h-button shrink-0 items-center justify-center rounded-button border border-primary px-32 text-button font-medium text-primary hover:bg-primary hover:text-secondary"
          >
            {galleryCopy.galleryLink}
          </Link>
        </div>

        <GalleryGrid items={galleryPreview} />

        <div className="mt-48 flex flex-col gap-16 sm:flex-row sm:items-center">
          <a
            href={businessConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-interactive inline-flex h-button items-center justify-center gap-12 rounded-button bg-accent px-32 text-button font-medium text-primary hover:scale-[1.02] hover:brightness-95 focus-ring-on-accent motion-reduce:hover:scale-100"
          >
            <Instagram className="h-20 w-20" strokeWidth={1.5} aria-hidden />
            {galleryCopy.instagramCta}
          </a>
          <p className="text-small text-gray-dark">
            Follow {businessConfig.instagramHandle} for more recent work
          </p>
        </div>
      </AnimatedSection>
    </Section>
  );
}
