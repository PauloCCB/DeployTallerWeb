import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  output: "standalone",
  eslint: {
    ignoreDuringBuilds: true, // Ignorar errores de ESLint en la construcción
  },
  typescript: {
    ignoreBuildErrors: true, // Ignorar errores de TypeScript en la construcción
  },
};

export default nextConfig;