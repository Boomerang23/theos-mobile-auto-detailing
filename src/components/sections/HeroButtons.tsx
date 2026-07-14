import Link from "next/link";
import { heroCopy } from "@/data/hero";
import { cn } from "@/lib/utils";

type HeroButtonsProps = {
  className?: string;
};

export function HeroButtons({ className }: HeroButtonsProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-16 sm:flex-row sm:items-center",
        className,
      )}
    >
      <Link
        href="/contact"
        className="inline-flex h-button items-center justify-center rounded-button bg-accent px-32 text-button font-medium text-primary transition duration-DEFAULT ease-DEFAULT hover:scale-[1.02] hover:brightness-95 focus-ring-on-dark"
      >
        {heroCopy.primaryButton}
      </Link>
      <Link
        href="/services"
        className="inline-flex h-button items-center justify-center rounded-button border border-secondary bg-transparent px-32 text-button font-medium text-secondary transition duration-DEFAULT ease-DEFAULT hover:bg-secondary hover:text-primary focus-ring-on-dark"
      >
        {heroCopy.secondaryButton}
      </Link>
    </div>
  );
}
