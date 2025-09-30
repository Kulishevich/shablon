import { ISitemapField } from 'next-sitemap';
import { CategoryT } from './types';
import { getSiteUrl } from '../base';

export type CategoryWithSubcategories = Omit<CategoryT, 'subcategories'> & {
  subcategories?: CategoryWithSubcategories[];
};

export const processCategoryTree = async (categories: CategoryWithSubcategories[], parentPath: string = ''): Promise<ISitemapField[]> => {
  let fields: ISitemapField[] = [];
  const siteUrl = await getSiteUrl();

  for (const category of categories) {
    const currentPath = parentPath ? `${parentPath}/${category.slug}` : category.slug;

    fields.push({
      loc: `${siteUrl}catalog/${currentPath}`,
      lastmod: new Date(category.updated_at || new Date()).toISOString(),
      changefreq: 'daily' as const,
      priority: 0.8,
    });

    if (category.subcategories && category.subcategories.length > 0) {
      const subcategoryFields = await processCategoryTree(category.subcategories, currentPath);
      fields = [...fields, ...subcategoryFields];
    }
  }

  return fields;
}; 