import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/solutions/:path*",
        destination: "/services/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
