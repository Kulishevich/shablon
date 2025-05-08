'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/shared/ui/button';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';
import { showToast } from '@/shared/ui/toast';
import { CloseIcon, ShoppingCartIcon } from '@/shared/assets';
import clsx from 'clsx';
import s from './ProductCard.module.scss';
import { ProductT } from '@/shared/api/product/types';

export const ProductCard = ({
  product,
  productInCart = false,
}: {
  productInCart?: boolean;
  product: ProductT | null;
}) => {
  const totalPrice = !!product?.discount
    ? Math.round(
        (Number(product?.price) * (100 - Number(product?.discount))) / 100
      )
    : product?.price;

  const is_discount = !!Number(product?.discount);

  return (
    <div className={s.container}>
      <div className={s.imageContainer}>
        <Link href={`${paths.product}/${product?.slug}_${product?.id}`}>
          <Image
            src={`${process.env.NEXT_PUBLIC_STORE_URL}/${product?.main_image.image_path}`}
            fill
            alt="product"
            className={s.image}
          />
        </Link>
        <div className={s.tagsContainer}>
          {product?.is_popular && (
            <span className={clsx('tag', s.popular)}>бестселлер</span>
          )}
          {product?.is_novelty && (
            <span className={clsx('tag', s.new)}>новинка</span>
          )}
          {is_discount && (
            <span className={clsx('tag', s.discount)}>акция</span>
          )}
        </div>
        {productInCart && (
          <Button variant="icon_secondary" className={s.deleteButton}>
            <CloseIcon />
          </Button>
        )}
      </div>
      <h5 className={clsx(s.title, 'h5')}>{product?.name}</h5>
      <div
        className={clsx(s.description, 'body_5')}
        dangerouslySetInnerHTML={{ __html: product?.description || '' }}
      />

      <div className={s.priceContainer}>
        <div className={s.price}>
          {is_discount && (
            <span className="discount">{product?.price} BYN</span>
          )}
          <h4 className="h4">{totalPrice} BYN</h4>
        </div>
        <Button
          fullWidth
          onClick={() =>
            showToast({ title: 'Добавлено в корзину', variant: 'success' })
          }
          className={'desktop-only'}
        >
          В корзину
        </Button>
        <Button variant={'icon_outlined'} className={'mobile-only'}>
          <ShoppingCartIcon />
        </Button>
      </div>
    </div>
  );
};
