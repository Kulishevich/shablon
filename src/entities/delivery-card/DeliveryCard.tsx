import React from 'react';
import s from './DeliveryCard.module.scss';
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
    <button type="button" className={clsx(s.container, active && s.active)} onClick={onClick}>
      <span className={s.content}>
        <p className="h5">{title}</p>
        <p className="body_6">{description}</p>
      </span>
      <p className="h5">{!!price ? `${price} BYN` : 'Бесплатно'}</p>
    </button>
  );
};
