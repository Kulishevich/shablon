import React from 'react';
import s from './SearchPopup.module.scss';
import { Typography } from '@/shared/ui/typography';
import { SearchProductCard } from '../search-product-card';

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
        <Typography variant="h6">Поиск по категориям:</Typography>
        {categories.map((category, index) => (
          <Typography variant="body_4" key={index}>
            {category}
          </Typography>
        ))}
      </div>
      <div className={s.products}>
        <Typography variant="h6">Поиск по товарам:</Typography>
        {products.map((product) => (
          <SearchProductCard {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
