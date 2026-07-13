/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emits .next/standalone with a minimal server.js + only the needed node_modules.
  // The Dockerfile depends on this; without it the runtime image needs the full dep tree.
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
