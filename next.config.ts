import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    qualities: [100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'temapi.webspaceteam.site',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'webspaceteam.site',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'dlyadoma.lookda.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'odejda.lookda.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'auto.lookda.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'stroyka.lookda.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'podarok.lookda.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'tehnika.lookda.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'kosmetika.lookda.com',
        pathname: '/**',
      },
    ],
  },

  async rewrites() {
    return [
      { source: '/robots.txt', destination: '/api/robots' },
      { source: '/sitemap.xml', destination: '/api/sitemap.xml' },
      { source: '/feed.xml', destination: '/api/feed' },
    ];
  },

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.(?<domain>.*)',
          },
        ],
        destination: 'https://:domain/:path*',
        statusCode: 301,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://:host/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-ssl',
            value: 'off',
          },
        ],
        destination: 'https://:host/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
