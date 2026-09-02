type CaseStudySectionProps = {
  id?: string;
  title: string;
  emphasize?: boolean;
  children: React.ReactNode;
};

export function CaseStudySection({
  id,
  title,
  emphasize = false,
  children,
}: CaseStudySectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 border-b border-line py-14 last:border-b-0 sm:py-20 ${
        emphasize ? "pl-5 sm:pl-8" : ""
      }`}
    >
      <h2 className="max-w-2xl text-xl font-medium tracking-tight text-ink sm:text-2xl">
        {title}
      </h2>
      <div className="mt-6 sm:mt-8">{children}</div>
    </section>
  );
}
