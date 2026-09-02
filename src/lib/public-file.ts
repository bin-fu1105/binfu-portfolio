import fs from "node:fs";
import path from "node:path";

export function publicFileExists(publicPath: string) {
  const relative = publicPath.replace(/^\/+/, "");
  return fs.existsSync(path.join(process.cwd(), "public", relative));
}
