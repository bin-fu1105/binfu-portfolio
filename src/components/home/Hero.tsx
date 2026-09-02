import { education, profile } from "@/content/site";
import { TextLink } from "../ui/TextLink";

export function Hero() {
  const undergraduate = education.find((item) => item.degree === "本科");
  const master = education.find((item) => item.degree === "硕士");

  return (
    <section className="border-b border-line py-16 sm:py-24">
      <p className="text-sm text-ink-muted">{profile.identity}</p>
      <h1 className="mt-4 text-4xl font-medium tracking-tight text-ink sm:text-5xl md:text-6xl">
        {profile.name}
      </h1>
      <p className="mt-3 text-lg text-accent sm:text-xl">{profile.role}</p>
      <p className="mt-6 max-w-2xl text-base leading-7 text-ink-muted sm:text-lg sm:leading-8">
        {profile.positioning}
      </p>
      {undergraduate && master ? (
        <p className="mt-5 max-w-2xl text-sm leading-6 text-ink-muted">
          {undergraduate.school} {undergraduate.major}
          <span className="mx-2 text-line">→</span>
          {master.school} {master.major}
        </p>
      ) : null}
      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
        <a
          href="#work"
          className="inline-flex items-center rounded-sm bg-accent px-4 py-2.5 text-paper transition-colors hover:bg-accent-hover"
        >
          查看作品
        </a>
        <TextLink href={`mailto:${profile.email}`}>{profile.email}</TextLink>
        <TextLink href={profile.githubUrl} external>
          GitHub
        </TextLink>
      </div>
    </section>
  );
}
