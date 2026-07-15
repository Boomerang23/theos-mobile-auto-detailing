import { businessConfig } from "@/data/business";

export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

const contactEmail = businessConfig.email;

export const privacyCopy = {
  title: "Privacy Policy",
  description:
    "How Theo's Mobile Auto Detailing collects, uses, and protects your information.",
  lastUpdated: "July 13, 2026",
  sections: [
    {
      id: "intro",
      title: "Introduction",
      paragraphs: [
        `${businessConfig.name} ("we", "us", or "our") respects your privacy. This Privacy Policy explains what information we collect when you use our website, how we use it, and the choices you have.`,
        "By using this website, you agree to the practices described in this policy.",
      ],
    },
    {
      id: "collect",
      title: "Information We Collect",
      paragraphs: [
        "We may collect information you voluntarily provide through our contact and quote request forms, including:",
      ],
      bullets: [
        "Name",
        "Phone number",
        "Email address",
        "Vehicle type and service requested",
        "Preferred appointment date",
        "Any message or details you include",
      ],
    },
    {
      id: "automatic",
      title: "Automatically Collected Information",
      paragraphs: [
        "Like most websites, we may automatically receive limited technical information such as browser type, device type, general location derived from IP address, referring pages, and pages visited. If Google Analytics is enabled, that service may collect usage data according to Google's policies.",
      ],
    },
    {
      id: "use",
      title: "How We Use Information",
      paragraphs: ["We use the information we collect to:"],
      bullets: [
        "Respond to quote requests and service inquiries",
        "Communicate about appointments and services",
        "Improve our website and customer experience",
        "Protect against spam, fraud, and abuse",
        "Comply with legal obligations",
      ],
    },
    {
      id: "sharing",
      title: "How We Share Information",
      paragraphs: [
        "We do not sell your personal information. We may share information with trusted service providers who help us operate the website (for example, email delivery), solely to perform services on our behalf. We may also disclose information when required by law or to protect our rights and safety.",
      ],
    },
    {
      id: "retention",
      title: "Data Retention",
      paragraphs: [
        "We retain inquiry and contact information only as long as needed to respond to your request, provide services, and meet legal or business record requirements.",
      ],
    },
    {
      id: "security",
      title: "Security",
      paragraphs: [
        "We take reasonable administrative and technical measures to protect information submitted through this website. No method of transmission over the internet is completely secure, so we cannot guarantee absolute security.",
      ],
    },
    {
      id: "rights",
      title: "Your Choices",
      paragraphs: [
        `You may request access to, correction of, or deletion of personal information you have provided by contacting us at ${contactEmail} or by calling ${businessConfig.phoneFormatted}.`,
      ],
    },
    {
      id: "children",
      title: "Children's Privacy",
      paragraphs: [
        "This website is not directed to children under 13, and we do not knowingly collect personal information from children under 13.",
      ],
    },
    {
      id: "changes",
      title: "Changes to This Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time. The “Last updated” date at the top of this page reflects the latest revision. Continued use of the website after changes means you accept the updated policy.",
      ],
    },
    {
      id: "contact",
      title: "Contact Us",
      paragraphs: [
        `Questions about this Privacy Policy can be sent through our contact form, emailed to ${contactEmail}, or directed to ${businessConfig.name} at ${businessConfig.phoneFormatted}.`,
      ],
    },
  ] satisfies LegalSection[],
} as const;

export const termsCopy = {
  title: "Terms of Service",
  description:
    "The terms that apply when you use this website and request mobile detailing services.",
  lastUpdated: "July 13, 2026",
  sections: [
    {
      id: "agreement",
      title: "Agreement to Terms",
      paragraphs: [
        `These Terms of Service (“Terms”) govern your use of the website operated by ${businessConfig.name}. By accessing the site or requesting services, you agree to these Terms.`,
        "If you do not agree, please do not use the website or submit service requests.",
      ],
    },
    {
      id: "services",
      title: "Services",
      paragraphs: [
        `${businessConfig.name} provides mobile auto detailing and related services for cars, trucks, SUVs, boats, RVs, and fleet vehicles, subject to availability and service-area limitations.`,
        "Descriptions of services, packages, and pricing on this website are for general information. Final pricing, scope, and scheduling are confirmed directly with us.",
      ],
    },
    {
      id: "quotes",
      title: "Quotes and Appointments",
      paragraphs: [
        "Submitting a quote request through the website does not create a binding contract. We will review your request and confirm availability, pricing, and appointment details before work begins.",
        "You are responsible for providing accurate contact and vehicle information so we can prepare an appropriate quote.",
      ],
    },
    {
      id: "customer",
      title: "Customer Responsibilities",
      paragraphs: [
        "When we arrive for service, you agree to:",
      ],
      bullets: [
        "Provide safe, reasonable access to the vehicle and work area",
        "Disclose known damage, aftermarket finishes, or special care needs before work begins",
        "Remove valuables from the vehicle when possible",
        "Ensure any required water or power access is arranged if previously discussed",
      ],
    },
    {
      id: "payments",
      title: "Payments",
      paragraphs: [
        "Accepted payment methods and any deposits will be confirmed when your appointment is scheduled. Payment is due as agreed at the time of booking or completion of service unless otherwise arranged in writing.",
      ],
    },
    {
      id: "cancellations",
      title: "Cancellations and Weather",
      paragraphs: [
        "Please provide reasonable notice if you need to cancel or reschedule. Outdoor mobile detailing may be delayed or rescheduled due to weather or unsafe conditions. We will communicate changes as promptly as possible.",
      ],
    },
    {
      id: "website",
      title: "Website Use",
      paragraphs: [
        "You agree not to misuse the website, attempt to disrupt its operation, submit malicious or automated spam through forms, or use content from this site for unauthorized commercial purposes.",
      ],
    },
    {
      id: "ip",
      title: "Intellectual Property",
      paragraphs: [
        "Website content, branding, and materials are owned by or licensed to us and may not be copied or reused without permission, except for personal, non-commercial viewing.",
      ],
    },
    {
      id: "disclaimer",
      title: "Disclaimer",
      paragraphs: [
        "The website is provided “as is.” While we aim for accurate information, we do not warrant that all content is complete, current, or error-free. Service results can vary based on vehicle condition, materials, and environmental factors.",
      ],
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      paragraphs: [
        "To the fullest extent permitted by law, we are not liable for indirect, incidental, or consequential damages arising from website use or services, except where liability cannot be limited under applicable law. Our total liability related to any service engagement is limited to the amount paid for that specific service.",
      ],
    },
    {
      id: "governing",
      title: "Governing Law",
      paragraphs: [
        "These Terms are governed by the laws of the United States and the state in which services are primarily provided, without regard to conflict-of-law rules.",
      ],
    },
    {
      id: "changes-terms",
      title: "Changes to These Terms",
      paragraphs: [
        "We may update these Terms from time to time. The “Last updated” date shows the latest revision. Continued use of the website after changes constitutes acceptance of the updated Terms.",
      ],
    },
    {
      id: "contact-terms",
      title: "Contact",
      paragraphs: [
        `Questions about these Terms can be sent through our contact form, emailed to ${contactEmail}, or directed to ${businessConfig.name} at ${businessConfig.phoneFormatted}.`,
      ],
    },
  ] satisfies LegalSection[],
} as const;
