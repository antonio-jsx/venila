import { routing } from '@/i18n/routing';
import { getSessionCookie } from 'better-auth/cookies';
import { type NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

const handleI18nRouting = createMiddleware(routing);

function stripLocale(pathname: string) {
  const localePattern = new RegExp(`^/(${routing.locales.join('|')})(/|$)`);
  return pathname.replace(localePattern, '/');
}

export default function middleware(request: NextRequest) {
  const response = handleI18nRouting(request);
  const pathname = stripLocale(request.nextUrl.pathname);

  if (pathname.startsWith('/admin')) {
    if (!getSessionCookie(request)) {
      return NextResponse.redirect(new URL('/signin', request.url));
    }
  }

  return response;
}

export const config = {
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)'],
};
