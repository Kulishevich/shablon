import type { Metadata } from 'next';
import { Onest } from 'next/font/google';
import '@/shared/config/styles/index.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Footer } from '@/widgets/footer';
import { Toaster } from 'sonner';

import { getSeoTag } from '@/shared/api/seo/getSeoTag';
import { getCategories } from '@/shared/api/category/getCategories';
import { HeaderDesktop } from '@/widgets/header-desktop';
import { HeaderMobile } from '@/widgets/header-mobile';
import { getSetting } from '@/shared/api/design/getSetting';
import { getContacts } from '@/shared/api/design/getContacts';
import { getProducts } from '@/shared/api/product/getProducts';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import { ToTop } from '@/shared/ui/to-top';
import { extractScriptContent } from '@/shared/lib/utils/extractScriptContent';
import { getSeoSettings } from '@/shared/api/seo/getSeoSettings';
const PhoneAnimation = dynamic(() => import('@/shared/ui/phone-animation/PhoneAnimation'));

const onest = Onest({
  variable: '--font-onest',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export async function generateViewport() {
  const settings = await getSetting();

  return {
    themeColor: settings?.colors.accent_1,
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 5,
    userScalable: true,
  };
}

export async function generateMetadata(): Promise<Metadata> {
  const [data, settings] = await Promise.all([getSeoTag('home'), getSetting()]);

  return {
    title: data?.title ?? 'Шаблон',
    description: data?.description ?? 'Шаблон',
    keywords: data?.keywords,
    openGraph: {
      title: data?.og_title ?? data?.title,
      description: data?.og_description ?? data?.description,
    },
    icons: {
      icon: `${process.env.NEXT_PUBLIC_STORE_URL}/${settings?.favicon}`,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [categories, contacts, products, settings, seoSettings] = await Promise.all([
    getCategories(),
    getContacts(),
    getProducts({}),
    getSetting(),
    getSeoSettings(),
  ]);

  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://api-maps.yandex.ru" />
        <link rel="dns-prefetch" href="https://api-maps.yandex.ru" />
        <link rel="preconnect" href={process.env.NEXT_PUBLIC_STORE_URL || ''} />
        <link rel="dns-prefetch" href={process.env.NEXT_PUBLIC_STORE_URL || ''} />
        <style>
          {`:root {
            --color-accent-1: ${settings?.colors.accent_1};
            --color-accent-2: ${settings?.colors.accent_2};
            --color-accent-red: ${settings?.colors.red};
            --color-accent-green: ${settings?.colors.green};
            --color-accent-orange: ${settings?.colors.gold};
            --color-text: ${settings?.colors.text_color};
            --color-white: ${settings?.colors.background_color};
            --color-grey: ${settings?.colors.gray};
            --color-bg-card: ${settings?.colors.card_bg};
          }`}
        </style>
        <Script
          src="https://api-maps.yandex.ru/v3/?apikey=e1f9579b-8502-438f-8273-6dff1fc98656&lang=ru_RU"
          strategy="beforeInteractive"
        />
        {seoSettings?.google_tag && (
          <Script
            id="google-tag"
            dangerouslySetInnerHTML={{
              __html: extractScriptContent(seoSettings.google_tag),
            }}
            strategy="afterInteractive"
          />
        )}
        {seoSettings?.yandex_metrika && (
          <Script
            id="yandex-metrika"
            dangerouslySetInnerHTML={{
              __html: extractScriptContent(seoSettings.yandex_metrika),
            }}
            strategy="afterInteractive"
          />
        )}
      </head>

      <body className={`${onest.variable}`}>
        {seoSettings?.google_search_console && (
          <Script
            id="google-search-console"
            dangerouslySetInnerHTML={{
              __html: seoSettings.google_search_console,
            }}
            strategy="afterInteractive"
          />
        )}
        {seoSettings?.yandex_webmaster && (
          <Script
            id="yandex-webmaster"
            dangerouslySetInnerHTML={{ __html: seoSettings.yandex_webmaster }}
            strategy="afterInteractive"
          />
        )}

        <HeaderDesktop
          categories={categories || []}
          contacts={contacts}
          products={products?.data || []}
        />
        <HeaderMobile
          categories={categories}
          contacts={contacts}
          products={products?.data || []}
          feedbackImage={settings?.feedback_image || ''}
        />
        {children}
        <Footer categories={categories} contacts={contacts} />
        <Toaster />
        <PhoneAnimation image={settings?.feedback_image || ''} />
        <ToTop />
      </body>
    </html>
  );
}
