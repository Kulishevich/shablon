import React from 'react';
import s from './AboutUsSection.module.scss';
import Image from 'next/image';
import { Typography } from '@/shared/ui/typography';
import { Logo } from '@/shared/ui/logo';

export const AboutUsSection = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <div>
          <Typography variant="h2">О нас</Typography>
          <Typography variant="body_2">
            Компания, занимающаяся продажей мебели и товаров для дома, успешно
            работает в Минске уже более 10 лет. За это время мы завоевали
            доверие множества клиентов благодаря высокому качеству продукции и
            отличному сервису. Наша большая база поставщиков позволяет нам
            предлагать широкий ассортимент товаров, удовлетворяющих различные
            вкусы и потребности. Наш опыт и профессионализм делают нас лидерами
            на рынке.
          </Typography>
        </div>
        <Logo variant="primary" />
      </div>
      <div className={s.imageContainer}>
        <Image src={'/about-us.png'} fill alt="about-us" />
      </div>
    </div>
  );
};
