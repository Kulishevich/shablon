import { BrandT } from '@/shared/api/brands/types';
import Image from 'next/image';
import React from 'react';
import s from './BrandCard.module.scss';

export const BrandCard = ({
  image_path,
  name,
  photo_path,
  storeUrl,
}: BrandT & { storeUrl: string }) => {
  return (
    <div className={s.container}>
      {photo_path && (
        <Image
          src={`${storeUrl}/${photo_path}`}
          width={306}
          height={240}
          alt={name}
          className={s.image}
        />
      )}
      <Image
        src={`${storeUrl}/${image_path}`}
        width={306}
        height={160}
        alt={name}
        className={s.logo}
      />
    </div>
  );
};
