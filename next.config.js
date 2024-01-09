/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  ...(isGithubActions && {
    output: "export",
    images: {
      unoptimized: true,
    },
    basePath: "/get912000won",
    assetPrefix: "/get912000won",
  }),
}

module.exports = nextConfig
