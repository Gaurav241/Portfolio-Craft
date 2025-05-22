/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.graphassets.com',
      }
    ],
  },
}

module.exports = nextConfig
