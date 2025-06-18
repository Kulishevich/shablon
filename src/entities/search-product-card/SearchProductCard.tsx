import React from 'react';
import s from './SearchProductCard.module.scss';
import Image from 'next/image';
import { Button } from '@/shared/ui/button';
import { ShoppingCartIcon } from '@/shared/assets';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';
import { ProductT } from '@/shared/api/product/types';

export const SearchProductCard = ({ ...props }: ProductT) => {
  const { photo_path, name, price, slug, id } = props;

  return (
    <Link href={`${paths.product}/${slug}`} className={s.container}>
      <div className={s.card}>
        <div className={s.imageContainer}>
          <Image src={`${process.env.NEXT_PUBLIC_STORE_URL}/${photo_path}`} fill alt="product" />
        </div>
        <div className={s.content}>
          <p className="body_4">{name}</p>
          <div className={s.price}>
            <h5 className="h5">{price} BYN</h5>
            {!!price && <p className="discount">{price} BYN</p>}
          </div>
        </div>
      </div>
      <Button variant={'icon_outlined'} className={s.button}>
        <ShoppingCartIcon />
      </Button>
    </Link>
  );
};
