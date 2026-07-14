import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type PricingFeatureProps = {
  children: string;
  className?: string;
};

export function PricingFeature({ children, className }: PricingFeatureProps) {
  return (
    <li
      className={cn(
        "flex items-start gap-8 text-small text-primary",
        className,
      )}
    >
      <Check
        className="mt-[0.15em] h-16 w-16 shrink-0 text-accent"
        strokeWidth={1.5}
        aria-hidden
      />
      <span>{children}</span>
    </li>
  );
}
