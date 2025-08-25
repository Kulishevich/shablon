import React, { useEffect, useState } from 'react';
import s from './ShortcutCard.module.scss';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';
import Image from 'next/image';
import clsx from 'clsx';
import { TagT } from '@/shared/api/tags/types';

interface IShortcutCardProps {
  tag: TagT;
  storeUrl: string;
}

export const ShortcutCard = ({ tag, storeUrl }: IShortcutCardProps) => {
  const { photo_path, name } = tag;

  return (
    <Link href={`${paths.catalog}/all?tags=${name}`} className={s.container}>
      <Image
        src={`${storeUrl}/${photo_path}`}
        alt={`Фото ${name.split(' ')[0]}`}
        width={120}
        height={120}
      />
      <p className={clsx(s.title, 'h5')}>{name}</p>
    </Link>
  );
};
