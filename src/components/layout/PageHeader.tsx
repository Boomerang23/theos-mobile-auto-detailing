import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  description?: string;
  className?: string;
};

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <header
      className={cn(
        "bg-gray-light py-section-mobile md:py-section-tablet",
        className,
      )}
    >
      <Container>
        <Heading as={1} size="section">
          {title}
        </Heading>
        {description ? (
          <Paragraph className="mt-16 max-w-3xl text-gray-dark">
            {description}
          </Paragraph>
        ) : null}
      </Container>
    </header>
  );
}
