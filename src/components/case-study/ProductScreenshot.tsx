import { publicFileExists } from "@/lib/public-file";

type ProductScreenshotProps = {
  src: string;
  label: string;
  filename: string;
  /** Fixed-ratio image frame only; does not change caption typography. */
  thumb?: boolean;
  /** object-fit inside the thumb frame. Defaults to cover. */
  thumbFit?: "cover" | "contain";
};

export function ProductScreenshot({
  src,
  label,
  filename,
  thumb = false,
  thumbFit = "cover",
}: ProductScreenshotProps) {
  const exists = publicFileExists(src);

  if (!exists) {
    return (
      <figure className="w-full min-w-0">
        <div
          className={
            thumb
              ? "flex aspect-[4/3] w-full items-center justify-center rounded-sm border border-line bg-[#f3f1ec] px-4"
              : "flex min-h-48 w-full items-center justify-center rounded-sm border border-line bg-[#f3f1ec] px-4 py-16 sm:min-h-64"
          }
        >
          <div className="text-center">
            <p className="text-sm text-ink">{label}</p>
            <p className="mt-2 text-xs text-ink-muted">{filename}</p>
          </div>
        </div>
        <figcaption className="sr-only">{label}</figcaption>
      </figure>
    );
  }

  if (thumb) {
    const fitClass = thumbFit === "contain" ? "object-contain" : "object-cover";
    return (
      <figure className="w-full min-w-0">
        <div
          className={`aspect-[4/3] w-full overflow-hidden ${
            thumbFit === "contain" ? "bg-paper" : ""
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={label}
            className={`block h-full w-full ${fitClass}`}
          />
        </div>
        <figcaption className="mt-3 text-xs leading-5 text-ink-muted">
          {label}
        </figcaption>
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
