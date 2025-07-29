import React from 'react';
import s from './ShortcutCard.module.scss';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';
import Image from 'next/image';
import clsx from 'clsx';
import { TagT } from '@/shared/api/tags/types';

export const ShortcutCard = ({ photo_path, name, storeUrl }: TagT & { storeUrl: string }) => {
  return (
    <Link href={`${paths.catalog}/all?tags=${name}`} className={s.container}>
      <Image
        src={`${storeUrl}/${photo_path}`}
        alt={`Фото ${name.split(' ')[0]}`}
        width={120}
        height={120}
      />
      <div className={clsx(s.title, 'h5')}>{name}</div>
    </Link>
  );
};
