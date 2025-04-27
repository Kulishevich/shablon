import React from 'react';
import s from './ProductInfo.module.scss';
import { Button } from '@/shared/ui/button';
import { DocumentIcon, HoursIcon, QualityStarIcon } from '@/shared/assets';
import { ProductsImages } from '@/features/product-images';
import { ProductType } from '@/shared/api/product/types';
import clsx from 'clsx';

export const ProductInfo = ({ product }: { product: ProductType | null }) => {
  const isDiscount = !!product?.discount;

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
            <p className={clsx('h2', isDiscount && s.discount)}>110 BYN</p>
            {isDiscount && <span className="discount">130 byn</span>}
          </div>
          <Button>В корзину</Button>
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
