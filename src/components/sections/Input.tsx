import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export function Input({
  label,
  error,
  id,
  className,
  required,
  ...props
}: InputProps) {
  const inputId = id ?? props.name;

  return (
    <div className="flex flex-col gap-8">
      <label htmlFor={inputId} className="text-small font-medium text-primary">
        {label}
        {required ? (
          <span className="text-error" aria-hidden>
            {" "}
            *
          </span>
        ) : null}
      </label>
      <input
        id={inputId}
        required={required}
        className={cn(
          "h-button w-full rounded-input border border-gray-dark/20 bg-secondary px-16 text-body text-primary transition duration-DEFAULT placeholder:text-gray-dark/60",
          error && "border-error",
          className,
        )}
        aria-invalid={Boolean(error)}
        aria-required={required || undefined}
        aria-describedby={error && inputId ? `${inputId}-error` : undefined}
        {...props}
      />
      {error ? (
        <p id={`${inputId}-error`} role="alert" className="text-small text-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}
