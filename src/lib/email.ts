import { Resend } from "resend";
import { businessConfig } from "@/data/business";
import { contactFields } from "@/data/contact";
import { services } from "@/data/services";
import type { ContactFormValues } from "@/lib/contact-schema";

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(apiKey);
}

function getBusinessEmail() {
  return businessConfig.email;
}

function getFromAddress() {
  const configured = process.env.RESEND_FROM_EMAIL?.trim();
  if (configured) return configured;

  const businessName =
    process.env.BUSINESS_NAME?.trim() || businessConfig.name;
  // Resend test sender until a verified domain is configured.
  return `${businessName} <onboarding@resend.dev>`;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function serviceLabel(serviceId: string): string {
  return services.find((service) => service.id === serviceId)?.title ?? serviceId;
}

function formatPreferredDate(value: string): string {
  const date = new Date(`${value}T12:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function buildBusinessNotificationHtml(data: ContactFormValues): string {
  const rows: Array<[string, string]> = [
    [contactFields.name, data.name],
    [contactFields.phone, data.phone],
    [contactFields.email, data.email],
    [contactFields.vehicleType, data.vehicleType],
    [contactFields.serviceNeeded, serviceLabel(data.serviceNeeded)],
    [contactFields.preferredDate, formatPreferredDate(data.preferredDate)],
    [contactFields.message, data.message?.trim() || "—"],
  ];

  const body = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;font-weight:600;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:8px 12px;">${escapeHtml(value).replaceAll("\n", "<br />")}</td></tr>`,
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;color:#111;line-height:1.5;">
      <h1 style="font-size:20px;margin:0 0 16px;">New quote request</h1>
      <table style="border-collapse:collapse;width:100%;max-width:560px;">${body}</table>
    </div>
  `;
}

function buildCustomerConfirmationHtml(data: ContactFormValues): string {
  const businessName =
    process.env.BUSINESS_NAME?.trim() || businessConfig.name;
  const phone =
    process.env.BUSINESS_PHONE?.trim() || businessConfig.phoneFormatted;

  return `
    <div style="font-family:Arial,sans-serif;color:#111;line-height:1.5;">
      <h1 style="font-size:20px;margin:0 0 16px;">We received your request</h1>
      <p>Hi ${escapeHtml(data.name)},</p>
      <p>
        Thanks for contacting ${escapeHtml(businessName)}. We received your quote
        request for <strong>${escapeHtml(serviceLabel(data.serviceNeeded))}</strong>
        (${escapeHtml(data.vehicleType)})
        preferred on <strong>${escapeHtml(formatPreferredDate(data.preferredDate))}</strong>.
      </p>
      <p>We'll get back to you as soon as possible.</p>
      <p style="margin-top:24px;">
        ${escapeHtml(businessName)}<br />
        ${escapeHtml(phone)}
      </p>
    </div>
  `;
}

export async function sendContactEmails(data: ContactFormValues) {
  const resend = getResendClient();
  const toBusiness = getBusinessEmail();
  const from = getFromAddress();
  const businessName =
    process.env.BUSINESS_NAME?.trim() || businessConfig.name;

  const notification = await resend.emails.send({
    from,
    to: toBusiness,
    replyTo: data.email,
    subject: `New quote request from ${data.name}`,
    html: buildBusinessNotificationHtml(data),
  });

  if (notification.error) {
    throw new Error(notification.error.message);
  }

  const confirmation = await resend.emails.send({
    from,
    to: data.email,
    subject: `Thanks for contacting ${businessName}`,
    html: buildCustomerConfirmationHtml(data),
  });

  if (confirmation.error) {
    throw new Error(confirmation.error.message);
  }

  return {
    notificationId: notification.data?.id,
    confirmationId: confirmation.data?.id,
  };
}
