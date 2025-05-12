import React from 'react';
import s from './RowProductCart.module.scss';
import { Button } from '@/shared/ui/button';
import Image from 'next/image';
import { TextField } from '@/shared/ui/text-field';
import clsx from 'clsx';
import { CloseIcon } from '@/shared/assets';
import { useDispatch } from 'react-redux';
import { CartProduct, deleteFromCart } from '@/shared/lib/redux/slices/cartSlice';

export const RowProductCart = ({
  name,
  photo_path,
  price,
  sku,
  discount,
  id,
  quantity = 1,
}: CartProduct) => {
  const dispatch = useDispatch();
  const isDiscount = !!Number(discount);
  const totalPrice = isDiscount
    ? Math.round((Number(price) * (100 - Number(discount))) / 100)
    : +price;

  return (
    <div className={s.container}>
      <Button variant="icon" onClick={() => dispatch(deleteFromCart(id))}>
        <CloseIcon />
      </Button>
      <div className={s.card}>
        <div className={s.imageContainer}>
          <Image src={`${process.env.NEXT_PUBLIC_STORE_URL}/${photo_path}`} fill alt="product" />
        </div>
        <div>
          <p className="body_4">{name}</p>
          <span className="body_7">Артикул: {sku}</span>
        </div>
      </div>
      <div className={s.count}>
        <TextField className={s.input} defaultValue={quantity} />
      </div>
      <div className={s.price}>
        <p className="body_3">{totalPrice} BYN</p>
        {isDiscount && <span className="discount">{+price} BYN</span>}
      </div>
      <h5 className={clsx(!!isDiscount && s.discount, 'h5')}>{totalPrice * quantity} BYN</h5>
    </div>
  );
};
