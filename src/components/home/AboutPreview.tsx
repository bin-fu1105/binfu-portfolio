import { education, profile } from "@/content/site";
import { SectionHeader } from "../ui/SectionHeader";

export function AboutPreview() {
  return (
    <section id="about" className="scroll-mt-20 py-16 sm:py-20">
      <div className="grid gap-10 sm:grid-cols-[minmax(0,0.4fr)_minmax(0,1fr)] sm:gap-16">
        <SectionHeader title="关于" />
        <div>
          <p className="max-w-xl text-base leading-7 text-ink-muted">
            {profile.positioning}
          </p>
          <ol className="mt-8 space-y-5">
            {education.map((item) => (
              <li key={`${item.school}-${item.degree}`}>
                <p className="text-sm text-ink-muted">{item.period}</p>
                <p className="mt-1 text-base text-ink">
                  {item.degree} · {item.school}
                </p>
                <p className="mt-1 text-sm text-ink-muted">{item.major}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
