import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTAButton } from "@/components/layout/CTAButton";
import { Section } from "@/components/layout/Section";
import { Accordion } from "@/components/sections/Accordion";
import { AccordionItem } from "@/components/sections/AccordionItem";
import { Heading } from "@/components/ui/Heading";
import { faqCopy, faqItems } from "@/data/faq";

export function FAQSection() {
  const answeredItems = faqItems.filter((item) => item.answer.trim().length > 0);

  return (
    <Section
      id="faq"
      ariaLabelledby="faq-heading"
      className="bg-gray-light"
      deferPaint
    >
      <AnimatedSection>
        <Heading as={2} id="faq-heading">
          {faqCopy.title}
        </Heading>

        {answeredItems.length > 0 ? (
          <Accordion className="mt-48 rounded-card bg-secondary px-32 shadow-soft">
            {answeredItems.map((item) => (
              <AccordionItem key={item.id} id={item.id} title={item.question}>
                {item.answer}
              </AccordionItem>
            ))}
          </Accordion>
        ) : null}

        <div className="mt-48">
          <CTAButton />
        </div>
      </AnimatedSection>
    </Section>
  );
}
