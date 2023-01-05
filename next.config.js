const cache = require("./cache.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: "http://localhost:4200/api",
  },
};

const withPWA = require("next-pwa")({
  mode: 'production',
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching: cache,
});

module.exports = withPWA(nextConfig);
