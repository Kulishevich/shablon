import { getCategoryByPath } from '@/shared/api/category/getCategoryByPath';
import { getProductById } from '@/shared/api/product/getProductById';
import { getSeoTag } from '@/shared/api/seo/getSeoTag';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import { Metadata } from 'next';
import { enrichProductWithFullPath, validateProductPath } from '@/shared/lib/utils/productUtils';
import { cookies } from 'next/headers';
import { geCategoryMask } from '@/shared/api/meta-tags/geCategoryMask';
import { getProductMask } from '@/shared/api/meta-tags/getProductMask';

interface LayoutProps {
  params: Promise<{ slug: string[] }>;
  children: ReactNode;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const cookieStore = await cookies();
  const variant = cookieStore.get('variant')?.value;

  const { slug } = await params;

  const { category } = await getCategoryByPath({ slugs: slug, variant });

  if (category) {
    const categoryMask = await geCategoryMask({ category, variant });

    return {
      title: categoryMask?.title || category.name,
      description: categoryMask?.description || category.description,
      keywords: categoryMask?.keywords,
      openGraph: {
        title: categoryMask?.title || category.name,
        description: categoryMask?.description || category.description,
      },
    };
  }

  const lastSlug = slug[slug.length - 1];
  let product = await getProductById({ id: lastSlug, variant });

  if (product) {
    product = await enrichProductWithFullPath({ product, variant });
    const productMask = await getProductMask({ product, variant });

    const isValidPath = await validateProductPath({ product, pathSlugs: slug, variant });

    if (!isValidPath) {
      return {
        title: 'Страница не найдена',
        description: 'Запрашиваемая страница не найдена',
      };
    }

    const seo = await getSeoTag({ tag: `/catalog/${slug.join('/')}`, variant });

    return {
      title: productMask?.title ?? seo?.title ?? product.name,
      description:
        productMask?.description ?? seo?.description ?? product.description.slice(0, 150),
      keywords: productMask?.keywords ?? seo?.keywords,
      openGraph: {
        title: productMask?.title ?? seo?.og_title ?? product.name,
        description:
          productMask?.description ?? seo?.og_description ?? product.description.slice(0, 150),
      },
    };
  }

  return {
    title: 'Страница не найдена',
  };
}

export default async function Layout({ params, children }: LayoutProps) {
  const cookieStore = await cookies();
  const variant = cookieStore.get('variant')?.value;

  const { slug } = await params;

  const { category } = await getCategoryByPath({ slugs: slug, variant });

  if (category) {
    return <>{children}</>;
  }

  const lastSlug = slug[slug.length - 1];
  let product = await getProductById({ id: lastSlug, variant });

  if (product) {
    product = await enrichProductWithFullPath({ product, variant });

    const isValidPath = await validateProductPath({ product, pathSlugs: slug, variant });

    if (!isValidPath) {
      notFound();
    }

    return <>{children}</>;
  }

  notFound();
}
