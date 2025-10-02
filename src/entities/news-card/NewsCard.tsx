import React from 'react';
import s from './NewsCard.module.scss';
import Image from 'next/image';
import { Button } from '@/shared/ui/button';
import { ArrowRightUpIcon } from '@/shared/assets';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';
import clsx from 'clsx';
import { NewsT } from '@/shared/api/news/types';

interface NewsCardProps {
  news: NewsT;
  enableMicrodata?: boolean;
  storeUrl: string;
}

export const NewsCard = async ({ news, enableMicrodata = true, storeUrl }: NewsCardProps) => {
  const linkProps = enableMicrodata
    ? {
        itemScope: true,
        itemType: 'http://schema.org/BlogPosting',
        itemProp: 'blogPost',
      }
    : {};

  return (
    <Link href={`${paths.news}/${news?.slug}`} className={s.cotnainer} {...linkProps}>
      <div className={s.imageContainer}>
        <Image
          src={`${storeUrl}/${news?.photo_path}`}
          fill
          alt={`${news?.title}`}
          {...(enableMicrodata && { itemProp: 'image' })}
        />
      </div>
      <span className={clsx(s.date, 'tag')}>
        {enableMicrodata && (
          <meta itemProp="datePublished" content={news?.publication_date || ''} />
        )}
        {new Date(news?.publication_date || '').toLocaleString('ru-RU', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })}
      </span>
      <div className={s.content}>
        <div className="h5" {...(enableMicrodata && { itemProp: 'headline' })}>
          {news?.title}
        </div>
        <Button
          as={'p'}
          variant="link"
          className={s.button}
          {...(enableMicrodata && { itemProp: 'mainEntityOfPage' })}
        >
          Подробнее
          <ArrowRightUpIcon />
        </Button>
      </div>
    </Link>
  );
};
