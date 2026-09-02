import { publicFileExists } from "@/lib/public-file";

type ProductScreenshotProps = {
  src: string;
  label: string;
  filename: string;
};

export function ProductScreenshot({
  src,
  label,
  filename,
}: ProductScreenshotProps) {
  const exists = publicFileExists(src);

  if (!exists) {
    return (
      <figure className="w-full min-w-0">
        <div className="flex min-h-48 w-full items-center justify-center rounded-sm border border-line bg-[#f3f1ec] px-4 py-16 sm:min-h-64">
          <div className="text-center">
            <p className="text-sm text-ink">{label}</p>
            <p className="mt-2 text-xs text-ink-muted">{filename}</p>
          </div>
        </div>
        <figcaption className="sr-only">{label}</figcaption>
      </figure>
    );
  }

  return (
    <figure className="w-full min-w-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={label}
        className="block h-auto w-full"
      />
      <figcaption className="mt-2 text-xs text-ink-muted">{label}</figcaption>
    </figure>
  );
}
