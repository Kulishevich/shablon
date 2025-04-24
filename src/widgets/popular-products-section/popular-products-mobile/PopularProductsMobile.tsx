import React from 'react';
import s from './PopularProductsMobile.module.scss';
import { ProductCard } from '@/entities/product-card';

export const PopularProductsMobile = () => {
  return (
    <div className={s.container}>
      <h2 className="h2">Популярные товары</h2>
      <div className={s.productsContainer}>
        {new Array(4).fill('').map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </div>
  );
};
