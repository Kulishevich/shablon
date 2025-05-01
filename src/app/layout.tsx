import type { Metadata } from 'next';
import { Onest } from 'next/font/google';
import '@/shared/config/styles/index.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Footer } from '@/widgets/footer';
import { Toaster } from 'sonner';
import { Header } from '@/widgets/header/Header';
import { getSeoTag } from '@/shared/api/seo/getSeoTag';

const onest = Onest({
  variable: '--font-onest',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600'],
});

export async function generateMetadata(): Promise<Metadata> {
  const data = await getSeoTag('home');
  // const setting = await getSetting();

  return {
    title: data?.title ?? 'Шаблон',
    description: data?.description ?? 'Шаблон',
    keywords: data?.keywords,
    openGraph: {
      title: data?.og_title ?? data?.title,
      description: data?.og_description ?? data?.description,
    },
    // icons: {
    //   icon: `${process.env.STORE_URL}/${setting?.favicon_path}`,
    // },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${onest.variable}`}>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
