type TagProps = {
  children: React.ReactNode;
  tone?: "default" | "accent";
};

export function Tag({ children, tone = "default" }: TagProps) {
  const styles =
    tone === "accent"
      ? "border-accent/20 bg-accent-soft text-accent"
      : "border-line bg-paper text-ink-muted";

  return (
    <span
      className={`inline-flex items-center rounded-sm border px-2 py-0.5 text-xs leading-5 ${styles}`}
    >
      {children}
    </span>
  );
}
