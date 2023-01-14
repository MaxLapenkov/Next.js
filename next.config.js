const cache = require("./cache.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withPWA = require("next-pwa")({
  mode: "production",
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching: cache,
});

module.exports = withPWA(nextConfig);
