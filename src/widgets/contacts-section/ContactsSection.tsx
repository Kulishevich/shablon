import React from 'react';
import s from './ContactsSection.module.scss';
import { YandexMap } from '@/shared/ui/yandex-map/YandexMap';
import { SocialMedia } from '@/entities/social-media';
import { ContactsT } from '@/shared/api/design/types';
import Link from 'next/link';
import clsx from 'clsx';

export const ContactsSection = ({
  contacts,
  isMain = false,
}: {
  contacts: ContactsT | null;
  isMain?: boolean;
}) => {
  return (
    <div className={clsx(s.container, !isMain && s.standalone)}>
      {isMain ? <h2 className="h2">Контакты компании</h2> : <h1 className="h1">Контакты</h1>}
      <div className={s.content}>
        <div className={s.inner}>
          <div className={s.info} itemScope itemType="http://schema.org/Organization">
            <div className={s.elem}>
              <div className="h3">Адрес</div>
              <p
                className="body_2"
                itemProp="address"
                itemScope
                itemType="http://schema.org/PostalAddress"
              >
                <span itemProp="addressLocality streetAddress">{contacts?.address}</span>
              </p>
            </div>

            <div className={s.elem}>
              <div className="h3">Телефон для связи</div>
              <div className={s.phones}>
                {contacts?.phones.map((phone, index) => (
                  <Link href={`tel:${phone}`} key={index} className="body_2" itemProp="telephone">
                    {phone}
                  </Link>
                ))}
              </div>
            </div>

            <>
              <div className={s.elem}>
                <div className="h3">Email</div>
                <Link href={`mailto:${contacts?.email}`} className="body_2" itemProp="email">
                  {contacts?.email}
                </Link>
              </div>
              <div className={s.elem}>
                <div className="h3">Режим работы</div>
                <p className="body_2">{contacts?.working_hours}</p>
              </div>
              <div className={s.elem}>
                <div className="h3">Мессенджеры</div>
                <SocialMedia {...contacts?.social_links} />
              </div>
            </>
          </div>
        </div>

        {contacts?.address && (
          <>
            <YandexMap
              coordinatesOffset={[-0.006, 0]}
              address={contacts?.address}
              className={clsx(s.map, s.map_desktop, { [s.main]: isMain })}
            />
            <YandexMap
              address={contacts?.address}
              className={clsx(s.map, s.map_mobile, { [s.main]: isMain })}
            />
          </>
        )}
      </div>
    </div>
  );
};
