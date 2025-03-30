import React from 'react';
import s from './ProductCard.module.scss';
import Image from 'next/image';
import { Typography } from '@/shared/ui/typography';
import { Button } from '@/shared/ui/button';

const product = {
  name: 'Свеча Jo Malone',
  description: 'Насыщенные ноты сока миррового дерева из Намибии',
  price: 130,
  priceWithDiscount: 110,
  image_path: '/product.png',
  isNew: true,
  isPopular: true,
  isDiscount: true,
};

export const ProductCard = () => {
  return (
    <div className={s.container}>
      <div className={s.imageContainer}>
        <Image
          src={product.image_path}
          width={306}
          height={306}
          alt="product"
          className={s.image}
        />
        <div className={s.tagsContainer}>
          {product.isNew && (
            <Typography as="span" variant="tag">
              бестселлер
            </Typography>
          )}
          {product.isNew && (
            <Typography as="span" variant="tag">
              новинка
            </Typography>
          )}
          {product.isNew && (
            <Typography as="span" variant="tag">
              акция
            </Typography>
          )}
        </div>
      </div>
      <Typography variant="h5" className={s.title}>
        {product.name}
      </Typography>
      <Typography variant="body_5" className={s.discription}>
        {product.description}
      </Typography>

      <div className={s.priceContainer}>
        <div className={s.price}>
          <Typography variant="discount" as="span">
            {product.price} BYN
          </Typography>
          <Typography variant="h4">{product.priceWithDiscount} BYN</Typography>
        </div>
        <Button fullWidth>В корзину</Button>
      </div>
    </div>
  );
};
