import React, { Suspense } from 'react';
import s from './NewsSection.module.scss';
import { Typography } from '@/shared/ui/typography';
import { NewsCard } from '@/entities/news-card';
import { Pagination } from '@/shared/ui/pagination';

export const NewsSection = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <Typography variant="h1">Новости</Typography>
        <div className={s.newsList}>
          {new Array(12).fill('').map((_, index) => (
            <NewsCard key={index} />
          ))}
        </div>
      </div>
      <Suspense fallback={<Typography variant="h4">Загрузка...</Typography>}>
        <Pagination totalPages="10" />
      </Suspense>
      ;
    </div>
  );
};
