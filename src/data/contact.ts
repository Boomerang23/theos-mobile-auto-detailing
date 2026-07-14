import { services } from "@/data/services";

export const contactCopy = {
  title: "Book Your Detail",
  subtitle:
    "Tell us about your vehicle and we'll get back to you as soon as possible.",
  button: "Send Request",
  successMessage: "Thank you! Your request has been received.",
  errorMessage: "Something went wrong. Please try again.",
} as const;

export const serviceAreaCopy = {
  title: "Service Area",
  description:
    "Based in Mukilteo, Washington. Contact us to confirm availability in your area.",
} as const;

/** Vehicle types shown on the contact form */
export const vehicleTypes = ["Car", "Truck", "SUV", "Boat", "RV"] as const;

export const serviceNeededOptions = services.map((service) => ({
  value: service.id,
  label: service.title,
}));

export const contactFields = {
  name: "Name",
  phone: "Phone",
  email: "Email",
  vehicleType: "Vehicle Type",
  serviceNeeded: "Service Needed",
  preferredDate: "Preferred Date",
  message: "Message",
} as const;
