import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['assets.aceternity.com'],
  },
  devIndicators: {
    appIsrStatus: false,
  },
};

export default nextConfig;
