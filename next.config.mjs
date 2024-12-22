import './src/env.mjs';
import { createSecureHeaders } from 'next-secure-headers';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();
const hostnames = [
  'localhost:3000',
  'roniar.dev',
  'images.unsplash.com',
  'res.cloudinary.com',
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  // optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  /**
   * Toggle experimental features.
   */
  /**
   * Configuration for next/image.
   */
  swcMinify: true,
  experimental: {
    turbo: {
      moduleIdStrategy: 'deterministic',
    },
    reactCompiler: true,
    optimisticClientCache: true,
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: hostnames.map((hostname) => ({
      protocol: 'https',
      hostname,
    })),
  },
  /**
   * Set custom website headers with next-secure-headers.
   * @see https://github.com/jagaapple/next-secure-headers
   */
  async headers() {
    return [
      {
        /**
         * Set security headers to all routes.
         */
        source: '/(.*)',
        headers: createSecureHeaders(),
      },
    ];
  },
  /**
   * Dangerously allow builds to successfully complete
   * even if your project has the types/eslint errors.
   *
   * Next.js has built-in support for TypeScript, using its own plugin.
   * But while you use `pnpm build`, it stops on the first type errors.
   * So you can use `pnpm bv` to check all type warns and errors at once.
   */
};

/**
 * Create a config wrapper required to integrate a modern Nextjs MDX support.
 * @see https://nextjs.org/docs/app/building-your-application/configuring/mdx
 */

/**
 * Create configuration wrapper required for using next-intl with React Server Components.
 * @see https://next-intl-docs.vercel.app/docs/getting-started/app-router-server-components
 */

/**
 * Send the config to server while build or lint.
 */
export default withVanillaExtract(nextConfig);
