import React from 'react';
import s from './SearchPopup.module.scss';
import { SearchProductCard } from '../search-product-card';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';

const categories = ['Мебель', 'Фурнитура', 'Декор для дома'];

const products = [
  {
    id: 1,
    name: 'Ковёр "Valencia"',
    articul: '12345',
    image_path: '/product.png',
    price: 130,
    priceWithDiscount: null,
  },
  {
    id: 2,
    name: 'Ковёр "Valencia"',
    articul: '12345',
    image_path: '/product.png',
    price: 130,
    priceWithDiscount: 110,
  },
  {
    id: 3,
    name: 'Ковёр "Valencia"',
    articul: '12345',
    image_path: '/product.png',
    price: 130,
    priceWithDiscount: null,
  },
];

export const SearchPopup = () => {
  return (
    <div className={s.content}>
      <div className={s.categories}>
        <h6 className="h6">Поиск по категориям:</h6>
        {categories.map((category, index) => (
          <Link href={`${paths.catalog}`} className="body_4" key={index}>
            {category}
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
