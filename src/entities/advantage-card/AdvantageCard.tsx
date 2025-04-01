import React, { ReactNode } from 'react';
import s from './AdvantageCard.module.scss';
import { Typography } from '@/shared/ui/typography';

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
      <Typography variant="h5">{title}</Typography>
    </div>
  );
};
