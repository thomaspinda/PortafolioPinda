import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
  forceSwcTransforms: true, // A veces ayuda con Next.js 13+
  },
};

export default nextConfig;
