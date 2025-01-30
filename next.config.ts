import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enables static export
  trailingSlash: true, // Optionally add trailing slashes to URLs
};

export default nextConfig;
