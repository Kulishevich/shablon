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

export const NewsCard = ({ news }: { news: NewsT }) => {
  return (
    <Link href={`${paths.news}/${news?.id}`} className={s.cotnainer}>
      <div className={s.imageContainer}>
        <Image
          src={`${process.env.NEXT_PUBLIC_STORE_URL}${news?.photo_path}`}
          fill
          alt="news"
        />
      </div>
      <span className={clsx(s.date, 'tag')}>
        {new Date(news?.created_at).toLocaleString()}
      </span>
      <h5 className="h5">{news?.title}</h5>
      <Button as={'p'} variant="link" className={s.button}>
        Подробнее
        <ArrowRightUpIcon />
      </Button>
    </Link>
  );
};
