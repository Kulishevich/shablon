import React from 'react';
import s from './CategoryCard.module.scss';
import { CategoryT } from '@/shared/api/category/types';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';
import Image from 'next/image';
import clsx from 'clsx';
import { getStoreBaseUrl } from '@/shared/lib/utils/getBaseUrl';
import { cookies } from 'next/headers';

export const CategoryCard = async ({ slug, photo_path, name, description }: CategoryT) => {
  const cookieStore = await cookies();
  const variant = cookieStore.get('variant')?.value;

  return (
    <Link href={`${paths.catalog}/${slug}`} className={s.container}>
      <div className={clsx(s.title, 'h3')}>{name}</div>
      <div className={clsx(s.description, 'body_3')}>{description}</div>
      <Image
        src={`${getStoreBaseUrl(variant)}/${photo_path}`}
        alt={name}
        width={584}
        height={266}
      />
    </Link>
  );
};
