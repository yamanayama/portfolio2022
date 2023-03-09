/** @type {import('next').NextConfig} */
const withLinaria = require('next-linaria')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.microcms-assets.io"],
  },
}

const linariaOption = {}

module.exports = withLinaria({
  ...nextConfig,
  linaria: linariaOption,
})