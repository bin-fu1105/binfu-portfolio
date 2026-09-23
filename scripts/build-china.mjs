import { spawnSync } from "node:child_process";
import { existsSync, readdirSync, rmSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(projectRoot, "out");

process.env.CHINA_STATIC_EXPORT = "1";

const build = spawnSync("npx", ["next", "build"], {
  cwd: projectRoot,
  env: process.env,
  stdio: "inherit",
  shell: true,
});

if (build.status !== 0) {
  process.exit(build.status ?? 1);
}

function removeLargeMedia(dir) {
  if (!existsSync(dir)) {
    return;
  }

  for (const name of readdirSync(dir)) {
    const fullPath = path.join(dir, name);
    if (statSync(fullPath).isDirectory()) {
      removeLargeMedia(fullPath);
      continue;
    }

    // Keep the small Roomwise Interaction Demo; still exclude large VR assets.
    if (/\.apk$/i.test(name)) {
      rmSync(fullPath);
      continue;
    }
    if (
      /\.mp4$/i.test(name) &&
      name !== "Roomwise-UI-Interaction-Demo-2026.mp4"
    ) {
      rmSync(fullPath);
    }
  }
}

removeLargeMedia(outDir);

const requiredPages = [
  "index.html",
  "projects/ai-career-agent/index.html",
  "projects/ai-portfolio-assistant/index.html",
  "projects/ai-skill-gap-assistant/index.html",
  "projects/healing-through-nature/index.html",
  "projects/roomwise/index.html",
  "projects/roomwise/visual-system/index.html",
];

const missing = requiredPages.filter((page) => !existsSync(path.join(outDir, page)));

if (missing.length > 0) {
  console.error("China static export is missing pages:");
  for (const page of missing) {
    console.error(`  - ${page}`);
  }
  process.exit(1);
}

const roomwiseDemo = path.join(
  outDir,
  "video",
  "Roomwise-UI-Interaction-Demo-2026.mp4",
);
if (!existsSync(roomwiseDemo)) {
  console.error("China static export is missing Roomwise Interaction Demo mp4:");
  console.error(`  - ${roomwiseDemo}`);
  process.exit(1);
}

console.log("China static export ready in ./out");
console.log("Vercel is unchanged: npm run build still uses the default Next.js config.");
