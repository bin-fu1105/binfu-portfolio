import { positioningPoints } from "@/content/site";
import { SectionHeader } from "../ui/SectionHeader";

export function Positioning() {
  return (
    <section className="border-b border-line py-16 sm:py-20">
      <SectionHeader title="为什么适合" />
      <ol className="grid gap-8 sm:grid-cols-3 sm:gap-10">
        {positioningPoints.map((point, index) => (
          <li key={point.title}>
            <p className="text-xs tracking-wide text-ink-muted">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 text-base font-medium text-ink">{point.title}</h3>
            <p className="mt-2 text-sm leading-6 text-ink-muted">{point.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
