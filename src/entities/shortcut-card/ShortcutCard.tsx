import React from 'react';
import s from './ShortcutCard.module.scss';
import { CategoryT } from '@/shared/api/category/types';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';
import Image from 'next/image';
import clsx from 'clsx';

export const ShortcutCard = ({ slug, photo_path, name }: CategoryT) => {
  return (
    <Link href={`${paths.catalog}/${slug}`} className={s.container}>
      <Image
        src={`${process.env.NEXT_PUBLIC_STORE_URL}/${photo_path}`}
        alt={`Фото ${name.split(' ')[0]}`}
        width={120}
        height={120}
      />
      <div className={clsx(s.title, 'h5')}>{name}</div>
    </Link>
  );
};
