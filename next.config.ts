import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.SITE_NAME || process.env.NEXT_PUBLIC_SITE_NAME || 'webspaceteam.site',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: `**.${process.env.API_NAME || process.env.NEXT_PUBLIC_API_NAME}`,
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: process.env.STORE_NAME || process.env.NEXT_PUBLIC_STORE_NAME || 'webspaceteam.site',
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
