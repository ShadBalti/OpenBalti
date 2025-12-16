/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  
  // Optional: additional 301 redirect safety inside Next.js (won’t conflict with Vercel)
  async redirects() {
    return [
    {
      source: '/:path*',
      has: [{ type: 'host', value: 'openbalti.com' }],
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
