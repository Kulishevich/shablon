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
import { ReduxProvider } from '@/shared/lib/redux/providers/ReduxProvider';
import Script from 'next/script';

const onest = Onest({
  variable: '--font-onest',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600'],
});

export async function generateMetadata(): Promise<Metadata> {
  const data = await getSeoTag('home');
  const settings = await getSetting();

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
  const categories = await getCategories();
  const contacts = await getContacts();
  const products = await getProducts({});
  const settings = await getSetting();

  return (
    <html lang="en">
      <head>
        <style>
          {`:root {
            --color-accent-1: ${settings?.colors.primary};
            --color-accent-2: ${settings?.colors.accent};
            --color-accent-red: ${settings?.colors.secondary};
            --color-accent-green: ${settings?.colors.button_secondary};
          }`}
        </style>
        <Script
          src="https://api-maps.yandex.ru/v3/?apikey=e1f9579b-8502-438f-8273-6dff1fc98656&lang=ru_RU"
          strategy="beforeInteractive"
        />
      </head>
      <ReduxProvider>
        <body className={`${onest.variable}`}>
          <HeaderDesktop
            categories={categories || []}
            contacts={contacts}
            products={products?.data || []}
          />
          <HeaderMobile
            categories={categories}
            contacts={contacts}
            products={products?.data || []}
          />
          {children}
          <Footer categories={categories} contacts={contacts} />
          <Toaster />
        </body>
      </ReduxProvider>
    </html>
  );
}
