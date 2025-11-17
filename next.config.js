const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true, // Prevents hydration mismatch with browser extensions
  },
  compress: true,
  poweredByHeader: false,
};

module.exports = withNextIntl(nextConfig);
