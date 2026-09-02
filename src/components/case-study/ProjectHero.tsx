import { Tag } from "../ui/Tag";
import { TextLink } from "../ui/TextLink";

type ProjectHeroProps = {
  backHref: string;
  backLabel: string;
  title: string;
  subtitle: string;
  description: string;
  tags: readonly string[];
  status: string;
};

export function ProjectHero({
  backHref,
  backLabel,
  title,
  subtitle,
  description,
  tags,
  status,
}: ProjectHeroProps) {
  return (
    <header className="border-b border-line py-12 sm:py-16">
      <TextLink href={backHref}>{backLabel}</TextLink>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Tag tone="accent">{status}</Tag>
      </div>
      <h1 className="mt-5 max-w-3xl text-3xl font-medium tracking-tight text-ink sm:text-4xl md:text-5xl">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-ink sm:text-xl sm:leading-8">
        {subtitle}
      </p>
      <p className="mt-5 max-w-2xl text-base leading-7 text-ink-muted">
        {description}
      </p>
      <ul className="mt-8 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li key={tag}>
            <Tag>{tag}</Tag>
          </li>
        ))}
      </ul>
    </header>
  );
}
