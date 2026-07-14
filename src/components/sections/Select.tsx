import type { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: readonly SelectOption[];
  placeholder?: string;
  error?: string;
};

export function Select({
  label,
  options,
  placeholder,
  error,
  id,
  className,
  required,
  ...props
}: SelectProps) {
  const selectId = id ?? props.name;

  return (
    <div className="flex flex-col gap-8">
      <label htmlFor={selectId} className="text-small font-medium text-primary">
        {label}
        {required ? (
          <span className="text-error" aria-hidden>
            {" "}
            *
          </span>
        ) : null}
      </label>
      <select
        id={selectId}
        required={required}
        className={cn(
          "field-control h-button w-full rounded-input px-16",
          error &&
            "border-error hover:border-error focus-visible:border-error",
          className,
        )}
        aria-invalid={Boolean(error)}
        aria-required={required || undefined}
        aria-describedby={error && selectId ? `${selectId}-error` : undefined}
        {...props}
      >
        {placeholder ? (
          <option value="" disabled>
            {placeholder}
          </option>
        ) : null}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error ? (
        <p
          id={`${selectId}-error`}
          role="alert"
          className="text-small text-error"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
