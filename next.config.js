/** @type {import('next').NextConfig} */
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  experimental: {
    appDir: false,
  },
  modularizeImports: {
    lodash: {
      transform: 'lodash/{{member}}',
    },
  },
  distDir: 'build'
};

module.exports = withVanillaExtract(nextConfig);
