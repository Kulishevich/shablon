'use client';
import { DiscountCard } from '@/entities/discount-card';
import { Pagination } from '@/shared/ui/pagination';
import { Typography } from '@/shared/ui/typography';
import React, { Suspense } from 'react';
import s from './SharesSection.module.scss';

export const SharesSection = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <Typography variant="h2">Акции</Typography>
        <div className={s.newsList}>
          {new Array(12).fill('').map((_, index) => (
            <DiscountCard key={index} />
          ))}
        </div>
      </div>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Pagination totalPages="10" />
      </Suspense>
      ;
    </div>
  );
};
