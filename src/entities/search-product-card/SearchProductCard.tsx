'use client';
import React from 'react';
import s from './SearchProductCard.module.scss';
import Image from 'next/image';
import { Button } from '@/shared/ui/button';
import { ShoppingCartIcon } from '@/shared/assets';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';
import { ProductT } from '@/shared/api/product/types';
import { buildProductUrlSync } from '@/shared/lib/utils/productUtils';
import { useRuntimeConfig } from '@/shared/lib/hooks/useRuntimeConfig';

export const SearchProductCard = ({ ...props }: ProductT) => {
  const { photo_path, name, price, slug, id, category } = props;
  const { storeUrl } = useRuntimeConfig();

  return (
    <Link href={buildProductUrlSync(props)} className={s.container}>
      <div className={s.card}>
        <div className={s.imageContainer}>
          <Image src={`${storeUrl}/${photo_path}`} fill alt="product" />
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
