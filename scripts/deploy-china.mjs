import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(projectRoot, "out");
const envId = process.env.TCB_ENV_ID?.trim();

if (!existsSync(path.join(outDir, "index.html"))) {
  console.error("Missing ./out. Run npm run build:china first.");
  process.exit(1);
}

if (!envId) {
  console.log(`China static files are ready in:
  ${outDir}

CloudBase deploy cannot continue without your Tencent Cloud login.

Do this in the Tencent Cloud console:
1. Open https://tcb.cloud.tencent.com/dev
2. Sign in and complete personal real-name verification if prompted
3. Create a CloudBase environment if you do not have one (the free personal environment is enough)
4. Open 静态网站托管 and enable it
5. Copy the Environment ID

Then either:
- Upload the entire contents of ./out (including _next and projects) in 静态网站托管 → 文件管理
- Or in PowerShell: $env:TCB_ENV_ID="your-env-id"; npm run deploy:china

Default homepage should be index.html.
Do not set the error document to index.html unless a nested project URL 404s.
`);
  process.exit(2);
}

const deploy = spawnSync(
  "npx",
  [
    "--yes",
    "--package=@cloudbase/cli",
    "--",
    "tcb",
    "hosting",
    "deploy",
    "./out",
    "-e",
    envId,
    // Keep Roomwise Interaction Demo mp4; still ignore large VR apk leftovers if any.
    "--ignore",
    "*.apk,.DS_Store,**/healing-through-nature/*.mp4",
  ],
  {
    cwd: projectRoot,
    env: process.env,
    stdio: "inherit",
    shell: true,
  },
);

process.exit(deploy.status ?? 1);
