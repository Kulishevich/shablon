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

export const CatalogSection = ({
  products,
  subcategoryId,
  category,
  page,
  brands,
}: {
  products: ProductsResponseT | null;
  subcategoryId?: number;
  category: CategoryT | null;
  page: string;
  brands: BrandT[];
}) => {
  return (
    <div className={s.container}>
      <h1 className="h1">{category?.name}</h1>
      <div className={s.navigation}>
        {category?.subcategories?.map((subcategory, index) => (
          <Link
            className={clsx(subcategoryId === subcategory.id && s.active, 'h3')}
            key={index}
            href={`${paths.catalog}/${category.slug}_${category.id}/${subcategory.slug}_${subcategory.id}`}
          >
            {subcategory.name}
          </Link>
        ))}
      </div>
      <div className={s.catalog}>
        <Filters brands={brands} />
        <div className={s.productsContainer}>
          <div className={s.search}>
            <CatalogSearch />
            <div className={s.selectContainer}>
              <SortSelect />
              <FiltersMobile />
            </div>
          </div>
          <div className={s.productList}>
            {products?.data?.map((product, index) => <ProductCard key={index} product={product} />)}
          </div>
          <div className={s.pagination}>
            <p className="body_7">Найдено по фильтрам: {products?.total || 0}</p>
            <Pagination totalPages={products?.last_page || 1} currentPage={page} />
          </div>
        </div>
      </div>
    </div>
  );
};
