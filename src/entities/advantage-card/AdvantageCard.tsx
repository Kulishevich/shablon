import React, { ReactNode } from 'react';
import s from './AdvantageCard.module.scss';

export const AdvantageCard = ({
  title,
  icon,
}: {
  title: string;
  icon: ReactNode;
}) => {
  return (
    <div className={s.container}>
      {icon}
      <h5 className="h5">{title}</h5>
    </div>
  );
};
