import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ⛔ Matikan lint saat build (termasuk di Vercel)
  },
};

export default nextConfig;
