'use client';
import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/shared/ui/button';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';
import { showToast } from '@/shared/ui/toast';
import { CloseIcon, ShoppingCartIcon } from '@/shared/assets';
import clsx from 'clsx';
import s from './ProductCard.module.scss';
import { ProductT } from '@/shared/api/product/types';
import { useDispatch } from 'react-redux';
import { addInCart, changeProductCount, deleteFromCart } from '@/shared/lib/redux/slices/cartSlice';
import { TextField } from '@/shared/ui/text-field';
import debounce from 'lodash.debounce';

export const ProductCard = ({
  product,
  productInCart = false,
}: {
  productInCart?: boolean;
  product: ProductT & { quantity?: number };
}) => {
  const {
    discount,
    price,
    is_popular,
    is_novelty,
    id,
    name,
    description,
    slug,
    main_image,
    quantity,
  } = product;
  const [count, setCount] = useState<number>(quantity || 1);
  const dispatch = useDispatch();
  const totalPrice = discount
    ? Math.round((Number(price) * (100 - Number(discount))) / 100)
    : price;
  const is_discount = !!Number(discount);

  const handleAddInCard = () => {
    dispatch(addInCart({ ...product, quantity: count }));
    showToast({ title: 'Добавлено в корзину', variant: 'success' });
  };

  useEffect(() => {
    setCount(quantity || 1);
  }, [quantity]);

  const debouncedDispatch = useMemo(
    () =>
      debounce((value: number) => {
        dispatch(changeProductCount({ id, count: value }));
      }, 400),
    [dispatch, id]
  );

  const changeCountValue = (value: string) => {
    const numericValue = value.replace(/\D/g, '');
    const number = Number(numericValue);
    if (number >= 1 || numericValue === '') {
      setCount(number || 1);
      debouncedDispatch(number || 1);
    }
  };

  useEffect(() => {
    return () => {
      debouncedDispatch.cancel();
    };
  }, [debouncedDispatch]);

  return (
    <div className={s.container}>
      <div className={s.imageContainer}>
        <Link href={`${paths.product}/${slug}_${id}`}>
          <Image
            src={`${process.env.NEXT_PUBLIC_STORE_URL}/${main_image?.image_path}`}
            fill
            alt="product"
            className={s.image}
          />
        </Link>
        <div className={s.tagsContainer}>
          {is_popular && <span className={clsx('tag', s.popular)}>бестселлер</span>}
          {is_novelty && <span className={clsx('tag', s.new)}>новинка</span>}
          {is_discount && <span className={clsx('tag', s.discount)}>акция</span>}
        </div>
        {productInCart && (
          <Button
            variant="icon_secondary"
            className={s.deleteButton}
            onClick={() => dispatch(deleteFromCart(id))}
          >
            <CloseIcon />
          </Button>
        )}
      </div>
      <h5 className={clsx(s.title, 'h5')}>{name}</h5>
      <div
        className={clsx(s.description, 'body_5')}
        dangerouslySetInnerHTML={{ __html: description || '' }}
      />

      <div className={s.footerCard}>
        <div className={s.priceContainer}>
          <div className={s.price}>
            {is_discount && <span className="discount">{product?.price} BYN</span>}
            <h4 className="h4">{totalPrice} BYN</h4>
          </div>
          {productInCart && (
            <TextField
              className={s.counter}
              value={count}
              onChange={(e) => changeCountValue(e.target.value)}
            />
          )}
        </div>
        <Button fullWidth onClick={handleAddInCard} className={'desktop-only'}>
          В корзину
        </Button>
        <Button variant={'icon_outlined'} className={'mobile-only'} onClick={handleAddInCard}>
          <ShoppingCartIcon />
        </Button>
      </div>
    </div>
  );
};
