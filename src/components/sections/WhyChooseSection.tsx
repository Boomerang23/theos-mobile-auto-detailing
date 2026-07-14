import type { LucideIcon } from "lucide-react";
import { Clock, Eye, Home, MapPin, Sparkles, Wrench } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { IconBox } from "@/components/ui/IconBox";
import { Paragraph } from "@/components/ui/Paragraph";
import { aboutCopy, aboutValues } from "@/data/about";

const valueIcons: Record<string, LucideIcon> = {
  MapPin,
  Eye,
  Wrench,
  Clock,
  Sparkles,
  Home,
};

export function WhyChooseSection() {
  return (
    <Section
      id="why-choose"
      ariaLabelledby="why-choose-heading"
      className="bg-primary text-secondary"
      deferPaint
    >
      <AnimatedSection>
        <Heading as={2} id="why-choose-heading" className="text-secondary">
          {aboutCopy.valuesTitle}
        </Heading>
        <Paragraph className="mt-16 max-w-3xl text-secondary/80">
          {aboutCopy.valuesDescription}
        </Paragraph>

        <ul className="mt-48 grid list-none gap-gap sm:grid-cols-2 lg:grid-cols-3">
          {aboutValues.map((value) => {
            const Icon = valueIcons[value.icon] ?? Sparkles;

            return (
              <li key={value.id}>
                <Card className="h-full border border-secondary/10 bg-primary shadow-none hover:translate-y-0 hover:shadow-none">
                  <IconBox
                    icon={Icon}
                    label={value.title}
                    className="bg-secondary/10 text-accent"
                  />
                  <Heading as={3} size="card" className="mt-24 text-secondary">
                    {value.title}
                  </Heading>
                  <Paragraph size="small" className="mt-16 text-secondary/75">
                    {value.description}
                  </Paragraph>
                </Card>
              </li>
            );
          })}
        </ul>
      </AnimatedSection>
    </Section>
  );
}
