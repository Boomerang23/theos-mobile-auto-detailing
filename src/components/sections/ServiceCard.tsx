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
      <Paragraph size="small" className="mt-8 text-gray-dark">
        {description}
      </Paragraph>
      {href ? (
        <span className="mt-24 inline-block text-small font-medium text-accent">
          Learn more
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn("block h-full focus-visible:rounded-card", className)}
      >
        <Card id={id} className="h-full">
          {content}
        </Card>
      </Link>
    );
  }

  return (
    <Card id={id} className={cn("h-full", className)}>
      {content}
    </Card>
  );
}
