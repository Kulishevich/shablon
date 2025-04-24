import React from 'react';
import s from './RowProductCart.module.scss';
import { Button } from '@/shared/ui/button';
import Image from 'next/image';
import { TextField } from '@/shared/ui/text-field';
import clsx from 'clsx';
import { CloseIcon } from '@/shared/assets';

export const RowProductCart = ({
  id,
  name,
  articul,
  image_path,
  price,
  priceWithDiscount,
}: any) => {
  return (
    <div className={s.container}>
      <Button variant="icon">
        <CloseIcon />
      </Button>
      <div className={s.card}>
        <div className={s.imageContainer}>
          <Image src={image_path} fill alt="product" />
        </div>
        <div>
          <p className="body_4">{name}</p>
          <span className="body_7">Артикул: {articul}</span>
        </div>
      </div>
      <div className={s.count}>
        <TextField className={s.input} />
      </div>
      <div className={s.price}>
        <p className="body_3">{price} BYN</p>
        {!!priceWithDiscount && (
          <span className="discount">{priceWithDiscount} BYN</span>
        )}
      </div>
      <h5 className={clsx(!!priceWithDiscount && s.discount, 'h5')}>
        {!!priceWithDiscount ? priceWithDiscount : price} BYN
      </h5>
    </div>
  );
};
