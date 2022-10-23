/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["encrypted-tbn0.gstatic.com", "a0.muscache.com"],
  },
};

module.exports = nextConfig;
