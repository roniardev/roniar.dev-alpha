import { MantineProvider } from '@mantine/core';
import { NavigationProgress } from '@mantine/nprogress';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import React from 'react';

import './globals.css';
import '@mantine/core/styles.css';
import '@mantine/nprogress/styles.css';

import { CSPostHogProvider } from '@/components/utils/Providers/PostHogProvider';

import { siteConfig } from '@/config/site';
import { theme } from '@/theme';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
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

type Props = {
  children: React.ReactNode;
};

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export default async function LocaleLayout(props: Props) {
  return (
    <html lang="en" data-mantine-color-scheme="light">
      <head>
        <link rel="shortcut icon" href="/favicon.icon" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="description" content={siteConfig.description} />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteConfig.name} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:url" content={siteConfig.url} />
        <meta property="og:image" content="https://roniar.dev/meta.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteConfig.name} />
        <meta name="twitter:description" content={siteConfig.description} />
        <meta name="twitter:image" content="https://roniar.dev/meta.jpeg" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
        <meta name="twitter:site" content="@roniardiyanto" />
        <meta name="twitter:creator" content="@roniardiyanto" />
        <meta name="twitter:domain" content="roniar.dev" />
        <meta name="twitter:url" content={siteConfig.url} />
      </head>
      <body className={plusJakarta.className}>
        <CSPostHogProvider>
          <MantineProvider theme={theme} forceColorScheme="light">
            <NavigationProgress aria-label="Progress Load Bar" />
            {props.children}
          </MantineProvider>
        </CSPostHogProvider>
      </body>
      <GoogleAnalytics gaId="G-3P3SXQMEYE" />
      <GoogleTagManager gtmId="G-3P3SXQMEYE" />
    </html>
  );
}
