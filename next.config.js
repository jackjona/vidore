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

const { withSentryConfig } = require("@sentry/nextjs");

const sentryWebpackPluginOptions = {
  org: "jackj",
  project: "vidore",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  tunnelRoute: "/monitoring",
  disableLogger: true,
  automaticVercelMonitors: true,
};

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
