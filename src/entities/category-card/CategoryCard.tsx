import React from 'react';
import s from './CategoryCard.module.scss';
import { CategoryT } from '@/shared/api/category/types';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';
import Image from 'next/image';
import { Button } from '@/shared/ui/button';

export const CategoryCard = ({ id, slug, photo_path, name }: CategoryT) => {
  return (
    <Link href={`${paths.catalog}/${slug}_${id}`} className={s.container}>
      <Image src={`${process.env.NEXT_PUBLIC_STORE_URL}/${photo_path}`} alt={name} fill />
      <Button variant="category" fullWidth>
        {name}
      </Button>
    </Link>
  );
};
