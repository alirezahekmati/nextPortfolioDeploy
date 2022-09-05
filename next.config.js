/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost:1337", "localhost", "130.185.78.118"],
  },
};

module.exports = nextConfig;
