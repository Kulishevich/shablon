import React from 'react';
import s from './ContactsSection.module.scss';
import { Typography } from '@/shared/ui/typography';
import { YandexMap } from '@/shared/ui/yandex-map/YandexMap';
import { SocialMedia } from '@/entities/social-media';

export const ContactsSection = () => {
  return (
    <div className={s.container}>
      <Typography variant="h1">Контакты</Typography>
      <div className={s.content}>
        <div className={s.info}>
          <div className={s.elem}>
            <Typography variant="h3">Адрес</Typography>
            <Typography variant="body_2">
              г. Минск, пр-т Независимости, 11
            </Typography>
          </div>

          <div className={s.elem}>
            <Typography variant="h3">Телефон для связи</Typography>
            <Typography variant="body_2">
              +375 (29) 999-99-99 (A1) <br />
              +375 (29) 999-99-99 (МТС)
            </Typography>
          </div>
          <div className={s.elem}>
            <Typography variant="h3">Email</Typography>
            <Typography variant="body_2">info@website.by</Typography>
          </div>
          <div className={s.elem}>
            <Typography variant="h3">Режим работы</Typography>
            <Typography variant="body_2">с 09:00 до 22:00 ежедневно</Typography>
          </div>
          <div className={s.elem}>
            <Typography variant="h3">Мессенджеры</Typography>
            <SocialMedia />
          </div>
        </div>
        <YandexMap type="default" className={s.map} />
      </div>
    </div>
  );
};
