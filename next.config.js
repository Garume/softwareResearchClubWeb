/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins")
const withVideos = require("next-videos")

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = withPlugins([withVideos], nextConfig)
