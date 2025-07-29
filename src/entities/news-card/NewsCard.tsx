import React from 'react';
import s from './NewsCard.module.scss';
import Image from 'next/image';
import { Button } from '@/shared/ui/button';
import { ArrowRightUpIcon } from '@/shared/assets';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';
import clsx from 'clsx';
import { NewsT } from '@/shared/api/news/types';

const news = {
  title: 'Фурнитура для мебели: как выбрать?',
  date: '12.02.2025',
  image_path: '/news.png',
};

export const NewsCard = ({ news, storeUrl }: { news: NewsT; storeUrl: string }) => {
  return (
    <Link
      href={`${paths.news}/${news?.slug}`}
      className={s.cotnainer}
      itemScope
      itemType="http://schema.org/BlogPosting"
      itemProp="blogPost"
    >
      <div className={s.imageContainer}>
        <Image src={`${storeUrl}/${news?.photo_path}`} fill alt="news" itemProp="image" />
      </div>
      <span className={clsx(s.date, 'tag')} itemProp="datePublished">
        {new Date(news?.created_at || '').toLocaleString('ru-RU', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })}
      </span>
      <div className={s.content}>
        <div className="h5" itemProp="name">
          {news?.title}
        </div>
        <Button as={'p'} variant="link" className={s.button} itemProp="mainEntityOfPage">
          Подробнее
          <ArrowRightUpIcon />
        </Button>
      </div>
    </Link>
  );
};
