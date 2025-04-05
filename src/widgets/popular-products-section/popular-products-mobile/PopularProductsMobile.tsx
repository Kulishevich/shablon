import React from 'react';
import s from './PopularProductsMobile.module.scss';
import { Typography } from '@/shared/ui/typography';
import { ProductCard } from '@/entities/product-card';

export const PopularProductsMobile = () => {
  return (
    <div className={s.container}>
      <Typography variant="h2">Популярные товары</Typography>
      <div className={s.productsContainer}>
        {new Array(4).fill('').map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </div>
  );
};
