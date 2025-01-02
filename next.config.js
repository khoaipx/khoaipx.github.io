/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    //assetPrefix: './public/assets',
    //basePath: '', // Để lại rỗng nếu deploy vào repo root
  };
  
  module.exports = nextConfig;
  