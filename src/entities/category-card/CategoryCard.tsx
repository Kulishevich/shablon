import React from 'react';
import s from './CategoryCard.module.scss';
import { CategoryT } from '@/shared/api/category/types';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';
import Image from 'next/image';
import { Button } from '@/shared/ui/button';
import clsx from 'clsx';

export const CategoryCard = ({ id, slug, photo_path, name, description }: CategoryT) => {
  return (
    <Link href={`${paths.catalog}/${slug}`} className={s.container}>
      <div className={clsx(s.title, 'h3')}>{name}</div>
      <div className={clsx(s.description, 'body_3')}>{description}</div>
      <Image
        src={`${process.env.NEXT_PUBLIC_STORE_URL}/${photo_path}`}
        alt={name}
        width={584}
        height={266}
      />
    </Link>
  );
};
