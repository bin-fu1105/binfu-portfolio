import fs from "node:fs";
import path from "node:path";

const chinaSkippedMedia = /\.(mp4|apk)$/i;

export function publicFileExists(publicPath: string) {
  if (
    process.env.CHINA_STATIC_EXPORT === "1" &&
    chinaSkippedMedia.test(publicPath)
  ) {
    return false;
  }

  const relative = publicPath.replace(/^\/+/, "");
  return fs.existsSync(path.join(process.cwd(), "public", relative));
}
