"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/sections/Input";
import { Select } from "@/components/sections/Select";
import { SubmitButton } from "@/components/sections/SubmitButton";
import { Textarea } from "@/components/sections/Textarea";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import { SuccessMessage } from "@/components/ui/SuccessMessage";
import {
  contactCopy,
  contactFields,
  serviceNeededOptions,
  vehicleTypes,
} from "@/data/contact";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/contact-schema";
import { cn } from "@/lib/utils";

type ContactFormProps = {
  className?: string;
  compact?: boolean;
};

export function ContactForm({ className, compact = false }: ContactFormProps) {
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<keyof ContactFormValues, string>>
  >({});

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      vehicleType: undefined,
      serviceNeeded: undefined,
      preferredDate: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    setFormError(null);
    setFormSuccess(false);
    setFieldErrors({});

    const { website, ...fields } = values;
    const parsed = contactFormSchema.safeParse(fields);
    if (!parsed.success) {
      const nextErrors: Partial<Record<keyof ContactFormValues, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !(key in nextErrors)) {
          nextErrors[key as keyof ContactFormValues] = issue.message;
        }
      }
      setFieldErrors(nextErrors);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...parsed.data, website: website ?? "" }),
      });

      if (!response.ok) {
        setFormError(contactCopy.errorMessage);
        return;
      }

      setFormSuccess(true);
      reset();
    } catch {
      setFormError(contactCopy.errorMessage);
    }
  });

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={cn("relative flex flex-col gap-24", className)}
    >
      <div
        className={cn(
          "grid gap-24",
          !compact && "md:grid-cols-2",
        )}
      >
        <Input
          label={contactFields.name}
          autoComplete="name"
          required
          error={fieldErrors.name}
          {...register("name")}
        />
        <Input
          label={contactFields.phone}
          type="tel"
          autoComplete="tel"
          required
          error={fieldErrors.phone}
          {...register("phone")}
        />
        <Input
          label={contactFields.email}
          type="email"
          autoComplete="email"
          required
          error={fieldErrors.email}
          {...register("email")}
        />
        <Select
          label={contactFields.vehicleType}
          placeholder={contactFields.vehicleType}
          required
          error={fieldErrors.vehicleType}
          options={vehicleTypes.map((type) => ({
            value: type,
            label: type,
          }))}
          {...register("vehicleType")}
        />
        <Select
          label={contactFields.serviceNeeded}
          placeholder={contactFields.serviceNeeded}
          required
          error={fieldErrors.serviceNeeded}
          options={serviceNeededOptions}
          {...register("serviceNeeded")}
        />
        <Input
          label={contactFields.preferredDate}
          type="date"
          required
          error={fieldErrors.preferredDate}
          {...register("preferredDate")}
        />
      </div>

      <Textarea
        label={contactFields.message}
        error={fieldErrors.message}
        {...register("message")}
      />

      {/* Honeypot — hidden from assistive tech and sighted users */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
      >
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      {formSuccess ? (
        <SuccessMessage>{contactCopy.successMessage}</SuccessMessage>
      ) : null}
      {formError ? <ErrorMessage>{formError}</ErrorMessage> : null}

      <SubmitButton loading={isSubmitting}>{contactCopy.button}</SubmitButton>
    </form>
  );
}
