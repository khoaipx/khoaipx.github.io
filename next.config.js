/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: './out',
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
        unoptimized: true
    }
}
}

module.exports = nextConfig
