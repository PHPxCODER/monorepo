/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/docs", // Serve docs under /docs
  assetPrefix: "/docs" // Ensures assets load correctly
};

export default nextConfig;
