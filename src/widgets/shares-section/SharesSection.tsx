import { DiscountCard } from '@/entities/discount-card';
import { Pagination } from '@/shared/ui/pagination';
import React, { Suspense } from 'react';
import s from './SharesSection.module.scss';
import { PromotionsResponse } from '@/shared/api/promotions/types';

export const SharesSection = ({
  promotions,
  page,
}: {
  promotions: PromotionsResponse | null;
  page: string;
}) => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <h2 className="h2">Акции</h2>
        <div className={s.newsList}>
          {promotions?.data?.map((promotion, index) => <DiscountCard key={index} {...promotion} />)}
        </div>
      </div>
      <Suspense fallback={<p className="h4">Загрузка...</p>}>
        <Pagination totalPages={promotions?.last_page || 1} currentPage={page} />
      </Suspense>
    </div>
  );
};
