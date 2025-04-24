import React, { useState } from 'react';
import Image from 'next/image';
import s from './ProductsImages.module.scss';

const images = new Array(4).fill('/product.png');

export const ProductsImages = () => {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className={s.images}>
      <div className={s.miniImages}>
        {images.map((image, index) => (
          <button
            onClick={() => setActiveImage(image)}
            key={index}
            className={s.smallImage}
          >
            <Image src={image} fill alt="product" />
          </button>
        ))}
      </div>
      <div className={s.imageContainer}>
        <Image src={activeImage} fill alt="product" />
        <div className={s.tagsContainer}>
          <span className="tag">бестселлер</span>
          <span className="tag">акция</span>
        </div>
      </div>
    </div>
  );
};
