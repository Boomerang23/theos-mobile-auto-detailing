import Link from "next/link";
import { ctaCopy } from "@/data/navigation";
import { cn } from "@/lib/utils";

type CTAButtonProps = {
  className?: string;
  onNavigate?: () => void;
};

export function CTAButton({ className, onNavigate }: CTAButtonProps) {
  return (
    <Link
      href="/contact"
      onClick={onNavigate}
      className={cn(
        "inline-flex h-button items-center justify-center rounded-button bg-accent px-32 text-button font-medium text-primary transition duration-DEFAULT ease-DEFAULT hover:scale-[1.02] hover:brightness-95",
        className,
      )}
    >
      <span className="max-[380px]:hidden">{ctaCopy.getQuote}</span>
      <span className="min-[381px]:hidden">Book</span>
    </Link>
  );
}
