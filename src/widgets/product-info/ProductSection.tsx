import React from 'react';
import { ProductDescription } from '@/entities/product-description';
import { ProductInfo } from '@/entities/product-info';
import s from './ProductSection.module.scss';
import { ProductT } from '@/shared/api/product/types';
import clsx from 'clsx';
import { ReviewT } from '@/shared/api/reviews/types';
import { ReduxProvider } from '@/shared/lib/redux/providers/ReduxProvider';

export const ProductSection = ({
  product,
  reviews,
}: {
  product: ProductT;
  reviews: ReviewT[] | null;
}) => {
  return (
    <div className={s.container} itemScope itemType="http://schema.org/Product">
      <ReduxProvider>
        <ProductInfo product={product} />
        <ProductDescription product={product} reviews={reviews} />
      </ReduxProvider>
    </div>
  );
};
