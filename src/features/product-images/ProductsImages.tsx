'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import s from './ProductsImages.module.scss';
import { ProductType } from '@/shared/api/product/types';

const images = new Array(4).fill('/product.png');

export const ProductsImages = ({
  product,
}: {
  product: ProductType | null;
}) => {
  const [activeImage, setActiveImage] = useState(
    product?.main_image.image_path
  );

  return (
    <div className={s.images}>
      <div className={s.miniImages}>
        {product?.images.map((image, index) => (
          <button
            onClick={() => setActiveImage(image.image_path)}
            key={index}
            className={s.smallImage}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_STORE_URL}/${image.image_path}`}
              fill
              alt="product"
            />
          </button>
        ))}
      </div>
      <div className={s.imageContainer}>
        <Image
          src={`${process.env.NEXT_PUBLIC_STORE_URL}/${activeImage}`}
          fill
          alt="product"
        />
        <div className={s.tagsContainer}>
          {product?.is_popular && <span className="tag">бестселлер</span>}
          {product?.discount && <span className="tag">акция</span>}
          {/* {product?.is_new && <span className="tag">Новинка</span>} */}
        </div>
      </div>
    </div>
  );
};
