import { z } from "zod";
import { vehicleTypes } from "@/data/contact";
import { services } from "@/data/services";

const serviceIds = services.map((service) => service.id) as [
  string,
  ...string[],
];

export const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z
    .string()
    .trim()
    .min(7, "Phone is required")
    .max(30)
    .regex(/^[\d\s()+.-]+$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email").max(254),
  vehicleType: z.enum(vehicleTypes, {
    required_error: "Vehicle Type is required",
  }),
  serviceNeeded: z.enum(serviceIds, {
    required_error: "Service Needed is required",
  }),
  preferredDate: z.string().trim().min(1, "Preferred Date is required"),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema> & {
  /** Honeypot field — not validated client-side */
  website?: string;
};

/** API payload: form fields + optional honeypot */
export const contactRequestSchema = contactFormSchema.extend({
  website: z.string().max(200).optional().default(""),
});
