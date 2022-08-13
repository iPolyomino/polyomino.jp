/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");

const settings = {
  i18n: {
    locales: ["ja"],
    defaultLocale: "ja",
  },
  reactStrictMode: true,
  pwa: {
    dest: "public",
  },
};

module.exports =
  process.env.NODE_ENV === "development" ? settings : withPWA(settings);
