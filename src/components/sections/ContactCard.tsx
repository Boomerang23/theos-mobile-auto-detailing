import { Instagram, Mail, Phone } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { businessConfig } from "@/data/business";
import { footerCopy } from "@/data/navigation";
import { cn } from "@/lib/utils";

type ContactCardProps = {
  className?: string;
};

export function ContactCard({ className }: ContactCardProps) {
  const contactEmail = businessConfig.email;
  const businessAddress = process.env.BUSINESS_ADDRESS;

  return (
    <Card className={cn("flex flex-col gap-24", className)}>
      <Heading as={3} size="card">
        {businessConfig.name}
      </Heading>
      <Paragraph size="small" className="text-accent">
        {businessConfig.tagline}
      </Paragraph>
      <Paragraph size="small" className="text-gray-dark">
        {businessConfig.location}
      </Paragraph>

      <div className="flex flex-col gap-16">
        <a
          href={`tel:${businessConfig.phone}`}
          className="inline-flex items-center gap-12 text-body text-primary transition duration-DEFAULT hover:text-accent"
        >
          <Phone className="h-24 w-24 shrink-0" strokeWidth={1.5} aria-hidden />
          {businessConfig.phoneFormatted}
        </a>

        {contactEmail ? (
          <a
            href={`mailto:${contactEmail}`}
            className="inline-flex items-center gap-12 text-body text-primary transition duration-DEFAULT hover:text-accent"
          >
            <Mail className="h-24 w-24 shrink-0" strokeWidth={1.5} aria-hidden />
            {contactEmail}
          </a>
        ) : null}

        <a
          href={businessConfig.socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-12 text-body text-primary transition duration-DEFAULT hover:text-accent"
        >
          <Instagram
            className="h-24 w-24 shrink-0"
            strokeWidth={1.5}
            aria-hidden
          />
          {businessConfig.instagramHandle}
        </a>
      </div>

      {businessAddress ? (
        <Paragraph size="small" className="text-gray-dark">
          {businessAddress}
        </Paragraph>
      ) : null}

      {businessConfig.hours ? (
        <div>
          <Paragraph className="font-medium">{footerCopy.businessHours}</Paragraph>
          <Paragraph size="small" className="mt-8 text-gray-dark">
            {businessConfig.hours}
          </Paragraph>
        </div>
      ) : null}
    </Card>
  );
}
