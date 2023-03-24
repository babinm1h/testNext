const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: { domains: ["i.dummyjson.com"] },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    prependData: `@import "src/styles/variables.scss";`,
  },
};

module.exports = nextConfig;
