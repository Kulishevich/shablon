import React from 'react';
import s from './PaymentMethodCard.module.scss';
import clsx from 'clsx';
import { PaymentT } from '@/shared/api/payment-methods/types';
import Image from 'next/image';

export const PaymentMethodCard = ({
  name,
  image,
  active,
  onClick,
}: PaymentT & { onClick: () => void; active: boolean }) => {
  return (
    <button type="button" className={clsx(s.container, active && s.active)} onClick={onClick}>
      <div className={s.icon}>
        <Image src={`${process.env.NEXT_PUBLIC_STORE_URL}/${image}`} fill alt="icon" />
      </div>
      <h6 className="h6">{name}</h6>
    </button>
  );
};
