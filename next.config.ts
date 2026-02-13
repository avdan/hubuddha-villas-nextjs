import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  images: {
    // Disable optimization for localhost in development (private IP restriction)
    unoptimized: isDev,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8888",
        pathname: "/hubuddha-wp/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "wordpress-1583168-6179457.cloudwaysapps.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
