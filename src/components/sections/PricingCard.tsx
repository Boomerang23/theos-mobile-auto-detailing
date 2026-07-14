import { CTAButton } from "@/components/layout/CTAButton";
import { PricingBadge } from "@/components/sections/PricingBadge";
import { PricingFeature } from "@/components/sections/PricingFeature";
import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import type { PricingTier } from "@/data/packages";
import { cn } from "@/lib/utils";

type PricingCardProps = {
  package: PricingTier;
  /** Limit features on homepage preview; omit for full list */
  featureLimit?: number;
  showNotes?: boolean;
  className?: string;
};

function formatPrice(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function PricingCard({
  package: pkg,
  featureLimit,
  showNotes = false,
  className,
}: PricingCardProps) {
  const features =
    typeof featureLimit === "number"
      ? pkg.features.slice(0, featureLimit)
      : pkg.features;

  return (
    <Card id={pkg.id} className={cn("flex h-full flex-col", className)}>
      <div className="flex flex-wrap items-center gap-8">
        <PricingBadge>{pkg.duration}</PricingBadge>
      </div>

      <Heading as={3} size="card" className="mt-24">
        {pkg.name}
      </Heading>

      <Paragraph size="small" className="mt-8 text-gray-dark">
        {pkg.description}
      </Paragraph>

      <div className="mt-32 grid grid-cols-2 gap-16">
        <div>
          <Paragraph size="small" className="text-gray-dark">
            Sedan
          </Paragraph>
          <p className="mt-8 font-heading text-card-title text-primary">
            {formatPrice(pkg.prices.sedan)}
          </p>
        </div>
        <div>
          <Paragraph size="small" className="text-gray-dark">
            Larger
          </Paragraph>
          <p className="mt-8 font-heading text-card-title text-primary">
            {formatPrice(pkg.prices.larger)}
          </p>
        </div>
      </div>

      <ul className="mt-32 flex flex-1 flex-col gap-12">
        {features.map((feature) => (
          <PricingFeature key={feature}>{feature}</PricingFeature>
        ))}
      </ul>

      {showNotes && pkg.notes.length > 0 ? (
        <ul className="mt-24 flex flex-col gap-8 border-t border-gray-light pt-24">
          {pkg.notes.map((note) => (
            <li key={note}>
              <Paragraph size="small" className="text-gray-dark">
                {note}
              </Paragraph>
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-32">
        <CTAButton className="w-full" />
      </div>
    </Card>
  );
}
