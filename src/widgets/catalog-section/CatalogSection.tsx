import React from 'react';
import s from './CatalogSection.module.scss';
import clsx from 'clsx';
import { ProductCard } from '@/entities/product-card';
import { Pagination } from '@/shared/ui/pagination';
import { Filters } from '@/features/filters';
import { FiltersMobile } from '@/features/filters-mobile';
import { ProductsResponseT } from '@/shared/api/product/types';
import { CategoryT } from '@/shared/api/category/types';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';
import { SortSelect } from '@/features/sort-select';
import { CatalogSearch } from '@/features/catalog-search';
import { BrandT } from '@/shared/api/brands/types';
import { SeoBlock } from '@/entities/seo-block';
import { ReduxProvider } from '@/shared/lib/redux/providers/ReduxProvider';
import { buildCategoryUrlFromSlugs } from '@/shared/lib/utils/categoryUtils';
export const CatalogSection = ({
  products,
  subcategoryId,
  category,
  page,
  brands,
  minPrice,
  maxPrice,
  categoryPath,
}: {
  products: ProductsResponseT | null;
  subcategoryId?: number;
  category: CategoryT | null;
  page: string;
  brands: BrandT[];
  minPrice: number;
  maxPrice: number;
  categoryPath?: CategoryT[];
}) => {
  return (
    <div className={s.container}>
      <h1 className="h1">{category?.name}</h1>
      <div className={s.navigation}>
        {category?.subcategories?.map((subcategory, index) => {
          // Формируем путь для подкатегории на основе текущего пути
          const currentSlugs = categoryPath?.map((cat) => cat.slug) || [category?.slug || ''];
          const subcategorySlugs = [...currentSlugs, subcategory.slug];
          const subcategoryUrl = buildCategoryUrlFromSlugs(subcategorySlugs);

          return (
            <Link
              className={clsx(subcategoryId === subcategory.id && s.active, 'h3')}
              key={index}
              href={subcategoryUrl}
            >
              {subcategory.name}
            </Link>
          );
        })}
      </div>
      <div className={s.catalog}>
        <Filters brands={brands} min={minPrice} max={maxPrice} />
        <div className={s.productsContainer}>
          <div className={s.search}>
            <CatalogSearch />
            <div className={s.selectContainer}>
              <SortSelect />
              <FiltersMobile brands={brands} min={minPrice} max={maxPrice} />
            </div>
          </div>
          <div className={s.productList} itemScope itemType="http://schema.org/ItemList">
            <ReduxProvider>
              {products?.data?.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </ReduxProvider>
          </div>
          <div className={s.pagination}>
            <p className="body_7">Всего продуктов: {products?.total || 0}</p>
            <Pagination totalPages={products?.last_page || 1} currentPage={page} />
          </div>
          <SeoBlock page={`catalog`} align="left" />
        </div>
      </div>
    </div>
  );
};
