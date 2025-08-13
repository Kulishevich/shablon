'use client';
import React, { useEffect, useState } from 'react';
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
import { PaymentAndDeliveryT } from '@/shared/api/delivery-and-payment/types';

export const ProductSection = ({
  product,
  reviews,
  advantages,
  deliveryAndPayment,
}: {
  product: ProductT;
  reviews: ReviewT[] | null;
  advantages: ProductAdvantageType[] | null;
  deliveryAndPayment: PaymentAndDeliveryT[] | null;
}) => {
  const [variant, setVariant] = useState<string | undefined>(undefined);

  useEffect(() => {
    const cookieVariant = Cookies.get('variant');
    setVariant(cookieVariant);
  }, []);

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
          <ProductDescription product={product} reviews={reviews} variant={variant} deliveryAndPayment={deliveryAndPayment}/>
        </ReduxProvider>
      </div>
    </>
  );
};
