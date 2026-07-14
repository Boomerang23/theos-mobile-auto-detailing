import { cn } from "@/lib/utils";

type MapProps = {
  className?: string;
};

/**
 * Google Maps embed for the contact page.
 * Requires NEXT_PUBLIC_GOOGLE_MAPS_API_KEY and BUSINESS_ADDRESS.
 * Until configured, shows brand atmosphere placeholder.
 */
export function Map({ className }: MapProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const address = process.env.BUSINESS_ADDRESS;

  if (apiKey && address) {
    const query = encodeURIComponent(address);
    const src = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${query}`;

    return (
      <div
        className={cn(
          "overflow-hidden rounded-image border border-gray-light bg-gray-light",
          className,
        )}
      >
        <iframe
          title="Service area map"
          src={src}
          className="aspect-[16/10] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative aspect-[16/10] overflow-hidden rounded-image bg-primary",
        className,
      )}
      role="img"
      aria-label="Map placeholder. Google Maps configuration pending"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/30" />
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.08]" />
    </div>
  );
}
