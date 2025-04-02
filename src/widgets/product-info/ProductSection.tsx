import React from 'react';
import { Typography } from '@/shared/ui/typography';
import { ProductDescription } from '@/entities/product-description';
import s from './ProductSection.module.scss';
import { ProductInfo } from '@/entities/product-info';

export const ProductSection = () => {
  return (
    <div className={s.container}>
      <Typography variant="body_7">Артикул: 12345</Typography>
      <Typography variant="h1" as="h1">
        Ковёр “Valencia”
      </Typography>
      <ProductInfo />
      <ProductDescription />
    </div>
  );
};
