import React, { useState } from 'react';
import s from './ProductInfo.module.scss';
import { Button } from '@/shared/ui/button';
import { DocumentIcon, HoursIcon, QualityStarIcon } from '@/shared/assets';
import { ProductsImages } from '@/features/product-images';

export const ProductInfo = () => {
  return (
    <div className={s.container}>
      <ProductsImages />

      <div className={s.characteristics}>
        <h5 className="h5">Характеристики:</h5>
        <div>
          <p className="body_3">
            Удобный и стильный ковёр, который приятно освежат интерьер:
          </p>
          <ul>
            <li className="body_3">Описание товара</li>
            <li className="body_3">Описание товара</li>
            <li className="body_3">Описание товара</li>
            <li className="body_3">Описание товара</li>
          </ul>
        </div>
      </div>

      <div className={s.price}>
        <div className={s.priceContainer}>
          <div className={s.totalPrice}>
            <h2 className="h2">110 BYN</h2>
            <span className="discount">130 byn</span>
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
