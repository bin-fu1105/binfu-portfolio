import Link from "next/link";
import type { AiProject, DesignProject, ExperienceProject } from "@/content/site";
import { Tag } from "../ui/Tag";

function FlowList({ steps }: { steps: string[] }) {
  return (
    <ol className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink">
      {steps.map((step, stepIndex) => (
        <li key={step} className="flex items-center gap-2">
          <span>{step}</span>
          {stepIndex < steps.length - 1 ? (
            <span aria-hidden className="text-ink-muted">
              →
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

type FeaturedProjectCardProps = {
  project: AiProject;
  index: number;
};

const featuredFrameClass =
  "border-t border-line py-8 first:border-t-0 first:pt-0 sm:py-10 sm:first:pt-0";

export function FeaturedProjectCard({
  project,
  index,
}: FeaturedProjectCardProps) {
  const body = (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs tracking-wide text-ink-muted">
          {String(index + 1).padStart(2, "0")}
        </p>
        {project.status ? <Tag tone="accent">{project.status}</Tag> : null}
      </div>
      <h3
        className={`mt-4 text-lg font-medium tracking-tight text-ink sm:text-xl ${
          project.href ? "transition-colors group-hover:text-accent" : ""
        }`}
      >
        {project.title}
      </h3>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-ink-muted sm:text-base sm:leading-7">
        {project.problem}
      </p>

      {project.flow ? (
        <div className="mt-5">
          <p className="text-xs text-ink-muted">产品流程</p>
          <FlowList steps={project.flow} />
        </div>
      ) : null}

      {project.stack ? (
        <p className="mt-4 text-sm text-ink-muted">{project.stack}</p>
      ) : null}

      {project.notes?.map((note) => (
        <p key={note} className="mt-2 max-w-3xl text-sm leading-6 text-ink-muted">
          {note}
        </p>
      ))}

      {project.testSummary ? (
        <p className="mt-4 text-sm leading-6 text-ink-muted">
          测试对象：{project.testSummary}
        </p>
      ) : null}

      {project.feedback && project.feedback.length > 0 ? (
        <div className="mt-4">
          <p className="text-xs text-ink-muted">主要反馈</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-ink-muted">
            {project.feedback.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );

  if (project.href) {
    return (
      <Link
        href={project.href}
        className={`group block ${featuredFrameClass}`}
        aria-label={`${project.title}，查看案例`}
      >
        <article>{body}</article>
      </Link>
    );
  }

  return <article className={featuredFrameClass}>{body}</article>;
}

type CompactProjectCardProps = {
  project: DesignProject;
};

function FoundationImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <figure className="min-w-0 w-full">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={2400}
        height={848}
        loading="lazy"
        decoding="async"
        className="block h-auto w-full max-w-full"
      />
    </figure>
  );
}

export function CompactProjectCard({ project }: CompactProjectCardProps) {
  const hero =
    project.images.find((image) => image.hero) ?? project.images[0];
  const supporting = project.images.filter((image) => image !== hero);

  return (
    <article className="border-t border-line py-8 first:border-t-0 first:pt-0 sm:py-10">
      <h3 className="text-base font-medium tracking-tight text-ink sm:text-lg">
        {project.title}
      </h3>
      {project.subtitle ? (
        <p className="mt-1 text-sm text-ink-muted">{project.subtitle}</p>
      ) : null}
      <div className="mt-3 flex flex-wrap gap-2">
        {project.directions.map((direction) => (
          <Tag key={direction}>{direction}</Tag>
        ))}
      </div>

      <div className="mt-5 min-w-0 space-y-4 sm:mt-6 sm:space-y-5">
        <FoundationImage src={hero.src} alt={hero.alt} />
        {supporting.length > 0 ? (
          <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {supporting.map((image) => (
              <FoundationImage
                key={image.src}
                src={image.src}
                alt={image.alt}
              />
            ))}
          </div>
        ) : null}
      </div>

      <p className="mt-5 max-w-3xl text-sm leading-7 text-ink-muted">
        {project.description}
      </p>
    </article>
  );
}

type ExperienceProjectCardProps = {
  project: ExperienceProject;
  index?: number;
};

export function ExperienceProjectCard({
  project,
  index = 0,
}: ExperienceProjectCardProps) {
  return (
    <Link
      href={project.href}
      className="group block border-t border-line py-8 first:border-t-0 first:pt-0 sm:py-10 sm:first:pt-0"
      aria-label={`${project.title}，查看案例`}
    >
      <article>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs tracking-wide text-ink-muted">
            {String(index + 1).padStart(2, "0")}
          </p>
          <Tag tone="accent">{project.status}</Tag>
        </div>
        <h3 className="mt-4 text-lg font-medium tracking-tight text-ink transition-colors group-hover:text-accent sm:text-xl">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-ink-muted">{project.subtitle}</p>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-ink-muted sm:text-base sm:leading-7">
          {project.problem}
        </p>
        <div className="mt-5">
          <p className="text-xs text-ink-muted">{project.flowLabel}</p>
          <FlowList steps={project.flow} />
        </div>
        <p className="mt-4 text-sm text-ink-muted">{project.stack}</p>
        <figure className="mt-6 min-w-0 w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image.src}
            alt={project.image.alt}
            width={2482}
            height={1300}
            loading="lazy"
            decoding="async"
            className="block h-auto w-full max-w-full"
          />
        </figure>
      </article>
    </Link>
  );
}
