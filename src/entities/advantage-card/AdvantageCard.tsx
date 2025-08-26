import React from 'react';
import s from './AdvantageCard.module.scss';
import clsx from 'clsx';
import { AdvantageType } from '@/shared/api/advantages/types';

export const AdvantageCard = ({ title, icon, description }: AdvantageType) => {
  return (
    <div className={s.container}>
      <i className={clsx(icon, s.icon)} />
      <div className={s.caption}>
        <h3 className="h5" lang="ru">
          {title}
        </h3>
        <p className="body_6">
          {description}ыыыыв ыфв фыв фывфы вфы вфы вфы вфы вфыв фыв фывфы вфы вфы вфы вфы вфывы{' '}
        </p>
      </div>
    </div>
  );
};
