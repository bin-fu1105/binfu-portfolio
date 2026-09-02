type SectionHeaderProps = {
  title: string;
  description?: string;
};

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="mb-8 max-w-2xl sm:mb-10">
      <h2 className="text-xl font-medium tracking-tight text-ink sm:text-2xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-7 text-ink-muted">{description}</p>
      ) : null}
    </div>
  );
}
