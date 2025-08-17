/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   // 👈 replaces next export
  images: { unoptimized: true }, // required for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '' : '', 
};

module.exports = nextConfig;

