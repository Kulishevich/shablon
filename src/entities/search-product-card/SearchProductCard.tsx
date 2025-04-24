import React from 'react';
import s from './SearchProductCard.module.scss';
import Image from 'next/image';
import { Button } from '@/shared/ui/button';
import { ShoppingCartIcon } from '@/shared/assets';

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
        <div className={s.imageContainer}>
          <Image src={image_path} fill alt="product" />
        </div>
        <div className={s.content}>
          <p className="body_4">{name}</p>
          <div className={s.price}>
            <h5 className="h5">{price} BYN</h5>
            {!!priceWithDiscount && (
              <p className="discount">{priceWithDiscount} BYN</p>
            )}
          </div>
        </div>
      </div>
      <Button variant={'icon_outlined'} className={s.button}>
        <ShoppingCartIcon />
      </Button>
    </div>
  );
};
