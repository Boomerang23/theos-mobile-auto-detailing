import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { HeroButtons } from "@/components/sections/HeroButtons";
import { businessConfig } from "@/data/business";
import { heroCopy } from "@/data/hero";
import { cn } from "@/lib/utils";

type HeroContentProps = {
  className?: string;
};

export function HeroContent({ className }: HeroContentProps) {
  return (
    <div className={cn("relative z-10 max-w-3xl", className)}>
      <p className="mb-16 font-heading text-small font-semibold tracking-[0.04em] text-accent">
        {businessConfig.name} · {businessConfig.locationShort}
      </p>
      <Heading as={1} size="hero" id="hero-heading" className="text-secondary">
        {heroCopy.headline}
      </Heading>
      <Paragraph className="mt-24 max-w-2xl text-secondary/90">
        {heroCopy.subheadline}
      </Paragraph>
      <HeroButtons className="mt-32" />
    </div>
  );
}
