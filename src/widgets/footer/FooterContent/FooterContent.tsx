import React from 'react';
import s from './FooterContent.module.scss';
import Image from 'next/image';
import { Typography } from '@/shared/ui/typography';
import {
  ClockIcon,
  LocationIcon,
  PhoneIcon,
  TelegramIcon,
  ViberIcon,
  WhatsAppIcon,
} from '@/shared/assets';
import Link from 'next/link';

export const FooterContent = () => {
  const mockArr = [
    'Мебель',
    'Фурнитура',
    'Декор для дома',
    'Ароматы для дома',
    'Мебель',
    'Мебель',
    'Фурнитура',
    'Декор для дома',
    'Ароматы для дома',
    'Мебель',
  ];

  const mockNavigation = [
    'Главная',
    'Акции',
    'Новости',
    'Оплата и доставка',
    'Контакты',
    'Политика конфиденциальности',
  ];

  return (
    <div className={s.container}>
      <div className={s.elem}>
        <Image src="/logo.png" width={196} height={78} alt="logo" />
        <Typography variant="body_7">
          Мебель и товары для дома с доставкой по Минску
        </Typography>
        <div className={s.iconsContainer}>
          <TelegramIcon />
          <ViberIcon />
          <WhatsAppIcon />
        </div>
      </div>

      <div className={s.elem}>
        <Typography variant="h5">Каталог</Typography>
        <div className={s.catalog}>
          {mockArr.map((category) => (
            <Typography variant="body_3" as={Link} href={'/'}>
              {category}
            </Typography>
          ))}
        </div>
      </div>

      <div className={s.elem}>
        <Typography variant="h5">Покупателям</Typography>
        <div className={s.navigation}>
          {mockNavigation.map((nav) => (
            <Typography variant="body_6" as={Link} href={'/'}>
              {nav}
            </Typography>
          ))}
        </div>
      </div>

      <div className={s.elem}>
        <Typography variant="h5">Контакты</Typography>
        <div className={s.contacts}>
          <div className={s.contactElem}>
            <LocationIcon />
            <Typography variant="body_6">
              г. Минск, пр-т Независимости, 11
            </Typography>
          </div>
          <div className={s.contactElem}>
            <ClockIcon />
            <Typography variant="body_6">с 09:00 до 22:00 ежедневно</Typography>
          </div>
          <div className={s.contactElem}>
            <PhoneIcon />
            <Typography variant="body_6">
              +375 (29) 999-99-99 (А1) +375 (29) 999-99-99 (МТС)
            </Typography>
          </div>
        </div>
      </div>

      <div className={s.elem}>
        <Typography variant="body_7">
          ООО “Альфа” УНП 999999999 22004, РБ, г. Минск, пр-т Независимости, 11
          В торговом реестре с января 2024, номер регистрации 550930
        </Typography>
      </div>
    </div>
  );
};
