import React, { useState } from 'react';
import s from './ProductInfo.module.scss';
import Image from 'next/image';
import { Typography } from '@/shared/ui/typography';
import { Button } from '@/shared/ui/button';
import { DocumentIcon, HoursIcon, QualityStarIcon } from '@/shared/assets';

const images = new Array(4).fill('/product.png');

export const ProductInfo = () => {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className={s.container}>
      <div className={s.images}>
        <div className={s.miniImages}>
          {images.map((image, index) => (
            <button onClick={() => setActiveImage(image)} key={index}>
              <Image src={image} width={86} height={86} alt="product" />
            </button>
          ))}
        </div>
        <div className={s.imageContainer}>
          <Image src={activeImage} width={392} height={392} alt="product" />
          <div className={s.tagsContainer}>
            <Typography variant="tag">бестселлер</Typography>
            <Typography variant="tag">акция</Typography>
          </div>
        </div>
      </div>

      <div className={s.characteristics}>
        <Typography variant="h5">Характеристики:</Typography>
        <div>
          <Typography variant="body_3">
            Удобный и стильный ковёр, который приятно освежат интерьер:
          </Typography>
          <ul>
            <Typography variant="body_3" as="li">
              Описание товара
            </Typography>
            <Typography variant="body_3" as="li">
              Описание товара
            </Typography>{' '}
            <Typography variant="body_3" as="li">
              Описание товара
            </Typography>{' '}
            <Typography variant="body_3" as="li">
              Описание товара
            </Typography>
          </ul>
        </div>
      </div>

      <div className={s.price}>
        <div className={s.totalPrice}>
          <Typography variant="h2">110 BYN</Typography>
          <Typography variant="discount" as="span">
            130 byn
          </Typography>
        </div>
        <Button>В корзину</Button>

        <div className={s.details}>
          <Typography variant="body_7">
            <HoursIcon width={24} height={24} />
            14 дней на обмен и возврат
          </Typography>
          <Typography variant="body_7">
            <DocumentIcon width={24} height={24} />
            Гарантия 1 месяц
          </Typography>
          <Typography variant="body_7">
            <QualityStarIcon width={24} height={24} />
            Товар сертифицирован
          </Typography>
        </div>
      </div>
    </div>
  );
};
