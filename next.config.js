/** @type {import('next').NextConfig} */

const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
});

module.exports = withPWA({
  i18n: {
    locales: ["ja"],
    defaultLocale: "ja",
  },
  reactStrictMode: true,
});
