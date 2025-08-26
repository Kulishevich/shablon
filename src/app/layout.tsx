import type { Metadata } from 'next';
import { Onest, Open_Sans } from 'next/font/google';
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
import { PublicEnvScript } from 'next-runtime-env';
import { getStoreUrl } from '@/shared/api/base';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import { ToTop } from '@/shared/ui/to-top';
import { extractScriptContent } from '@/shared/lib/utils/extractScriptContent';
import { getSeoSettings } from '@/shared/api/seo/getSeoSettings';
import { getServices } from '@/shared/api/services/getServices';

const PhoneAnimation = dynamic(() => import('@/shared/ui/phone-animation/PhoneAnimation'));

const onest = Onest({
  variable: '--font-onest',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const openSans = Open_Sans({
  variable: '--font-onest',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600'],
});

export async function generateViewport() {
  const settings = await getSetting();

  return {
    themeColor: settings?.colors.icon_color,
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 5,
    userScalable: true,
  };
}

export async function generateMetadata(): Promise<Metadata> {
  const [data, settings, storeUrl] = await Promise.all([
    getSeoTag({ tag: 'home' }),
    getSetting(),
    getStoreUrl(),
  ]);

  return {
    title: data?.title ?? 'Шаблон',
    description: data?.description ?? 'Шаблон',
    keywords: data?.keywords,
    openGraph: {
      title: data?.og_title ?? data?.title,
      description: data?.og_description ?? data?.description,
    },
    icons: {
      icon: `${storeUrl}/${settings?.favicon}`,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [categories, contacts, settings, seoSettings, storeUrl, services] = await Promise.all([
    getCategories(),
    getContacts(),
    getSetting(),
    getSeoSettings(),
    getStoreUrl(),
    getServices(),
  ]);

  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://api-maps.yandex.ru" />
        <link rel="dns-prefetch" href="https://api-maps.yandex.ru" />
        <link rel="preconnect" href={storeUrl || ''} />
        <link rel="dns-prefetch" href={storeUrl || ''} />
        <style>
          {`:root {
            --color-accent-1: ${settings?.colors.icon_color};
            --color-button: ${settings?.colors.button_color_static};
            --color-button-additional: ${settings?.colors.button_color_static_additional};
            --color-button-hover: ${settings?.colors.button_color_hover};
            --color-text: ${settings?.colors.main_text_color};
            --color-link: ${settings?.colors.link_color};
            --color-bg: ${settings?.colors.background_color};
            --color-bg-card: ${settings?.colors.card_background_color};
            --color-heading: ${settings?.colors.heading_color};
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

        <PublicEnvScript />
      </head>

      <body className={`${onest.variable} ${openSans.variable}`}>
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
          services={services || []}
        />
        <HeaderMobile categories={categories} contacts={contacts} services={services} />
        {children}
        <Footer categories={categories} contacts={contacts} />
        <Toaster />
        <PhoneAnimation image={settings?.feedback_image || ''} />
        <ToTop />
      </body>
    </html>
  );
}
