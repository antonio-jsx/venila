import { routing } from '@/i18n/routing';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { type NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

const handleI18nRouting = createMiddleware(routing);

function stripLocale(pathname: string) {
  const localePattern = new RegExp(`^/(${routing.locales.join('|')})(/|$)`);
  return pathname.replace(localePattern, '/');
}

export default async function middleware(request: NextRequest) {
  const response = handleI18nRouting(request);
  const pathname = stripLocale(request.nextUrl.pathname);

  if (pathname.startsWith('/admin') && pathname !== '/admin/signin') {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return NextResponse.redirect(new URL('/admin/signin', request.url));
    }
  }

  return response;
}

export const config = {
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)'],
};
