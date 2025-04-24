import React, { Suspense } from 'react';
import s from './NewsSection.module.scss';
import { NewsCard } from '@/entities/news-card';
import { Pagination } from '@/shared/ui/pagination';

export const NewsSection = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <h1 className="h1">Новости</h1>
        <div className={s.newsList}>
          {new Array(12).fill('').map((_, index) => (
            <NewsCard key={index} />
          ))}
        </div>
      </div>
      <Suspense fallback={<p className="h4">Загрузка...</p>}>
        <Pagination totalPages="10" />
      </Suspense>
    </div>
  );
};
