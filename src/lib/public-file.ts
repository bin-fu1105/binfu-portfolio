import fs from "node:fs";
import path from "node:path";

/** Large prototype media kept off China static hosting; Roomwise demo MP4 is included. */
function skipOnChinaStaticExport(publicPath: string) {
  if (/\.apk$/i.test(publicPath)) return true;
  if (/\.mp4$/i.test(publicPath)) {
    return !/Roomwise-UI-Interaction-Demo-2026\.mp4$/i.test(publicPath);
  }
  return false;
}

export function publicFileExists(publicPath: string) {
  if (
    process.env.CHINA_STATIC_EXPORT === "1" &&
    skipOnChinaStaticExport(publicPath)
  ) {
    return false;
  }

  const relative = publicPath.replace(/^\/+/, "");
  return fs.existsSync(path.join(process.cwd(), "public", relative));
}
