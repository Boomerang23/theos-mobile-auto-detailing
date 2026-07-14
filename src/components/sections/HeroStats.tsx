import { cn } from "@/lib/utils";

export type HeroStat = {
  value: string;
  label: string;
};

type HeroStatsProps = {
  stats: readonly HeroStat[];
  className?: string;
};

export function HeroStats({ stats, className }: HeroStatsProps) {
  if (stats.length === 0) {
    return null;
  }

  return (
    <dl
      className={cn(
        "mt-48 grid grid-cols-2 gap-24 sm:grid-cols-3 sm:gap-32",
        className,
      )}
    >
      {stats.map((stat) => (
        <div key={stat.label}>
          <dt className="text-small text-secondary/70">{stat.label}</dt>
          <dd className="mt-8 font-heading text-card-title font-bold text-secondary">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
