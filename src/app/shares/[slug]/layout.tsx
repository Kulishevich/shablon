import { getSeoTag } from '@/shared/api/seo/getSeoTag';

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  const seo = await getSeoTag(`/shares/${slug}`);

  return {
    title: seo?.title ?? 'Акции',
    description: seo?.description ?? 'Акции',
    keywords: seo?.keywords,
    openGraph: {
      title: seo?.og_title ?? 'Акции',
      description: seo?.og_description ?? 'Акции',
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
