import { getCategoryByPath } from '@/shared/api/category/getCategoryByPath';
import { getProductById } from '@/shared/api/product/getProductById';
import { getSeoTag } from '@/shared/api/seo/getSeoTag';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import { Metadata } from 'next';
import { enrichProductWithFullPath, validateProductPath } from '@/shared/lib/utils/productUtils';
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
  const { slug } = await params;

  const { category } = await getCategoryByPath({ slugs: slug });

  if (category) {
    const seo = await getSeoTag({ tag: category.slug });
    const categoryMask = await geCategoryMask({ category });

    return {
      title: seo?.title || categoryMask?.title || category.name,
      description:
        seo?.description || categoryMask?.description || category.description.slice(0, 150),
      keywords: seo?.keywords || categoryMask?.keywords,
      openGraph: {
        title: seo?.og_title || categoryMask?.title || category.name,
        description:
          seo?.og_description || categoryMask?.description || category.description.slice(0, 150),
      },
    };
  }

  const lastSlug = slug[slug.length - 1];
  let product = await getProductById({ id: lastSlug });

  if (product) {
    product = await enrichProductWithFullPath({ product });
    const seo = await getSeoTag({ tag: product.slug });
    const productMask = await getProductMask({ product });

    const isValidPath = await validateProductPath({ product, pathSlugs: slug });

    if (!isValidPath) {
      return {
        title: 'Страница не найдена',
        description: 'Запрашиваемая страница не найдена',
      };
    }

    return {
      title: seo?.title ?? productMask?.title ?? product.name,
      description:
        seo?.description ?? productMask?.description ?? product.description.slice(0, 150),
      keywords: seo?.keywords ?? productMask?.keywords,
      openGraph: {
        title: seo?.og_title ?? productMask?.title ?? product.name,
        description:
          seo?.og_description ?? productMask?.description ?? product.description.slice(0, 150),
      },
    };
  }

  return {
    title: 'Страница не найдена',
  };
}

export default async function Layout({ params, children }: LayoutProps) {
  const { slug } = await params;

  const { category } = await getCategoryByPath({ slugs: slug });

  if (category) {
    return <>{children}</>;
  }

  const lastSlug = slug[slug.length - 1];
  let product = await getProductById({ id: lastSlug });

  if (product) {
    product = await enrichProductWithFullPath({ product });

    const isValidPath = await validateProductPath({ product, pathSlugs: slug });

    if (!isValidPath) {
      notFound();
    }

    return <>{children}</>;
  }

  notFound();
}
