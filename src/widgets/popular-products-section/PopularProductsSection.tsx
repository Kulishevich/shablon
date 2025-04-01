import { ProductCard } from '@/entities/product-card';
import { Slider } from '@/shared/ui/slider';
import { Typography } from '@/shared/ui/typography';
import React from 'react';
import s from './PopularProductsSection.module.scss';

export const PopularProductsSection = () => {
  return (
    <div className={s.container}>
      <Typography variant="h2">Популярные товары</Typography>
      <Slider itemWidth={330}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Slider>
    </div>
  );
};
