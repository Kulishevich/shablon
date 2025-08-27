import React from 'react';
import Link from 'next/link';
import {
  ArrowDownIcon,
  ClockIcon,
  DiscountCircleIcon,
  LocationIcon,
  PhoneIcon,
} from '@/shared/assets';
import { navigation } from '@/shared/config/constants/navigation';
import s from './Navigation.module.scss';
import { ContactsT } from '@/shared/api/design/types';
import clsx from 'clsx';
import { ServiceT } from '@/shared/api/services/types';

export const Navigation = ({ contacts }: { contacts: ContactsT | null }) => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <nav className={s.navigation}>
          <ul>
            {navigation.slice(1, 7).map((nav, index) => (
              <li key={index}>
                <Link className="body_3" href={nav.path}>
                  {nav.title === 'Акции' && <DiscountCircleIcon />}
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={s.info}>
          <div>
            <LocationIcon />
            <p className="body_6">{contacts?.address}</p>
          </div>
          <div>
            <ClockIcon />
            <p className="body_6">{contacts?.working_hours}</p>
          </div>
          <div>
            <PhoneIcon />
            <div className={s.phones}>
              {contacts?.phones.map((phone, index) => (
                <Link href={`tel:${phone}`} className="body_6" key={index}>
                  {phone}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
