import React from 'react';
import s from './SearchProductCard.module.scss';
import Image from 'next/image';
import { Typography } from '@/shared/ui/typography';
import { Button } from '@/shared/ui/button';
import { ShopIcon, ShoppingCartIcon } from '@/shared/assets';

export const SearchProductCard = ({
  name,
  image_path,
  price,
  priceWithDiscount,
}: {
  name: string;
  image_path: string;
  price: number;
  priceWithDiscount: number | null;
}) => {
  return (
    <div className={s.container}>
      <div className={s.card}>
        <Image src={image_path} width={92} height={92} alt="product" />
        <div className={s.content}>
          <Typography variant="body_4">{name}</Typography>
          <div className={s.price}>
            <Typography variant="h5">{price} BYN</Typography>
            {!!priceWithDiscount && (
              <Typography variant="discount">
                {priceWithDiscount} BYN
              </Typography>
            )}
          </div>
        </div>
      </div>
      <Button variant={'icon_outlined'}>
        <ShoppingCartIcon />
      </Button>
    </div>
  );
};
