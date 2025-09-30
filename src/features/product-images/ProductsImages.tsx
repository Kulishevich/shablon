'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import s from './ProductsImages.module.scss';
import { ProductT } from '@/shared/api/product/types';
import clsx from 'clsx';
import { useRuntimeConfig } from '@/shared/lib/hooks/useRuntimeConfig';

export const ProductsImages = ({ product }: { product: ProductT | null }) => {
  const [activeImage, setActiveImage] = useState(product?.main_image.image_path);
  const { storeUrl } = useRuntimeConfig();

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
            <Image itemProp="image" src={`${storeUrl}/${image.image_path}`} fill alt="product" />
          </button>
        ))}
      </div>
      <div className={s.imageContainer}>
        <Image itemProp="image" src={`${storeUrl}/${activeImage}`} fill alt="product" />
      </div>
    </div>
  );
};
