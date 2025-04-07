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
import { navigation } from '@/shared/config/constants/navigation';
import { Logo } from '@/shared/ui/logo';
import { paths } from '@/shared/config/constants/paths';
import { CompanyContacts } from '@/entities/company-contacts';

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

  return (
    <div className={s.container}>
      <div className={s.elem}>
        <Logo variant="secondary" />
        <Typography variant="body_7">
          Мебель и товары для дома с доставкой по Минску
        </Typography>
        <div className={s.iconsContainer}>
          <TelegramIcon />
          <ViberIcon />
          <WhatsAppIcon />
        </div>
      </div>

      <div className={s.catalogContainer}>
        <div className={s.elem}>
          <Typography variant="h5">Каталог</Typography>
          <div className={s.catalog}>
            {mockArr.map((category, index) => (
              <Typography variant="body_3" as={Link} href={'/'} key={index}>
                {category}
              </Typography>
            ))}
          </div>
        </div>

        <div className={s.elem}>
          <Typography variant="h5">Покупателям</Typography>
          <div className={s.navigation}>
            {navigation.map((nav, index) => (
              <Typography
                variant="body_6"
                as={Link}
                href={nav.path}
                key={index}
              >
                {nav.title}
              </Typography>
            ))}
            <Typography variant="body_6" as={Link} href={paths.privacy_policy}>
              Политика конфиденциальности
            </Typography>
          </div>
        </div>
      </div>

      <div className={s.elem}>
        <Typography variant="h5">Контакты</Typography>
        <CompanyContacts />
      </div>

      <div className={s.elem}>
        <Typography variant="body_7">
          ООО “Альфа”
          <br />
          УНП 999999999
          <br /> 22004, РБ, г. Минск, пр-т Независимости, 11
          <br /> В торговом реестре с января 2024, номер регистрации 550930
        </Typography>
      </div>
    </div>
  );
};
