import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "placehold.co", pathname: "/**" },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 320, 384, 400, 480],
  },
  // Generate source maps in production for debugging; dev Turbopack "Map has no mappings" is a known tooling quirk
  productionBrowserSourceMaps: true,
};

export default nextConfig;
