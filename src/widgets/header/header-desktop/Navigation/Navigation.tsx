import React from 'react';
import s from './Navigation.module.scss';
import Link from 'next/link';
import { Typography } from '@/shared/ui/typography';
import {
  ClockIcon,
  DiscountCircleIcon,
  LocationIcon,
  PhoneIcon,
} from '@/shared/assets';
import { navigation } from '@/shared/config/constants/navigation';

export const Navigation = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <nav className={s.navigation}>
          {navigation.map((nav, index) => (
            <Typography variant="body_3" as={Link} href={nav.path} key={index}>
              {nav.title === 'Акции' && <DiscountCircleIcon />}
              {nav.title}
            </Typography>
          ))}
        </nav>
        <div className={s.info}>
          <div>
            <LocationIcon />
            <Typography variant="body_6">
              г. Минск, пр-т Независимости, 11
            </Typography>
          </div>
          <div>
            <ClockIcon />
            <Typography variant="body_6">с 09:00 до 22:00 ежедневно</Typography>
          </div>
          <div>
            <PhoneIcon />
            <Typography variant="body_6">
              +375 (29) 999-99-99 (А1) <br />
              +375 (29) 999-99-99 (МТС)
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
