import { DiscountCard } from '@/entities/discount-card';
import { Pagination } from '@/shared/ui/pagination';
import React, { Suspense } from 'react';
import s from './SharesSection.module.scss';
import { number } from 'framer-motion';

export const SharesSection = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <h2 className="h2">Акции</h2>
        <div className={s.newsList}>
          {new Array(12).fill('').map((_, index) => (
            <DiscountCard key={index} />
          ))}
        </div>
      </div>
      <Suspense fallback={<p className="h4">Загрузка...</p>}>
        <Pagination totalPages={10} />
      </Suspense>
    </div>
  );
};
