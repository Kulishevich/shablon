import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
  images: {
    qualities: [100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "**",
      },
      {
        protocol: 'https',
        hostname: process.env.SITE_NAME || process.env.NEXT_PUBLIC_SITE_NAME || 'webspaceteam.site',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: `**.${process.env.SITE_NAME || process.env.NEXT_PUBLIC_SITE_NAME}`,
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

};

export default nextConfig;
