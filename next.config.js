const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src')],
  },
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
};

module.exports = nextConfig;
