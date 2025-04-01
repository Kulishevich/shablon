import React from 'react';
import s from './AdvantagesSection.module.scss';
import {
  BusinessBagIcon,
  CatalogIcon,
  CertificateIcon,
  CityWorkerIcon,
  DeliveryTruckIcon,
  DiscountIcon,
  DiscountProcentIcon,
  GiftIcon,
  HoursIcon,
  PriceTagIcon,
  QualityStarIcon,
  ShopIcon,
} from '@/shared/assets';
import { Typography } from '@/shared/ui/typography';
import { AdvantageCard } from '@/entities/advantage-card';

const advantages = [
  { icon: <DeliveryTruckIcon />, title: 'Быстрая доставка' },
  { icon: <HoursIcon />, title: 'Поддержка 24/7' },
  { icon: <PriceTagIcon />, title: 'Доступные цены' },
  { icon: <QualityStarIcon />, title: 'Гарантия качества' },
  { icon: <CatalogIcon />, title: 'Достоверный каталог' },
  { icon: <DiscountProcentIcon />, title: 'Накопительная система скидок' },
  { icon: <BusinessBagIcon />, title: '10 лет нарынке' },
  { icon: <ShopIcon />, title: 'Магазин в центре города' },
  { icon: <GiftIcon />, title: 'Каждому покупателю подарок' },
  { icon: <CertificateIcon />, title: 'Только оригинальная продукция' },
  { icon: <DiscountIcon />, title: 'Регулярные акционные предложения' },
  { icon: <CityWorkerIcon />, title: 'Квалифицированные консультанты' },
];

export const AdvantagesSection = () => {
  return (
    <div className={s.container}>
      <Typography variant="h2">Наши преимущества</Typography>
      <div className={s.advantagesContainer}>
        {advantages.map((elem, index) => (
          <AdvantageCard title={elem.title} icon={elem.icon} key={index} />
        ))}
      </div>
    </div>
  );
};
