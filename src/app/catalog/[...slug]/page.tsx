import { CatalogSection } from '@/widgets/catalog-section';
import { PreviouslyViewed } from '@/features/previously-viewed';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { getProducts } from '@/shared/api/product/getProducts';
import { Feedback } from '@/widgets/feedback/Feedback';
import { getCategoryByPath } from '@/shared/api/category/getCategoryByPath';
import { getBrands } from '@/shared/api/brands/getBrands';
import { getProductsWithoutPagination } from '@/shared/api/product/getProductsWithoutPagination';
import { CanonicalLink } from '@/shared/ui/canonical-link';
import { notFound } from 'next/navigation';
import { getProductById } from '@/shared/api/product/getProductById';
import { ProductSection } from '@/widgets/product-info';
import { SeoBlock } from '@/entities/seo-block';
import { getReviews } from '@/shared/api/reviews/getReviews';
import { paths } from '@/shared/config/constants/paths';
import { CategoryT } from '@/shared/api/category/types';
import { ProductT } from '@/shared/api/product/types';
import {
  validateProductPath,
  buildProductPath,
  getCategoriesFromProductPath,
  enrichProductWithFullPath,
  enrichProductsWithFullPath,
} from '@/shared/lib/utils/productUtils';

export default async function Catalog({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<{
    page?: string;
    sort_direction?: string;
    sort_by?: string;
    search?: string;
    price_from?: string;
    price_to?: string;
    brand?: string;
  }>;
}) {
  const { slug } = await params;
  const { page, sort_by, sort_direction, search, price_from, price_to, brand } = await searchParams;

  // Сначала пробуем найти категорию
  const { category, categoryPath } = await getCategoryByPath(slug);

  if (category) {
    // Если категория найдена, показываем каталог
    return await renderCatalogSection({
      category,
      categoryPath,
      page,
      sort_by,
      sort_direction,
      search,
      price_from,
      price_to,
      brand,
      slug,
    });
  }

  // Если категория не найдена, пробуем найти продукт по последнему slug
  const lastSlug = slug[slug.length - 1];
  let product = await getProductById(lastSlug);

  if (product) {
    // Обогащаем продукт полным путем
    product = await enrichProductWithFullPath(product);

    // Проверяем корректность пути до продукта
    const isValidPath = await validateProductPath(product, slug);

    if (!isValidPath) {
      // Если путь неверный, показываем 404
      notFound();
    }

    // Если продукт найден и путь корректный, показываем страницу продукта
    return await renderProductSection(product, slug);
  }

  // Если ни категория, ни продукт не найдены - 404
  notFound();
}

async function renderCatalogSection({
  category,
  categoryPath,
  page,
  sort_by,
  sort_direction,
  search,
  price_from,
  price_to,
  brand,
  slug,
}: {
  category: CategoryT;
  categoryPath: CategoryT[];
  page?: string;
  sort_by?: string;
  sort_direction?: string;
  search?: string;
  price_from?: string;
  price_to?: string;
  brand?: string;
  slug: string[];
}) {
  // Получаем продукты для данной категории
  const products = await getProducts({
    category_id: category.id.toString(),
    page,
    sort_by,
    sort_direction,
    search,
    price_from,
    price_to,
    brand,
  });

  // Обогащаем продукты полным путем
  if (products?.data) {
    products.data = await enrichProductsWithFullPath(products.data);
  }

  const allBrands = await getBrands();
  const allProducts = await getProductsWithoutPagination({
    category_id: category.id.toString(),
    search,
  });

  const prices = allProducts?.map((product) => Number(product.price)) ?? [];
  const maxPrice = prices.length > 0 ? Math.max(...prices) : 0;

  // Формируем breadcrumbs на основе пути категорий
  const breadcrumbsPath = [
    ...categoryPath.map((cat) => ({
      title: cat.name,
      path: `/${cat.slug}`,
    })),
  ];

  // Формируем канонический URL
  const canonicalUrl = `/catalog/${slug.join('/')}`;
  console.log(canonicalUrl);

  return (
    <>
      <CanonicalLink href={canonicalUrl} />
      <Breadcrumbs dynamicPath={breadcrumbsPath} />
      <main>
        <CatalogSection
          products={products}
          category={category}
          page={page || '1'}
          brands={allBrands || []}
          minPrice={0}
          maxPrice={maxPrice}
          categoryPath={categoryPath}
        />
        <PreviouslyViewed />
        <SeoBlock page={canonicalUrl} />
        <Feedback />
      </main>
    </>
  );
}

async function renderProductSection(product: ProductT, slug: string[]) {
  const reviews = await getReviews();

  const categoriesPath = await getCategoriesFromProductPath(product);

  const breadcrumbsPath = [
    ...categoriesPath.map((category) => ({
      title: category.name,
      path: `/${category.slug}`,
    })),
    {
      title: product.name,
      path: `/${product.slug}`,
    },
  ];

  const canonicalUrl = `/catalog/${slug.join('/')}`;
  return (
    <>
      <CanonicalLink href={canonicalUrl} />
      <Breadcrumbs dynamicPath={breadcrumbsPath} />
      <main>
        <ProductSection product={product} reviews={reviews} />
        <PreviouslyViewed />
        <SeoBlock page={canonicalUrl} />
        <Feedback />
      </main>
    </>
  );
}
