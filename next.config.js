/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  // Enable strict mode for better React practices
  reactStrictMode: true,
  // Powered by header
  poweredByHeader: false,
}

module.exports = nextConfig
