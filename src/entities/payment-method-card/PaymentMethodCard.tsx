import React, { useEffect, useState } from 'react';
import s from './PaymentMethodCard.module.scss';
import clsx from 'clsx';
import { PaymentT } from '@/shared/api/payment-methods/types';
import Image from 'next/image';

export const PaymentMethodCard = ({
  name,
  image,
  active,
  onClick,
  storeUrl,
}: PaymentT & { onClick: () => void; active: boolean; storeUrl: string }) => {
  return (
    <button type="button" className={clsx(s.container, active && s.active)} onClick={onClick}>
      <div className={s.icon}>
        <Image src={`${storeUrl}/${image}`} fill alt="icon" />
      </div>
      <h6 className="h6">{name}</h6>
    </button>
  );
};
