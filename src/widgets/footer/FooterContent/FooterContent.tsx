import React from 'react';
import { TelegramIcon, ViberIcon, WhatsAppIcon } from '@/shared/assets';
import Link from 'next/link';
import { navigation } from '@/shared/config/constants/navigation';
import { Logo } from '@/shared/ui/logo';
import { paths } from '@/shared/config/constants/paths';
import { CompanyContacts } from '@/entities/company-contacts';
import s from './FooterContent.module.scss';

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
        <p className="body_7">Мебель и товары для дома с доставкой по Минску</p>
        <div className={s.iconsContainer}>
          <TelegramIcon />
          <ViberIcon />
          <WhatsAppIcon />
        </div>
      </div>

      <div className={s.catalogContainer}>
        <div className={s.elem}>
          <h5 className="h5">Каталог</h5>
          <div className={s.catalog}>
            {mockArr.map((category, index) => (
              <Link className="body_3" href={'/'} key={index}>
                {category}
              </Link>
            ))}
          </div>
        </div>

        <div className={s.elem}>
          <h5 className="h5">Покупателям</h5>
          <div className={s.navigation}>
            {navigation.slice(0, 6).map((nav, index) => (
              <Link className="body_6" href={nav.path} key={index}>
                {nav.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className={s.elem}>
        <h5 className="h5">Контакты</h5>
        <CompanyContacts />
      </div>

      <div className={s.elem}>
        <p className="body_7">
          ООО “Альфа”
          <br />
          УНП 999999999
          <br /> 22004, РБ, г. Минск, пр-т Независимости, 11
          <br /> В торговом реестре с января 2024, номер регистрации 550930
        </p>
      </div>
    </div>
  );
};
