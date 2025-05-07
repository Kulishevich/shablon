import React from 'react';
import s from './SearchPopup.module.scss';
import { SearchProductCard } from '../search-product-card';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';
import { CategoryT } from '@/shared/api/category/types';
import { ProductT } from '@/shared/api/product/types';

export const SearchPopup = ({
  categories,
  products,
}: {
  categories: CategoryT[];
  products: ProductT[];
}) => {
  return (
    <div className={s.content}>
      <div className={s.categories}>
        <h6 className="h6">Поиск по категориям:</h6>
        {categories.map((category, index) => (
          <Link
            href={`${paths.catalog}/${category.slug}_${category.id}`}
            className="body_4"
            key={index}
          >
            {category.name}
          </Link>
        ))}
      </div>
      <div className={s.products}>
        <h6 className="h6">Поиск по товарам:</h6>
        {products.map((product) => (
          <SearchProductCard {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
