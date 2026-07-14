import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import { Building2, Bus, Car, Ship, Sofa, Sparkles, Star } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { CTAButton } from "@/components/layout/CTAButton";
import { PageHeader } from "@/components/layout/PageHeader";
import { ServiceFeature } from "@/components/sections/ServiceFeature";
import { ServiceIcon } from "@/components/sections/ServiceIcon";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { serviceCategories, services } from "@/data/services";
import { pageGraphSchema, serviceSchemas } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

const categoryIcons: Record<string, LucideIcon> = {
  Car,
  Sofa,
  Sparkles,
  Bus,
  Ship,
  Building2,
  Star,
};

export const metadata: Metadata = buildPageMetadata({
  title: "Services",
  description:
    "Interior detailing, exterior detailing, full detail, engine bay cleaning, and mobile detailing in Mukilteo, WA.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        id="ld-services"
        data={pageGraphSchema(
          [
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ],
          serviceSchemas(),
        )}
      />
      <PageHeader
        title="Services"
        description="Interior detailing, exterior detailing, full detail, engine bay cleaning, and mobile detailing — delivered to your location."
      />

      <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop">
        <Container>
          <ServicesGrid services={services} />

          <div className="mt-48">
            <CTAButton />
          </div>
        </Container>
      </section>

      <section className="bg-gray-light py-section-mobile md:py-section-tablet lg:py-section-desktop">
        <Container>
          <div className="grid gap-gap lg:grid-cols-2">
            {serviceCategories.map((category) => {
              const Icon = categoryIcons[category.icon] ?? Sparkles;

              return (
                <Card key={category.id}>
                  <ServiceIcon icon={Icon} label={category.title} />
                  <Heading as={3} size="card" className="mt-24">
                    {category.title}
                  </Heading>
                  <ul className="mt-24 flex flex-col gap-12">
                    {category.services.map((item) => (
                      <ServiceFeature key={item.name}>
                        {item.name}
                      </ServiceFeature>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>

          <div className="mt-48">
            <CTAButton />
          </div>
        </Container>
      </section>
    </>
  );
}
