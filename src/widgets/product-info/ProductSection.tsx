import React from 'react';
import { ProductDescription } from '@/entities/product-description';
import { ProductInfo } from '@/entities/product-info';
import s from './ProductSection.module.scss';
import { ProductT } from '@/shared/api/product/types';
import clsx from 'clsx';
import { ReviewT } from '@/shared/api/reviews/types';
import { ReduxProvider } from '@/shared/lib/redux/providers/ReduxProvider';
import Image from 'next/image';

export const ProductSection = ({
  product,
  reviews,
}: {
  product: ProductT;
  reviews: ReviewT[] | null;
}) => {
  return (
    <>
      <div className={s.header}>
        <h1 className="h3" itemProp="name">
          {product?.name}
        </h1>
        <div className={clsx(s.sku, 'body_5')}>
          Артикул: <span>{product?.sku}</span>
        </div>
        {product?.brand && (
          <Image
            src={`${process.env.NEXT_PUBLIC_STORE_URL}/${product?.brand?.image_path}`}
            alt={product?.brand?.name}
            width={55}
            height={55}
          />
        )}
      </div>
      <div className={s.container} itemScope itemType="http://schema.org/Product">
        <ReduxProvider>
          <ProductInfo product={product} />
          <ProductDescription product={product} reviews={reviews} />
        </ReduxProvider>
      </div>
    </>
  );
};
