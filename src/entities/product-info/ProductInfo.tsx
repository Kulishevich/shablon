'use client';
import React, { useState } from 'react';
import s from './ProductInfo.module.scss';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  DocumentIcon,
  HoursIcon,
  QualityStarIcon,
} from '@/shared/assets';
import { ProductsImages } from '@/features/product-images';
import { ProductT } from '@/shared/api/product/types';
import clsx from 'clsx';
import { TextField } from '@/shared/ui/text-field';
import { Button } from '@/shared/ui/button';
import { useDispatch } from 'react-redux';
import { addInCart } from '@/shared/lib/redux/slices/cartSlice';
import { showToast } from '@/shared/ui/toast';

export const ProductInfo = ({ product }: { product: ProductT }) => {
  const [count, setCount] = useState(1);
  const isDiscount = !!Number(product?.discount);
  const dispatch = useDispatch();

  const totalPrice = !!product?.discount
    ? Math.round((Number(product?.price) * (100 - Number(product?.discount))) / 100)
    : product?.price;

  const changeCountValue = (value: string) => {
    const numericValue = value.replace(/\D/g, '');
    const number = Number(numericValue);
    if (number >= 1 || numericValue === '') {
      setCount(number || 1);
    }
  };

  const handleAddInCard = () => {
    dispatch(addInCart({ ...product, quantity: count }));
    showToast({ title: 'Добавлено в корзину', variant: 'success' });
  };

  const increment = () => {
    setCount((prev) => ++prev);
  };

  const decrement = () => {
    setCount((prev) => Math.max(--prev, 1));
  };

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
          <div className={s.countContainer}>
            <Button variant="icon" onClick={decrement}>
              <ArrowLeftIcon />
            </Button>
            <TextField
              className={s.input}
              value={count}
              onChange={(e) => changeCountValue(e.target.value)}
            />
            <Button variant="icon" onClick={increment}>
              <ArrowRightIcon />
            </Button>
          </div>
          <Button onClick={handleAddInCard} fullWidth>
            В корзину
          </Button>
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
