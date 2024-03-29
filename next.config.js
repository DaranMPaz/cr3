/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/*',
      },
      {
        protocol: 'https',
        hostname: 'mamangua-cloud.com',
      },
      {
        protocol: 'https',
        hostname: 'www.gov.br',
      },
    ],
  },
}

module.exports = nextConfig
