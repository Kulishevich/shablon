import { BrandT } from '@/shared/api/brands/types';
import Image from 'next/image';
import React from 'react';
import s from './BrandCard.module.scss';
import Link from 'next/link';

interface IBrandProps {
  brand: BrandT;
  storeUrl: string;
}

export const BrandCard = async ({ brand, storeUrl }: IBrandProps) => {
  const { image_path, link, name, photo_path } = brand;

  return (
    <Link href={link || ''} className={s.container}>
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
    </Link>
  );
};
