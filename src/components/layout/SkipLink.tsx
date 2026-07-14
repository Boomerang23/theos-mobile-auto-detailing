import Link from "next/link";

/** First focusable control — jumps keyboard users past chrome to main content. */
export function SkipLink() {
  return (
    <Link
      href="#main-content"
      className="bg-accent text-primary focus:outline-primary sr-only focus:not-sr-only focus:fixed focus:left-16 focus:top-16 focus:z-[100] focus:rounded-button focus:px-24 focus:py-16 focus:text-button focus:font-medium focus:shadow-soft-hover focus:outline focus:outline-2 focus:outline-offset-2"
    >
      Skip to main content
    </Link>
  );
}
