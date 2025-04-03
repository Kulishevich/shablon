import React from 'react';
import s from './DeliveryCard.module.scss';
import { Typography } from '@/shared/ui/typography';
import clsx from 'clsx';

export const DeliveryCard = ({
  title,
  description,
  price,
  active,
  onClick,
}: {
  title: string;
  description: string;
  price: number;
  active: boolean;
  onClick: () => void;
}) => {
  return (
    <button className={clsx(s.container, active && s.active)} onClick={onClick}>
      <div>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body_6">{description}</Typography>
      </div>
      <Typography variant="h5">
        {!!price ? `${price} BYN` : 'Бесплатно'}
      </Typography>
    </button>
  );
};
