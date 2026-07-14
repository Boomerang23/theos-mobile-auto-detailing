import Image from "next/image";
import Link from "next/link";
import { businessConfig } from "@/data/business";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  onNavigate?: () => void;
  /** Kept for API compatibility with navbar overlay state */
  overlay?: boolean;
  /** Optional size for denser layouts (mobile menu, etc.) */
  size?: "sm" | "md";
};

const sizeMap = {
  sm: { className: "h-48 w-48", px: 48 },
  md: { className: "h-56 w-56", px: 56 },
} as const;

export function Logo({
  className,
  onNavigate,
  size = "md",
}: LogoProps) {
  const dimensions = sizeMap[size];

  return (
    <Link
      href="/"
      onClick={onNavigate}
      className={cn(
        "inline-flex shrink-0 items-center rounded-full transition duration-DEFAULT hover:opacity-90",
        className,
      )}
      aria-label={`${businessConfig.name} home`}
    >
      <Image
        src="/images/logo.png"
        alt={businessConfig.name}
        width={dimensions.px}
        height={dimensions.px}
        className={cn(dimensions.className, "object-contain")}
        priority
        sizes="56px"
      />
    </Link>
  );
}
