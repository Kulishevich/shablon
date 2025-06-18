import React from 'react';
import s from './DiscountCard.module.scss';
import Image from 'next/image';
import { Button } from '@/shared/ui/button';
import { ArrowRightUpIcon } from '@/shared/assets';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';
import clsx from 'clsx';
import { PromotionT } from '@/shared/api/promotions/types';

export const DiscountCard = ({ title, photo_path, start_date, end_date, slug, id }: PromotionT) => {
  return (
    <div className={s.container} itemScope itemType="http://schema.org/BlogPosting">
      <div className={s.imageContainer}>
        <Image
          src={`${process.env.NEXT_PUBLIC_STORE_URL}/${photo_path}`}
          fill
          alt="discount"
          itemProp="image"
        />
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
        <Button
          variant="link"
          as={Link}
          href={`${paths.shares}/${slug}`}
          className={s.button}
          itemProp="mainEntityOfPage"
        >
          Подробнее
          <ArrowRightUpIcon />
        </Button>
      </div>
    </div>
  );
};
