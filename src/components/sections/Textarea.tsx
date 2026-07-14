import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
};

export function Textarea({
  label,
  error,
  id,
  className,
  rows = 5,
  ...props
}: TextareaProps) {
  const textareaId = id ?? props.name;

  return (
    <div className="flex flex-col gap-8">
      <label
        htmlFor={textareaId}
        className="text-small font-medium text-primary"
      >
        {label}
      </label>
      <textarea
        id={textareaId}
        rows={rows}
        className={cn(
          "field-control w-full rounded-input px-16 py-16",
          error &&
            "border-error hover:border-error focus-visible:border-error",
          className,
        )}
        aria-invalid={Boolean(error)}
        aria-describedby={
          error && textareaId ? `${textareaId}-error` : undefined
        }
        {...props}
      />
      {error ? (
        <p
          id={`${textareaId}-error`}
          role="alert"
          className="text-small text-error"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
