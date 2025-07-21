import React from 'react';
import { ProductDescription } from '@/entities/product-description';
import { ProductInfo } from '@/entities/product-info';
import s from './ProductSection.module.scss';
import { ProductT } from '@/shared/api/product/types';
import clsx from 'clsx';
import { ReviewT } from '@/shared/api/reviews/types';
import { ReduxProvider } from '@/shared/lib/redux/providers/ReduxProvider';
import Image from 'next/image';
import { ProductAdvantageType } from '@/shared/api/advantages/types';
import { getStoreBaseUrl } from '@/shared/lib/utils/getBaseUrl';
import Cookies from 'js-cookie';

export const ProductSection = ({
  product,
  reviews,
  advantages,
}: {
  product: ProductT;
  reviews: ReviewT[] | null;
  advantages: ProductAdvantageType[] | null;
}) => {
  const variant = Cookies.get('variant');
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
            src={`${getStoreBaseUrl(variant)}/${product?.brand?.image_path}`}
            alt={product?.brand?.name}
            width={55}
            height={55}
          />
        )}
      </div>
      <div className={s.container} itemScope itemType="http://schema.org/Product">
        <ReduxProvider>
          <ProductInfo product={product} advantages={advantages} />
          <ProductDescription product={product} reviews={reviews} />
        </ReduxProvider>
      </div>
    </>
  );
};
