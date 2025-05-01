import { getSeoTag } from '@/shared/api/seo/getSeoTag';

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  const seo = await getSeoTag(`/product/${slug}`);

  return {
    title: seo?.title ?? 'Продукт',
    description: seo?.description ?? 'Продукт',
    keywords: seo?.keywords,
    openGraph: {
      title: seo?.og_title ?? 'Продукт',
      description: seo?.og_description ?? 'Продукт',
    },
  };
};

export default async function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
