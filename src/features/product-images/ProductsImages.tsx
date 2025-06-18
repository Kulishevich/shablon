'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import s from './ProductsImages.module.scss';
import { ProductT } from '@/shared/api/product/types';
import clsx from 'clsx';

export const ProductsImages = ({ product }: { product: ProductT | null }) => {
  const [activeImage, setActiveImage] = useState(product?.main_image.image_path);

  const isDiscount = !!Number(product?.discount);

  return (
    <div className={s.images} itemScope itemType="http://schema.org/ImageGallery">
      <div className={s.miniImages}>
        {product?.images.map((image, index) => (
          <button
            onClick={() => setActiveImage(image.image_path)}
            key={index}
            className={clsx(s.smallImage, {
              [s.active]: activeImage === image.image_path,
            })}
          >
            <Image
              itemProp="image"
              src={`${process.env.NEXT_PUBLIC_STORE_URL}/${image.image_path}`}
              fill
              alt="product"
            />
          </button>
        ))}
      </div>
      <div className={s.imageContainer}>
        <Image
          itemProp="image"
          src={`${process.env.NEXT_PUBLIC_STORE_URL}/${activeImage}`}
          fill
          alt="product"
        />
        <div className={s.tagsContainer}>
          {product?.is_popular && <span className={clsx('tag', s.popular)}>бестселлер</span>}
          {isDiscount && <span className={clsx('tag', s.discount)}>акция</span>}
          {product?.is_novelty && <span className={clsx('tag', s.new)}>новинка</span>}
        </div>
      </div>
    </div>
  );
};
