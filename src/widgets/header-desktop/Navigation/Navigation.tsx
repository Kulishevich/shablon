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
                <Link className="body_3" href={`/${services[0].slug}`}>
                  {services[0].title}
                </Link>
              </li>
            )}
            {services.length > 1 && (
              <li>
                <Link className="body_3" href={`/${services[1].slug}`}>
                  {services[1].title}
                </Link>
              </li>
            )}

            <li className={s.about_us}>
              <div className={clsx('body_3', s.header)}>
                О нас
                <ArrowDownIcon />
              </div>

              <div className={s.dropdown}>
                <Link className="body_3" href={'/about-us'}>
                  О компании
                </Link>

                {services.slice(2).map((service, index) => (
                  <Link className="body_3" href={`/${service.slug}`} key={index}>
                    {service.title}
                  </Link>
                ))}
                <Link className="body_3" href={'/payment-and-delivery'}>
                  Оплата и доставка
                </Link>
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
