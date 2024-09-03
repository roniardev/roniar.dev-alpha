import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { NavigationProgress } from '@mantine/nprogress';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import React from 'react';

import './globals.css';
import '@mantine/core/styles.css';
import '@mantine/nprogress/styles.css';

import NotFoundPageFeatures from '@/components/features/NotFoundPageFeatures';

import { theme } from '@/theme';

export const metadata = {
  title: 'Roni Ardiyanto',
  description: 'Roni Ardiyanto personal website',
};

export default async function NotFound() {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
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
      </head>
      <body>
        <MantineProvider theme={theme}>
          <NavigationProgress aria-label="Progress Load Bar" />
          <NotFoundPageFeatures />
        </MantineProvider>
      </body>
      <GoogleAnalytics gaId="G-3P3SXQMEYE" />
      <GoogleTagManager gtmId="G-3P3SXQMEYE" />
    </html>
  );
}
