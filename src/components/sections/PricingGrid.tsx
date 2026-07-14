import { PricingCard } from "@/components/sections/PricingCard";
import type { PricingTier } from "@/data/packages";
import { cn } from "@/lib/utils";

type PricingGridProps = {
  packages: readonly PricingTier[];
  featureLimit?: number;
  showNotes?: boolean;
  className?: string;
};

export function PricingGrid({
  packages,
  featureLimit,
  showNotes = false,
  className,
}: PricingGridProps) {
  return (
    <div
      className={cn("grid gap-gap lg:grid-cols-3", className)}
    >
      {packages.map((pkg) => (
        <PricingCard
          key={pkg.id}
          package={pkg}
          featureLimit={featureLimit}
          showNotes={showNotes}
        />
      ))}
    </div>
  );
}
