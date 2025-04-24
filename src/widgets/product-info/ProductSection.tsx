import React from 'react';
import { ProductDescription } from '@/entities/product-description';
import { ProductInfo } from '@/entities/product-info';
import s from './ProductSection.module.scss';

export const ProductSection = () => {
  return (
    <div className={s.container}>
      <span className="body_7">Артикул: 12345</span>
      <h1 className="h1">Ковёр “Valencia”</h1>
      <ProductInfo />
      <ProductDescription />
    </div>
  );
};
