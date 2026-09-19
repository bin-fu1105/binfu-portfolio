import type { NextConfig } from "next";
import path from "path";

const isChinaStaticExport = process.env.CHINA_STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  ...(isChinaStaticExport
    ? {
        output: "export" as const,
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
