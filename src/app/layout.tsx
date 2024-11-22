import { Metadata } from 'next';
import { ReactNode } from 'react';

import './globals.css';

import { siteConfig } from '@/config/site';

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: 'https://roniar.dev/meta.jpeg',
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    title: 'Roni Ardiyanto - Software Developer',
    description: siteConfig.description,
    images: [
      {
        url: 'https://roniar.dev/meta.jpeg',
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
    card: 'summary_large_image',
  },
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
  return children;
}
