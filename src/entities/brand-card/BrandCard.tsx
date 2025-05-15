import { BrandT } from '@/shared/api/brands/types';
import Image from 'next/image';
import React from 'react';
import s from './BrandCard.module.scss';

export const BrandCard = ({ image_path, name }: BrandT) => {
  return (
    <div className={s.container}>
      <Image src={`${process.env.NEXT_PUBLIC_STORE_URL}/${image_path}`} fill alt={name} />
    </div>
  );
};
