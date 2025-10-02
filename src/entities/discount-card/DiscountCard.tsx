import React from 'react';
import s from './DiscountCard.module.scss';
import Image from 'next/image';
import { Button } from '@/shared/ui/button';
import { ArrowRightUpIcon } from '@/shared/assets';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';
import clsx from 'clsx';
import { PromotionT } from '@/shared/api/promotions/types';

export const DiscountCard = async ({
  title,
  photo_path,
  start_date,
  end_date,
  slug,
  storeUrl,
}: PromotionT & { storeUrl: string }) => {
  return (
    <Link
      href={`${paths.shares}/${slug}`}
      className={s.container}
      itemScope
      itemType="http://schema.org/BlogPosting"
    >
      <div className={s.imageContainer}>
        <Image src={`${storeUrl}/${photo_path}`} fill alt={`${title}`} itemProp="image" />
      </div>
      <div className={s.content}>
        <span className={clsx(s.tag, 'tag')} itemProp="datePublished">
          С{' '}
          {new Date(start_date || '').toLocaleDateString('ru-RU', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          })}{' '}
          по{' '}
          {new Date(end_date || '').toLocaleDateString('ru-RU', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          })}
        </span>
        <div className={clsx(s.title, 'h5')} itemProp="name">
          {title}
        </div>
        <Button variant="link" className={s.button} itemProp="mainEntityOfPage">
          Подробнее
          <ArrowRightUpIcon />
        </Button>
      </div>
    </Link>
  );
};
