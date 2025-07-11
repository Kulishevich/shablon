import { ProductT } from '@/shared/api/product/types';
import { CategoryT } from '@/shared/api/category/types';
import { getCategoriesTree } from '@/shared/api/category/getCategoriesTree';

/**
 * Строит полный путь до продукта через все родительские категории
 */
export const buildProductPath = async (product: ProductT): Promise<string[]> => {
  const categoriesTree = await getCategoriesTree();

  if (!categoriesTree) {
    return [product.slug];
  }

  // Находим полный путь до категории продукта
  const categoryPath = findCategoryPath(categoriesTree, product.category_id);

  // Возвращаем путь: [категория1, категория2, ..., продукт]
  return [...categoryPath.map(cat => cat.slug), product.slug];
};

/**
 * Находит полный путь до категории по её ID
 */
function findCategoryPath(categories: CategoryT[], targetCategoryId: number): CategoryT[] {
  for (const category of categories) {
    if (category.id === targetCategoryId) {
      return [category];
    }

    if (category.subcategories && category.subcategories.length > 0) {
      const path = findCategoryPath(category.subcategories as CategoryT[], targetCategoryId);
      if (path.length > 0) {
        return [category, ...path];
      }
    }
  }

  return [];
}

/**
 * Проверяет корректность пути до продукта
 */
export const validateProductPath = async (
  product: ProductT,
  pathSlugs: string[]
): Promise<boolean> => {
  const correctPath = await buildProductPath(product);

  // Проверяем, что пути совпадают
  return correctPath.length === pathSlugs.length &&
    correctPath.every((slug, index) => slug === pathSlugs[index]);
};

/**
 * Формирует URL для продукта
 */
export const buildProductUrl = async (product: ProductT): Promise<string> => {
  const pathSlugs = await buildProductPath(product);
  return `/catalog/${pathSlugs.join('/')}`;
};

/**
 * Получает информацию о категориях по пути до продукта
 */
export const getCategoriesFromProductPath = async (
  product: ProductT
): Promise<CategoryT[]> => {
  const categoriesTree = await getCategoriesTree();

  if (!categoriesTree) {
    return [];
  }

  // Находим полный путь до категории продукта
  return findCategoryPath(categoriesTree, product.category_id);
};

/**
 * Строит синхронный путь до продукта
 */
export const buildProductUrlSync = (product: ProductT, categoriesTree?: CategoryT[]): string => {
  // Если у продукта уже есть полный путь, используем его
  if (product.fullPath && product.fullPath.length > 0) {
    return `/catalog/${product.fullPath.join('/')}`;
  }

  if (!categoriesTree) {
    // Fallback: используем только непосредственную категорию
    return `/catalog/${product.category.slug}/${product.slug}`;
  }

  // Находим полный путь до категории продукта
  const categoryPath = findCategoryPath(categoriesTree, product.category_id);

  // Формируем полный путь: [категория1, категория2, ..., продукт]
  const fullPath = [...categoryPath.map(cat => cat.slug), product.slug];

  return `/catalog/${fullPath.join('/')}`;
};

/**
 * Асинхронная версия для клиентских компонентов
 * Автоматически загружает дерево категорий
 */
export const buildProductUrlAsync = async (product: ProductT): Promise<string> => {
  const categoriesTree = await getCategoriesTree();
  return buildProductUrlSync(product, categoriesTree || undefined);
};

/**
 * Обогащает продукт полным путем до него
 */
export const enrichProductWithFullPath = async (product: ProductT): Promise<ProductT> => {
  const fullPath = await buildProductPath(product);
  return {
    ...product,
    fullPath,
  };
};

/**
 * Обогащает массив продуктов полным путем до каждого
 */
export const enrichProductsWithFullPath = async (products: ProductT[]): Promise<ProductT[]> => {
  const categoriesTree = await getCategoriesTree();

  if (!categoriesTree) {
    return products.map(product => ({
      ...product,
      fullPath: [product.slug],
    }));
  }

  return products.map(product => {
    const categoryPath = findCategoryPath(categoriesTree, product.category_id);
    const fullPath = [...categoryPath.map(cat => cat.slug), product.slug];

    return {
      ...product,
      fullPath,
    };
  });
}; 