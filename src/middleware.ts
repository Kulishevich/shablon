import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const pathname = url.pathname;
  const host = request.headers.get('host') || '';

  console.log(`Middleware processing: ${pathname}, host: ${host}, protocol: ${url.protocol}`);

  // Полностью исключаем localhost из обработки
  if (host.includes('localhost') || host.includes('127.0.0.1')) {
    console.log('Localhost detected, skipping middleware');
    return NextResponse.next();
  }

  // Создаем финальный URL, который будет результатом всех нормализаций
  const finalUrl = new URL(request.url);
  let needsRedirect = false;

  // 1. HTTPS нормализация
  if (finalUrl.protocol === 'http:') {
    finalUrl.protocol = 'https:';
    finalUrl.port = '';
    needsRedirect = true;
  }

  // 2. WWW нормализация (убираем www)
  if (host.startsWith('www.')) {
    finalUrl.hostname = host.replace('www.', '');
    needsRedirect = true;
  }


  // 3. Нормализация пути
  let normalizedPath = pathname;

  // Множественные слеши
  if (/\/\/+/.test(normalizedPath)) {
    normalizedPath = normalizedPath.replace(/\/\/+/g, '/');
  }

  // Верхний регистр
  if (/[A-Z]/.test(normalizedPath)) {
    normalizedPath = normalizedPath.toLowerCase();
  }

  // Завершающий слеш
  if (normalizedPath.length > 1 && normalizedPath.endsWith('/')) {
    normalizedPath = normalizedPath.slice(0, -1);
  }

  if (normalizedPath !== pathname) {
    finalUrl.pathname = normalizedPath;
    needsRedirect = true;
  }


  if (needsRedirect) {
    return Response.redirect(finalUrl.toString(), 301);
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
