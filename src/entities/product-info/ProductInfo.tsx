import React from 'react';
import s from './ProductInfo.module.scss';
import { DocumentIcon, HoursIcon, QualityStarIcon } from '@/shared/assets';
import { ProductsImages } from '@/features/product-images';
import { ProductT } from '@/shared/api/product/types';
import clsx from 'clsx';
import { ProductButton } from '@/features/product-button';

export const ProductInfo = ({ product }: { product: ProductT }) => {
  const isDiscount = !!Number(product?.discount);

  const totalPrice = !!product?.discount
    ? Math.round((Number(product?.price) * (100 - Number(product?.discount))) / 100)
    ? Math.round((Number(product?.price) * (100 - Number(product?.discount))) / 100)
    : product?.price;

  return (
    <div className={s.container}>
      <ProductsImages product={product} />

      <div className={s.characteristics}>
        <h5 className="h5">Характеристики:</h5>
        <div>
          <ul>
            {product?.specifications?.map((elem) => (
              <li className="body_3">
                {elem?.name} : {elem?.pivot?.value}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={s.price}>
        <div className={s.priceContainer}>
          <div className={s.totalPrice}>
            <p className={clsx('h2', isDiscount && s.discount)}>{totalPrice} BYN</p>
            {isDiscount && <span className="discount">{product?.price} byn</span>}
          </div>
          <ProductButton product={product} />
        </div>

        <div className={s.details}>
          <p className="body_7">
            <HoursIcon width={24} height={24} />
            14 дней на обмен и возврат
          </p>
          <p className="body_7">
            <DocumentIcon width={24} height={24} />
            Гарантия 1 месяц
          </p>
          <p className="body_7">
            <QualityStarIcon width={24} height={24} />
            Товар сертифицирован
          </p>
        </div>
      </div>
    </div>
  );
};
