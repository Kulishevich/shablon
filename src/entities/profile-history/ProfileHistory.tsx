import React from 'react';
import s from './ProfileHistory.module.scss';
import { Pagination } from '@/shared/ui/pagination';
import { OrderCard } from '../order-card';

export const ProfileHistory = () => {
  return (
    <div className={s.container}>
      <div className={s.grid}>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
      <Pagination totalPages={10} currentPage={'1'} />
    </div>
  );
};
