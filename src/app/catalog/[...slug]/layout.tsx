import { getCategoryByPath } from '@/shared/api/category/getCategoryByPath';
import { getProductById } from '@/shared/api/product/getProductById';
import { getSeoTag } from '@/shared/api/seo/getSeoTag';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import { Metadata } from 'next';
import { enrichProductWithFullPath, validateProductPath } from '@/shared/lib/utils/productUtils';

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

  const { category } = await getCategoryByPath(slug);

  if (category) {
    return {
      title: `${category.name} - Каталог`,
      description: category.description || `Каталог товаров в категории ${category.name}`,
    };
  }

  const lastSlug = slug[slug.length - 1];
  let product = await getProductById(lastSlug);

  if (product) {
    product = await enrichProductWithFullPath(product);

    const isValidPath = await validateProductPath(product, slug);

    if (!isValidPath) {
      return {
        title: 'Страница не найдена',
        description: 'Запрашиваемая страница не найдена',
      };
    }

    const seo = await getSeoTag(`/catalog/${slug.join('/')}`);

    return {
      title: seo?.title ?? product.name,
      description: seo?.description ?? product.description.slice(0, 150),
      keywords: seo?.keywords,
      openGraph: {
        title: seo?.og_title ?? product.name,
        description: seo?.og_description ?? product.description.slice(0, 150),
      },
    };
  }

  return {
    title: 'Страница не найдена',
  };
}

export default async function Layout({ params, children }: LayoutProps) {
  const { slug } = await params;

  const { category } = await getCategoryByPath(slug);

  if (category) {
    return <>{children}</>;
  }

  const lastSlug = slug[slug.length - 1];
  let product = await getProductById(lastSlug);

  if (product) {
    product = await enrichProductWithFullPath(product);

    const isValidPath = await validateProductPath(product, slug);

    if (!isValidPath) {
      notFound();
    }

    return <>{children}</>;
  }

  notFound();
}
