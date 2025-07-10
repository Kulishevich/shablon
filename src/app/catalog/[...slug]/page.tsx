import { CatalogSection } from '@/widgets/catalog-section';
import { PreviouslyViewed } from '@/features/previously-viewed';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { getProducts } from '@/shared/api/product/getProducts';
import { Feedback } from '@/widgets/feedback/Feedback';
import { getCategoryBySlug } from '@/shared/api/category/getCategoryBySlug';
import { paths } from '@/shared/config/constants/paths';
import { getBrands } from '@/shared/api/brands/getBrands';
import { getProductsWithoutPagination } from '@/shared/api/product/getProductsWithoutPagination';
import { CanonicalLink } from '@/shared/ui/canonical-link';
import { notFound } from 'next/navigation';
import { CategoryT } from '@/shared/api/category/types';

// Функция для получения полного пути категории
async function getCategoryPath(slug: string): Promise<CategoryT[]> {
  const category = await getCategoryBySlug(slug);
  if (!category) return [];

  const path: CategoryT[] = [category];

  // Рекурсивно получаем родительские категории
  if (category.parent_id) {
    const parentCategory = await getCategoryBySlug(category.parent_id);
    if (parentCategory) {
      const parentPath = await getCategoryPath(parentCategory.slug);
      path.unshift(...parentPath);
    }
  }

  return path;
}

// Функция для проверки валидности пути категорий
async function validateCategoryPath(
  slugs: string[]
): Promise<{ isValid: boolean; categories: CategoryT[] }> {
  const categories: CategoryT[] = [];

  for (let i = 0; i < slugs.length; i++) {
    const category = await getCategoryBySlug(slugs[i]);
    if (!category) {
      return { isValid: false, categories: [] };
    }

    // Проверяем, что текущая категория является дочерней для предыдущей
    if (i > 0) {
      const parentCategory = categories[i - 1];
      if (category.parent_id !== parentCategory.id.toString()) {
        return { isValid: false, categories: [] };
      }
    } else {
      // Первая категория должна быть корневой (parent_id = null)
      if (category.parent_id !== null) {
        return { isValid: false, categories: [] };
      }
    }

    categories.push(category);
  }

  return { isValid: true, categories };
}

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
  const { slug: slugs } = await params;
  const { page, sort_by, sort_direction, search, price_from, price_to, brand } = await searchParams;

  // Проверяем валидность пути категорий
  const { isValid, categories } = await validateCategoryPath(slugs);

  if (!isValid || categories.length === 0) {
    notFound();
  }

  // Текущая категория - последняя в пути
  const currentCategory = categories[categories.length - 1];

  // Получаем продукты для текущей категории
  const products = await getProducts({
    category_id: currentCategory.id.toString(),
    page,
    sort_by,
    sort_direction,
    search,
    price_from,
    price_to,
    brand,
  });

  const allBrands = await getBrands();
  const allProducts = await getProductsWithoutPagination({
    category_id: currentCategory.id.toString(),
    search,
  });

  const prices = allProducts?.map((product) => Number(product.price)) ?? [];
  const minPrice = prices.length > 0 ? Math.min(...prices) : 0;
  const maxPrice = prices.length > 0 ? Math.max(...prices) : 0;

  // Строим breadcrumbs на основе полного пути категорий
  const breadcrumbsPath = categories.map((category, index) => ({
    title: category.name,
    path: `${paths.catalog}/${slugs.slice(0, index + 1).join('/')}`,
  }));

  const canonicalPath = `/catalog/${slugs.join('/')}`;

  return (
    <>
      <CanonicalLink href={canonicalPath} />
      <Breadcrumbs dynamicPath={breadcrumbsPath} />
      <main>
        <CatalogSection
          products={products}
          category={currentCategory}
          page={page || '1'}
          brands={allBrands || []}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />
        <PreviouslyViewed />
        <Feedback />
      </main>
    </>
  );
}
