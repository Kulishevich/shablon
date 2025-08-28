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

export const Navigation = ({
  contacts,
  services,
}: {
  contacts: ContactsT | null;
  services: ServiceT[];
}) => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <nav className={s.navigation}>
          <ul>
            {services.length > 0 && (
              <li>
                <Link className="body_3" href={`/services/${services[0].slug}`}>
                  {services[0].title}
                </Link>
              </li>
            )}
            {navigation.slice(1, 3).map((nav, index) => (
              <li key={index}>
                <Link className="body_3" href={nav.path}>
                  {nav.title === 'Акции' && <DiscountCircleIcon />}
                  {nav.title}
                </Link>
              </li>
            ))}
            <li className={s.about_us}>
              <div className={clsx('body_3', s.header)}>
                О нас
                <ArrowDownIcon />
              </div>

              <div className={s.dropdown}>
                <Link className="body_3" href={'/about-us'}>
                  О компании
                </Link>
                {services.slice(1).map((service, index) => (
                  <Link className="body_3" href={`/services/${service.slug}`} key={index}>
                    {service.title}
                  </Link>
                ))}
                <Link className="body_3" href={'/contacts'}>
                  Контакты
                </Link>
              </div>
            </li>
            <li>
              <Link className="body_3" href={'/news'}>
                Новости
              </Link>
            </li>
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
