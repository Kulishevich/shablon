import React from 'react';
import { ProductDescription } from '@/entities/product-description';
import { ProductInfo } from '@/entities/product-info';
import s from './ProductSection.module.scss';
import { ProductT } from '@/shared/api/product/types';

export const ProductSection = ({ product }: { product: ProductT }) => {
  return (
    <div className={s.container}>
      <span className="body_7">Артикул: {product?.sku}</span>
      <h1 className="h1">{product?.name}</h1>
      <ProductInfo product={product} />
      <ProductDescription description={product?.description || ''} />
    </div>
  );
};
