'use client';
import React, { useState } from 'react';
import s from './ProductInfo.module.scss';
import { ArrowLeftIcon, ArrowRightIcon, StarIcon } from '@/shared/assets';
import { ProductsImages } from '@/features/product-images';
import { ProductT } from '@/shared/api/product/types';
import clsx from 'clsx';
import { TextField } from '@/shared/ui/text-field';
import { Button } from '@/shared/ui/button';
import { useDispatch } from 'react-redux';
import { addInCart } from '@/shared/lib/redux/slices/cartSlice';
import { showToast } from '@/shared/ui/toast';
import { ProductAdvantageType } from '@/shared/api/advantages/types';

export const ProductInfo = ({
  product,
  advantages,
}: {
  product: ProductT;
  advantages: ProductAdvantageType[] | null;
}) => {
  const [count, setCount] = useState(1);
  const isDiscount = !!Number(product?.discount);
  const dispatch = useDispatch();

  console.log(product);

  const totalPrice = !!product?.discount
    ? Math.round((Number(product?.price) * (100 - Number(product?.discount))) / 100) * count
    : Number(product?.price) * count;

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
    <div className={s.container} itemScope>
      <ProductsImages product={product} />

      <div className={s.characteristics}>
        <div className={s.tagsContainer}>
          {product?.is_popular && <span className={clsx('tag', s.popular)}>бестселлер</span>}
          {isDiscount && <span className={clsx('tag', s.discount)}>акция</span>}
          {product?.is_novelty && <span className={clsx('tag', s.new)}>новинка</span>}
        </div>

        <div className={clsx(s.sku, s.sku_mobile, 'body_7')} itemProp="sku">
          Артикул: <span>{product?.sku}</span>
        </div>
        <div className={s.rating} itemScope itemType="http://schema.org/AggregateRating">
          <div className={s.startRating} itemProp="ratingValue">
            {new Array(5).fill('').map((_, index) => (
              <StarIcon key={index} className={clsx(index < 5 && s.active)} />
            ))}
          </div>
          <p className={clsx(s.reviews, 'body_7')} itemProp="reviewCount">
            4 отзыва
          </p>
        </div>
        <div className="h5">Характеристики:</div>
        <div>
          <ul>
            {product?.specifications?.slice(0, 3).map((elem) => (
              <li className="body_3" key={elem.id}>
                {elem?.name} : {elem?.pivot?.value}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={s.price}>
        <div className={s.priceContainer} itemScope itemType="http://schema.org/Offer">
          <div className={s.totalPrice}>
            <p className={clsx('h2', isDiscount && s.discount)} itemProp="price">
              {totalPrice} BYN
            </p>
            {isDiscount && (
              <span className="discount" itemProp="price">
                {Number(product?.price) * count} byn
              </span>
            )}
          </div>
          <div className={s.addInCartContainer}>
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
        </div>

        <div className={s.details}>
          <div className={clsx(s.availability, 'body_6')} itemProp="availability">
            в наличии
          </div>

          {advantages?.map((advantage) => (
            <p className="body_7" key={advantage.id} itemProp="shippingDeliveryTime">
              <i className={clsx(advantage.icon, s.icon)} /> {advantage.title}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
