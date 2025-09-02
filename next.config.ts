import type { NextConfig } from "next";
import withExportImages from "next-export-optimize-images";

const nextConfig: NextConfig = withExportImages({
  output: "export",
  images: {
    //    unoptimized: true,
  },
  /* config options here */
});

export default nextConfig;
