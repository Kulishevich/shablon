import { getPromotion } from '@/shared/api/promotions/getPromotion';
import { getSeoTag } from '@/shared/api/seo/getSeoTag';

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const seo = await getSeoTag(`/shares/${slug}`);
  const promotion = await getPromotion(slug);

  return {
    title: seo?.title ?? promotion?.title,
    description: seo?.description ?? promotion?.content?.slice(0, 150),
    keywords: seo?.keywords,
    openGraph: {
      title: seo?.og_title ?? promotion?.title,
      description: seo?.og_description ?? promotion?.content?.slice(0, 150),
    },
  };
};

export default async function SharesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
