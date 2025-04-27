import React from 'react';
import s from './AdvantageCard.module.scss';
import clsx from 'clsx';

export const AdvantageCard = ({
  title,
  icon,
}: {
  title: string;
  icon: string;
}) => {
  return (
    <div className={s.container}>
      <i className={clsx(icon, s.icon)} />
      <h5 className="h5">{title}</h5>
    </div>
  );
};
