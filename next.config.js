/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: './out',
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
        unoptimized: true
    }
  },
  async rewrites(params) {
    return [
      {
        source: '/',
        destination: '/out/server/pages/index.html',
      },
    ]
  }
}

module.exports = nextConfig
