type DecisionCardProps = {
  index: number;
  title: string;
  children: React.ReactNode;
};

export function DecisionCard({ index, title, children }: DecisionCardProps) {
  return (
    <article className="border-t border-line pt-6 lg:border lg:border-line lg:p-6 lg:pt-6">
      <p className="text-xs tracking-wide text-ink-muted">
        {String(index).padStart(2, "0")}
      </p>
      <h3 className="mt-3 text-base font-medium tracking-tight text-ink">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-ink-muted">{children}</p>
    </article>
  );
}
