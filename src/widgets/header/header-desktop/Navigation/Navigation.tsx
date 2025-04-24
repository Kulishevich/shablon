import React from 'react';
import Link from 'next/link';
import {
  ClockIcon,
  DiscountCircleIcon,
  LocationIcon,
  PhoneIcon,
} from '@/shared/assets';
import { navigation } from '@/shared/config/constants/navigation';
import s from './Navigation.module.scss';

export const Navigation = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <nav className={s.navigation}>
          {navigation.map((nav, index) => (
            <Link className="body_3" href={nav.path} key={index}>
              {nav.title === 'Акции' && <DiscountCircleIcon />}
              {nav.title}
            </Link>
          ))}
        </nav>
        <div className={s.info}>
          <div>
            <LocationIcon />
            <p className="body_6">г. Минск, пр-т Независимости, 11</p>
          </div>
          <div>
            <ClockIcon />
            <p className="body_6">с 09:00 до 22:00 ежедневно</p>
          </div>
          <div>
            <PhoneIcon />
            <p className="body_6">
              +375 (29) 999-99-99 (А1) <br />
              +375 (29) 999-99-99 (МТС)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
