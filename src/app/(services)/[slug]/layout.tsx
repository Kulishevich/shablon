import { getSeoTag } from '@/shared/api/seo/getSeoTag';
import { getServiceBySlug } from '@/shared/api/services/getServiceBySlug';
import { getServices } from '@/shared/api/services/getServices';

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const seo = await getSeoTag({ tag: `/${slug}` });
  const service = await getServiceBySlug({ slug });

  if (service) {
    return {
      title: seo?.title ?? service?.title,
      description: seo?.description ?? service?.subtitle?.slice(0, 150),
      keywords: seo?.keywords || [],
      openGraph: {
        title: seo?.og_title ?? service?.title,
        description: seo?.og_description ?? service?.subtitle?.slice(0, 150),
      },
    };
  }

  return {};
};

export const generateStaticParams = async () => {
  const services = await getServices();
  return services?.map((service) => ({ slug: service.slug })) || [];
};

export const dynamicParams = false;

export default async function ServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
