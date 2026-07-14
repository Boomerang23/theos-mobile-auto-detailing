import { ContactCard } from "@/components/sections/ContactCard";
import { Paragraph } from "@/components/ui/Paragraph";
import { businessConfig } from "@/data/business";
import { serviceAreaCopy } from "@/data/contact";
import { cn } from "@/lib/utils";

type ServiceAreaProps = {
  className?: string;
  showContactCard?: boolean;
};

export function ServiceArea({
  className,
  showContactCard = false,
}: ServiceAreaProps) {
  return (
    <div className={cn("grid gap-gap lg:grid-cols-2", className)}>
      <div>
        <Paragraph className="text-gray-dark">
          {serviceAreaCopy.description}
        </Paragraph>
        <Paragraph size="small" className="mt-16 text-gray-dark">
          {serviceAreaCopy.coverageNote}
        </Paragraph>
        <Paragraph size="small" className="mt-24 font-medium text-primary">
          {businessConfig.location}
        </Paragraph>
        <Paragraph size="small" className="mt-8 text-gray-dark">
          Follow {businessConfig.instagramHandle} ·{" "}
          <a
            href={businessConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent transition duration-DEFAULT hover:brightness-110"
          >
            Instagram
          </a>
        </Paragraph>
      </div>

      {showContactCard ? <ContactCard /> : null}
    </div>
  );
}
