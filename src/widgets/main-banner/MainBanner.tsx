import React from 'react';
import s from './MainBanner.module.scss';
import Image from 'next/image';
import clsx from 'clsx';
import { Button } from '@/shared/ui/button';

export const MainBanner = () => {
  return (
    <div className={s.container}>
      <Image src="/banner-placeholder.png" alt="main-banner" fill />
      <div className={s.content}>
        <div className={s.heading}>
          <p className={clsx(s.type, 'body_4')}>Интерьер</p>
          <h3 className="h3">Мебель для дома и квартиры</h3>
        </div>
        <div className={s.caption}>
          <p className={clsx(s.type, 'body_3')}>
            Мы предлагаем качественные диваны, стулья, столы и кресла
          </p>
          <Button fullWidth as="a" href="/catalog" className={s.button}>
            В каталог
          </Button>
        </div>
      </div>
    </div>
  );
};
