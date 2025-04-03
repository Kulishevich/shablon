import React from 'react';
import s from './RowProductCart.module.scss';
import { Button } from '@/shared/ui/button';
import Image from 'next/image';
import { Typography } from '@/shared/ui/typography';
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
        <Image src={image_path} width={92} height={92} alt="product" />
        <div>
          <Typography variant="body_4">{name}</Typography>
          <Typography variant="body_7" as="span">
            Артикул: {articul}
          </Typography>
        </div>
      </div>
      <div className={s.count}>
        <TextField className={s.input} />
      </div>
      <div className={s.price}>
        <Typography variant="body_3">{price} BYN</Typography>
        {!!priceWithDiscount && (
          <Typography variant="discount" as="span">
            {priceWithDiscount} BYN
          </Typography>
        )}
      </div>
      <Typography
        variant="h5"
        className={clsx(!!priceWithDiscount && s.discount)}
      >
        {!!priceWithDiscount ? priceWithDiscount : price} BYN
      </Typography>
    </div>
  );
};
