import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['sr', 'de', 'fr', 'en'],
  defaultLocale: 'sr',
});

export const config = {
  matcher: ['/', '/(sr|de|fr|en)/:path*'],
};
