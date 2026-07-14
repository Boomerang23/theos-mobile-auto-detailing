import { Container } from "@/components/layout/Container";
import { HeroContent } from "@/components/sections/HeroContent";
import { HeroImage } from "@/components/sections/HeroImage";
import { HeroStats } from "@/components/sections/HeroStats";
import type { HeroStat } from "@/components/sections/HeroStats";
import { cn } from "@/lib/utils";

type HeroSectionProps = {
  className?: string;
  stats?: readonly HeroStat[];
};

export function HeroSection({ className, stats = [] }: HeroSectionProps) {
  return (
    <section
      aria-labelledby="hero-heading"
      className={cn(
        "relative flex min-h-[100svh] items-center",
        className,
      )}
    >
      <HeroImage />
      <Container className="relative z-10 py-section-mobile md:py-section-tablet lg:py-section-desktop">
        <HeroContent />
        <HeroStats stats={stats} />
      </Container>
    </section>
  );
}
