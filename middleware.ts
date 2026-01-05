import createMiddleware from 'next-intl/middleware';

export const routing = {
  locales: ['cs', 'en'],
  defaultLocale: 'cs',
  localePrefix: 'as-needed'
};

export default createMiddleware(routing);

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
