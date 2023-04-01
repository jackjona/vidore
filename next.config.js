/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/img/:path*",
        destination: "https://image.tmdb.org/t/p/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
