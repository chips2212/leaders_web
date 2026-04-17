/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // GitHub Pages configuration
  assetPrefix: process.env.NODE_ENV === 'production' ? '/leaders_web' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/leaders_web' : '',
}

module.exports = nextConfig
