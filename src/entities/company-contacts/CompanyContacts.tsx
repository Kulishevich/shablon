import { ClockIcon, LocationIcon, PhoneIcon } from '@/shared/assets';
import React from 'react';
import { Typography } from '@/shared/ui/typography';
import s from './CompanyContacts.module.scss';

export const CompanyContacts = () => {
  return (
    <div className={s.contacts}>
      <div className={s.contactElem}>
        <LocationIcon />
        <Typography variant="body_6">
          г. Минск, пр-т Независимости,11
        </Typography>
      </div>
      <div className={s.contactElem}>
        <ClockIcon />
        <Typography variant="body_6">с 09:00 до 22:00 ежедневно</Typography>
      </div>
      <div className={s.contactElem}>
        <PhoneIcon />
        <Typography variant="body_6">
          +375 (29) 999-99-99 (А1) <br />
          +375 (29) 999-99-99 (МТС)
        </Typography>
      </div>
    </div>
  );
};
