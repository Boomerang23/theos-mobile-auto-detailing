import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ServiceIcon } from "@/components/sections/ServiceIcon";
import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  id?: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
  className?: string;
};

export function ServiceCard({
  id,
  title,
  description,
  icon,
  href,
  className,
}: ServiceCardProps) {
  const content = (
    <>
      <ServiceIcon icon={icon} label={title} />
      <Heading as={3} size="card" className="mt-24">
        {title}
      </Heading>
      <Paragraph size="small" className="mt-8 flex-1 text-gray-dark">
        {description}
      </Paragraph>
      {href ? (
        <span className="mt-24 inline-flex items-center text-small font-medium text-accent transition duration-DEFAULT group-hover:underline group-hover:underline-offset-4">
          Learn more
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          "group block h-full rounded-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
          className,
        )}
      >
        <Card id={id} className="flex h-full flex-col">
          {content}
        </Card>
      </Link>
    );
  }

  return (
    <Card id={id} className={cn("flex h-full flex-col", className)}>
      {content}
    </Card>
  );
}
