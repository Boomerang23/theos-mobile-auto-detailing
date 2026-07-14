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
        "flex w-full flex-col gap-16 sm:w-auto sm:flex-row sm:items-center",
        className,
      )}
    >
      <Link
        href="/contact"
        className="btn-interactive inline-flex h-button w-full items-center justify-center rounded-button bg-accent px-32 text-button font-medium text-primary hover:scale-[1.02] hover:brightness-95 focus-ring-on-dark focus-ring-on-accent motion-reduce:hover:scale-100 sm:w-auto"
      >
        {heroCopy.primaryButton}
      </Link>
      <Link
        href="/services"
        className="btn-interactive inline-flex h-button w-full items-center justify-center rounded-button border border-secondary bg-transparent px-32 text-button font-medium text-secondary hover:bg-secondary hover:text-primary focus-ring-on-dark motion-reduce:hover:scale-100 sm:w-auto"
      >
        {heroCopy.secondaryButton}
      </Link>
    </div>
  );
}
