import React from 'react';
import s from './ContactsSection.module.scss';
import { YandexMap } from '@/shared/ui/yandex-map/YandexMap';
import { SocialMedia } from '@/entities/social-media';
import { ContactsT } from '@/shared/api/design/types';
import Link from 'next/link';

export const ContactsSection = ({
  contacts,
}: {
  contacts: ContactsT | null;
}) => {
  return (
    <div className={s.container}>
      <h1 className="h1">Контакты</h1>
      <div className={s.content}>
        <div className={s.info}>
          <div className={s.elem}>
            <h3 className="h3">Адрес</h3>
            <p className="body_2">{contacts?.address}</p>
          </div>

          <div className={s.elem}>
            <h3 className="h3">Телефон для связи</h3>
            <div className={s.phones}>
              {contacts?.phones.map((phone, index) => (
                <Link href={`tel:${phone}`} key={index} className="body_2">
                  {phone}
                </Link>
              ))}
            </div>
          </div>
          <div className={s.elem}>
            <h3 className="h3">Email</h3>
            <Link href={`mailto:${contacts?.email}`} className="body_2">
              {contacts?.email}
            </Link>
          </div>
          <div className={s.elem}>
            <h3 className="h3">Режим работы</h3>
            <p className="body_2">{contacts?.working_hours}</p>
          </div>
          <div className={s.elem}>
            <h3 className="h3">Мессенджеры</h3>
            <SocialMedia {...contacts?.social_links} />
          </div>
        </div>
        <YandexMap type="default" className={s.map} />
      </div>
    </div>
  );
};
