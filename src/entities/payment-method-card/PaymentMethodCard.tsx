import React from 'react';
import s from './PaymentMethodCard.module.scss';
import clsx from 'clsx';

export const PaymentMethodCard = ({
  title,
  icons,
  active,
  onClick,
}: {
  title: string;
  icons: React.JSX.Element[];
  active: boolean;
  onClick: () => void;
}) => {
  return (
    <button className={clsx(s.container, active && s.active)} onClick={onClick}>
      <div className={s.icons}>
        {icons.map((icon, index) => (
          <div key={index}>{icon}</div>
        ))}
      </div>
      <h6 className="h6">{title}</h6>
    </button>
  );
};
