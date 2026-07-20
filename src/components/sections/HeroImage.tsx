import Image from "next/image";
import { cn } from "@/lib/utils";

type HeroImageProps = {
  className?: string;
};

/**
 * Full-bleed hero visual plane.
 * Uses `/images/hero.jpg` when `hasHeroPhoto` is true; otherwise a dark atmosphere fallback.
 */
export function HeroImage({ className }: HeroImageProps) {
  const hasHeroPhoto = true;

  return (
    <div
      className={cn(
        "absolute inset-0 -z-10 overflow-hidden bg-primary",
        className,
      )}
      aria-hidden={!hasHeroPhoto}
    >
      {hasHeroPhoto ? (
        <Image
          src="/images/hero.jpg"
          alt="Professional mobile auto detailing in Mukilteo, Washington"
          fill
          priority
          className="object-cover object-[center_40%]"
          sizes="100vw"
          quality={80}
        />
      ) : (
        <>
          <div className="absolute inset-0 bg-primary" />
          <div className="absolute inset-0 bg-dot-pattern opacity-[0.1]" />
          <div className="absolute -right-1/4 top-0 h-full w-3/4 bg-gradient-to-l from-accent/15 to-transparent" />
        </>
      )}
      {/* Keep the left/content side dark enough for white copy to stay readable on bright paint. */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary from-[12%] via-primary/92 via-[48%] to-primary/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-primary/70" />
      <div className="absolute inset-0 bg-primary/25" />
    </div>
  );
}
