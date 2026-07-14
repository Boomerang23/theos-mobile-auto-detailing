import { ServiceCard } from "@/components/sections/ServiceCard";
import type { ServiceOffering } from "@/data/services";
import { cn } from "@/lib/utils";

type ServicesGridProps = {
  services: readonly ServiceOffering[];
  linkToServicesPage?: boolean;
  className?: string;
};

export function ServicesGrid({
  services,
  linkToServicesPage = false,
  className,
}: ServicesGridProps) {
  return (
    <div
      className={cn("grid gap-gap sm:grid-cols-2 lg:grid-cols-3", className)}
    >
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          id={service.id}
          title={service.title}
          description={service.description}
          icon={service.icon}
          href={linkToServicesPage ? `/services#${service.id}` : undefined}
        />
      ))}
    </div>
  );
}
