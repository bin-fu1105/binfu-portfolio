import { publicFileExists } from "@/lib/public-file";
import { TextLink } from "../ui/TextLink";

type PrototypeVideoProps = {
  src: string;
  poster: string;
  label: string;
  fileLinkLabel?: string;
};

export function PrototypeVideo({
  src,
  poster,
  label,
  fileLinkLabel = "打开视频文件",
}: PrototypeVideoProps) {
  const exists = publicFileExists(src);

  if (!exists) {
    return (
      <figure className="w-full min-w-0">
        <div className="flex min-h-48 w-full items-center justify-center rounded-sm border border-line bg-[#f3f1ec] px-4 py-16 sm:min-h-64">
          <p className="text-sm text-ink-muted">{label}</p>
        </div>
      </figure>
    );
  }

  return (
    <figure className="w-full min-w-0">
      <video
        controls
        preload="metadata"
        poster={poster}
        className="block h-auto w-full bg-ink"
      >
        <source src={src} type="video/mp4" />
      </video>
      <figcaption className="mt-2 flex flex-wrap items-baseline justify-between gap-2 text-xs text-ink-muted">
        <span>{label}</span>
        <TextLink href={src}>{fileLinkLabel}</TextLink>
      </figcaption>
    </figure>
  );
}
