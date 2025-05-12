import React from 'react';
import { ProductDescription } from '@/entities/product-description';
import { ProductInfo } from '@/entities/product-info';
import s from './ProductSection.module.scss';
import { ProductT } from '@/shared/api/product/types';
import clsx from 'clsx';
export const ProductSection = ({ product }: { product: ProductT }) => {
  return (
    <div className={s.container}>
      <div className={clsx(s.sku, 'body_7')}>
        Артикул: <span>{product?.sku}</span>
      </div>
      <h1 className="h1">{product?.name}</h1>
      <div className={clsx(s.sku, s.sku_mobile, 'body_7')}>
        Артикул: <span>{product?.sku}</span>
      </div>
      <ProductInfo product={product} />
      <ProductDescription description={product?.description || ''} />
    </div>
  );
};
