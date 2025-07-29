import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const pathname = url.pathname;

  const proto = request.headers.get('x-forwarded-proto');
  const ssl = request.headers.get('x-forwarded-ssl');

  if (proto === 'http' || ssl === 'off') {
    const httpsUrl = new URL(request.url);
    httpsUrl.protocol = 'https:';
    httpsUrl.port = '';
    return NextResponse.redirect(httpsUrl.toString(), 301);
  }

  let normalizedPath = pathname;
  let needsRedirect = false;

  if (/\/\/+/.test(normalizedPath)) {
    normalizedPath = normalizedPath.replace(/\/\/+/g, '/');
    needsRedirect = true;
  }

  if (/[A-Z]/.test(normalizedPath)) {
    normalizedPath = normalizedPath.toLowerCase();
    needsRedirect = true;
  }

  if (normalizedPath.length > 1 && normalizedPath.endsWith('/')) {
    normalizedPath = normalizedPath.slice(0, -1);
    needsRedirect = true;
  }

  if (needsRedirect) {
    url.pathname = normalizedPath;
    return NextResponse.redirect(url, { status: 301 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Применяем middleware ко всем путям кроме:
     * - api (API routes)
     * - _next/static (статические файлы)
     * - _next/image (оптимизированные изображения)
     * - favicon.ico (иконка)
     * - robots.txt, sitemap.xml (SEO файлы)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|feed.xml).*)',
  ],
};
