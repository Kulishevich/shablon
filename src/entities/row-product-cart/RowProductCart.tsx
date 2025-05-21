import React, { useEffect, useMemo, useState } from 'react';
import s from './RowProductCart.module.scss';
import { Button } from '@/shared/ui/button';
import Image from 'next/image';
import { TextField } from '@/shared/ui/text-field';
import clsx from 'clsx';
import { CloseIcon } from '@/shared/assets';
import { useDispatch } from 'react-redux';
import {
  CartProduct,
  changeProductCount,
  deleteFromCart,
} from '@/shared/lib/redux/slices/cartSlice';
import debounce from 'lodash.debounce';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';

export const RowProductCart = ({
  name,
  photo_path,
  price,
  sku,
  discount,
  id,
  quantity = 1,
  slug,
}: CartProduct) => {
  const [count, setCount] = useState(quantity);
  const dispatch = useDispatch();
  const isDiscount = !!Number(discount);
  const totalPrice = isDiscount
    ? Math.round((Number(price) * (100 - Number(discount))) / 100)
    : +price;

  useEffect(() => {
    setCount(quantity);
  }, [quantity]);

  useEffect(() => {
    debouncedDispatch(count);
  }, [count]);

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
    }
  };

  useEffect(() => {
    return () => {
      debouncedDispatch.cancel();
    };
  }, [debouncedDispatch]);

  return (
    <div className={s.container}>
      <Button variant="icon" onClick={() => dispatch(deleteFromCart(id))}>
        <CloseIcon />
      </Button>
      <div className={s.card}>
        <Link className={s.imageContainer} href={`${paths.product}/${slug}_${id}`}>
          <Image src={`${process.env.NEXT_PUBLIC_STORE_URL}/${photo_path}`} fill alt="product" />
        </Link>
        <div>
          <p className="body_4">{name}</p>
          <span className="body_7">Артикул: {sku}</span>
        </div>
      </div>
      <div className={s.count}>
        <TextField
          className={s.input}
          value={count}
          onChange={(e) => changeCountValue(e.target.value)}
        />
      </div>
      <div className={s.price}>
        <p className="body_3">{totalPrice} BYN</p>
        {isDiscount && <span className="discount">{+price} BYN</span>}
      </div>
      <h5 className={clsx(!!isDiscount && s.discount, 'h5')}>{totalPrice * quantity} BYN</h5>
    </div>
  );
};
