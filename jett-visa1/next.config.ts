import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
    unoptimized: true, // Allow unoptimized images for development
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(gif|svg|webp)$/i,
      type: "asset/resource",
    });
    return config;
  },
};

export default nextConfig;

