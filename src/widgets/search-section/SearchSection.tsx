import React from 'react';
import s from './SearchSection.module.scss';
import { ProductCard } from '@/entities/product-card';
import { Pagination } from '@/shared/ui/pagination';
import { Filters } from '@/features/filters';
import { FiltersMobile } from '@/features/filters-mobile';
import { ProductsResponseT } from '@/shared/api/product/types';
import { SortSelect } from '@/features/sort-select';
import { SearchPageSearch } from '@/features/search-page-search';
import { BrandT } from '@/shared/api/brands/types';
import { SeoBlock } from '@/entities/seo-block';
import { ReduxProvider } from '@/shared/lib/redux/providers/ReduxProvider';

export const SearchSection = ({
  products,
  searchQuery,
  page,
  brands,
  minPrice,
  maxPrice,
}: {
  products: ProductsResponseT | null;
  searchQuery: string;
  page: string;
  brands: BrandT[];
  minPrice: number;
  maxPrice: number;
}) => {
  return (
    <div className={s.container}>
      <h1 className="h1">Результаты поиска по запросу "{searchQuery}"</h1>

      <div className={s.catalog}>
        <Filters brands={brands} min={minPrice} max={maxPrice} />
        <div className={s.productsContainer}>
          <div className={s.search}>
            <SearchPageSearch />
            <div className={s.selectContainer}>
              <SortSelect />
              <FiltersMobile brands={brands} min={minPrice} max={maxPrice} />
            </div>
          </div>

          {products?.data && products.data.length > 0 ? (
            <>
              <div className={s.productList} itemScope itemType="http://schema.org/ItemList">
                <ReduxProvider>
                  {products.data.map((product, index) => (
                    <ProductCard key={index} product={product} />
                  ))}
                </ReduxProvider>
              </div>
              <div className={s.pagination}>
                <p className="body_7">Всего продуктов: {products.total || 0}</p>
                <Pagination totalPages={products.last_page || 1} currentPage={page} />
              </div>
            </>
          ) : (
            <div className={s.noResults}>
              <p className="h3">По вашему запросу "{searchQuery}" ничего не найдено</p>
              <p className="body_4">Попробуйте изменить запрос или воспользуйтесь фильтрами</p>
            </div>
          )}

          <SeoBlock page={`search`} align="left" />
        </div>
      </div>
    </div>
  );
};
