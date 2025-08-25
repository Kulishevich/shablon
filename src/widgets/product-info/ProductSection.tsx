'use client';
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
import { PaymentAndDeliveryT } from '@/shared/api/delivery-and-payment/types';
import Script from 'next/script';
import { createProductJsonLd } from '@/shared/lib/utils/createJsonLd';
import { useRuntimeConfig } from '@/shared/lib/hooks/useRuntimeConfig';

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
  const { storeUrl } = useRuntimeConfig();

  return (
    <div className={s.container}>
      {/* JSON-LD микроразметка для продукта */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: createProductJsonLd(product, reviews),
        }}
      />
      <div className={s.header}>
        <h1 className="h3" itemProp="name">
          {product?.name}
        </h1>
        <div className={clsx(s.sku, 'body_5')}>
          Артикул: <span>{product?.sku}</span>
        </div>
        {product?.brand && (
          <span itemProp="brand" content={product?.brand?.name}>
            <Image
              src={`${storeUrl}/${product?.brand?.image_path}`}
              alt={product?.brand?.name}
              width={55}
              height={55}
            />
          </span>
        )}
      </div>
      <div className={s.container}>
        <ReduxProvider>
          <ProductInfo product={product} advantages={advantages} />
          <ProductDescription
            product={product}
            reviews={reviews}
            deliveryAndPayment={deliveryAndPayment}
            storeUrl={storeUrl}
          />
        </ReduxProvider>
      </div>
    </div>
  );
};
