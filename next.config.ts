import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Configure for static export to GitHub Pages, which disables server-side image optimization
  output: 'export',
  images: { unoptimized: true },
}

export default nextConfig
