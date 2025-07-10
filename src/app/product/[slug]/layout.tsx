import { getSeoTag } from '@/shared/api/seo/getSeoTag';
import { getProductById } from '@/shared/api/product/getProductById';

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const seo = await getSeoTag(`/product/${slug}`);

  const product = await getProductById(slug);

  return {
    title: seo?.title ?? product?.name,
    description: seo?.description ?? product?.description.slice(0, 150),
    keywords: seo?.keywords,
    openGraph: {
      title: seo?.og_title ?? product?.name,
      description: seo?.og_description ?? product?.description.slice(0, 150),
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
