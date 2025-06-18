import React from 'react';
import s from './AdvantageCard.module.scss';
import clsx from 'clsx';

export const AdvantageCard = ({ title, icon }: { title: string; icon: string }) => {
  return (
    <div className={s.container}>
      <i className={clsx(icon, s.icon)} />
      <div className={s.caption}>
        <h3 className="h5" lang="ru">
          {title}
        </h3>
        <p className="body_6">Доставляем товары по Беларуси за 24 часа</p>
      </div>
    </div>
  );
};
