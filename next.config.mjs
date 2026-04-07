/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false,
    domains: [
      'openbalti.com',
      'localhost',
      'vercel.app',
      // Add other image CDN domains as needed
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    cacheExpiration: 60,
  },
  
  // Optional: additional 301 redirect safety inside Next.js (won’t conflict with Vercel)
  async redirects() {
    return [
    {
      source: '/:path*',
      has: [{ type: 'host', value: 'openbalti.vercel.app' }],
      destination: 'https://openbalti.com/:path*',
      permanent: true,
    }, ];
  },
  
  // Optional: Define site metadata (helps with sitemap and SEO plugins)
  env: {
    SITE_URL: 'https://openbalti.com',
  },
};

export default nextConfig;
