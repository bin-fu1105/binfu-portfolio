import { SectionHeader } from "../ui/SectionHeader";

type ProjectSectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function ProjectSection({
  id,
  title,
  children,
  className = "",
}: ProjectSectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 border-b border-line py-16 sm:py-20 ${className}`}>
      <SectionHeader title={title} />
      {children}
    </section>
  );
}
