type StatusBadgeProps = {
  children: React.ReactNode;
  tone?: "live" | "mock" | "state" | "error";
};

const toneClass: Record<NonNullable<StatusBadgeProps["tone"]>, string> = {
  live: "border-accent/20 bg-accent-soft text-accent",
  mock: "border-ink/15 bg-[#eceae4] text-ink",
  state: "border-line bg-paper text-ink-muted",
  error: "border-ink/25 bg-paper text-ink",
};

export function StatusBadge({ children, tone = "state" }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-sm border px-2.5 py-1 text-xs leading-5 ${toneClass[tone]}`}
    >
      {children}
    </span>
  );
}
