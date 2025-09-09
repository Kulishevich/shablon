import React, { useEffect, useState } from 'react';
import s from './SearchProductCard.module.scss';
import Image from 'next/image';
import { Button } from '@/shared/ui/button';
import { ShoppingCartIcon } from '@/shared/assets';
import Link from 'next/link';
import { ProductT } from '@/shared/api/product/types';
import { buildProductUrlSync } from '@/shared/lib/utils/productUtils';
import { showToast } from '@/shared/ui/toast';
import { addInCart } from '@/shared/lib/redux/slices/cartSlice';
import { useDispatch } from 'react-redux';
import { useRuntimeConfig } from '@/shared/lib/hooks/useRuntimeConfig';

export const SearchProductCard = ({ ...props }: ProductT) => {
  const { photo_path, name, price, id, discount } = props;
  const dispatch = useDispatch();
  const { storeUrl } = useRuntimeConfig();

  const handleAddInCard = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(addInCart({ ...props, quantity: 1 }));
    showToast({ title: 'Добавлено в коммерческое предложение', variant: 'success' });
  };

  return (
    <div className={s.container}>
      <Link href={buildProductUrlSync({ product: props })} className={s.card}>
        <div className={s.imageContainer}>
          <Image src={`${storeUrl}/${photo_path}`} fill alt="product" />
        </div>
        <div className={s.content}>
          <p className="body_4">{name}</p>
          <div className={s.price}>
            <h5 className="h5">{price} BYN</h5>
            {!!Number(discount) && <p className="discount">{price} BYN</p>}
          </div>
        </div>
      </Link>
      <Button variant={'icon_outlined'} className={s.button} onClick={handleAddInCard}>
        <ShoppingCartIcon />
      </Button>
    </div>
  );
};
