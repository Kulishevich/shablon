import React from 'react';
import s from './ContactsSection.module.scss';
import { YandexMap } from '@/shared/ui/yandex-map/YandexMap';
import { SocialMedia } from '@/entities/social-media';

export const ContactsSection = () => {
  return (
    <div className={s.container}>
      <h1 className="h1">Контакты</h1>
      <div className={s.content}>
        <div className={s.info}>
          <div className={s.elem}>
            <h3 className="h3">Адрес</h3>
            <p className="body_2">г. Минск, пр-т Независимости, 11</p>
          </div>

          <div className={s.elem}>
            <h3 className="h3">Телефон для связи</h3>
            <p className="body_2">
              +375 (29) 999-99-99 (A1) <br />
              +375 (29) 999-99-99 (МТС)
            </p>
          </div>
          <div className={s.elem}>
            <h3 className="h3">Email</h3>
            <p className="body_2">info@website.by</p>
          </div>
          <div className={s.elem}>
            <h3 className="h3">Режим работы</h3>
            <p className="body_2">с 09:00 до 22:00 ежедневно</p>
          </div>
          <div className={s.elem}>
            <h3 className="h3">Мессенджеры</h3>
            <SocialMedia />
          </div>
        </div>
        <YandexMap type="default" className={s.map} />
      </div>
    </div>
  );
};
