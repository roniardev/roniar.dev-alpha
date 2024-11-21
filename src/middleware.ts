/** @see https://nextjs.org/docs/app/building-your-application/routing/middleware */

import { NextResponse } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';

import { defaultLocale, locales } from '@/i18n/locales';

const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'never',
});

/**
 * `/{locale}/` -> `/{locale}`
 */

export default function middleware(req) {
  // const { token } = req.nextauth;

  if (
    req.nextUrl.pathname.startsWith('/api') ||
    req.nextUrl.pathname.startsWith('/keystatic')
  ) {
    return NextResponse.next();
  }

  // if (!token) {
  //   if (
  //     !doesPathMatchPages(req, authPages) &&
  //     !doesPathMatchPages(req, publicPages)
  //   ) {
  //     return intlMiddleware(req);
  //   }
  //   return intlMiddleware(req);
  // }

  // todo: make it more stable
  // if (
  //   doesPathMatchPages(req, authPages) ||
  //   (doesPathMatchPages(req, blockedPages) && !token.isBlocked) ||
  //   (doesPathMatchPages(req, adminPages) && !token.isAdmin)
  // ) {
  //   return redirect(req, defaultPublicPage);
  // }

  // if (!doesPathMatchPages(req, blockedPages) && token.isBlocked) {
  //   return redirect(req, defaultBlockedPage);
  // }

  return intlMiddleware(req);
}

export const config = {
  // Skip all paths that should not be touched by this middleware
  matcher: ['/((?!api|_next|keystatic|.*\\..*).*)'],
};
