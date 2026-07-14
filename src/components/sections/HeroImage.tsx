import Image from "next/image";
import { cn } from "@/lib/utils";

type HeroImageProps = {
  className?: string;
};

/**
 * Full-bleed hero visual plane.
 * Photography path reserved at `/images/hero.jpg`.
 * Until the asset ships, a dark atmosphere keeps LCP stable without a video or 3D effect.
 */
export function HeroImage({ className }: HeroImageProps) {
  const hasHeroPhoto = false;

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
          className="object-cover"
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
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/88 to-primary/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/55" />
    </div>
  );
}
