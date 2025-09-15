import React from 'react';
import s from './styles.module.scss';
import Image from 'next/image';
import { Button } from '@/shared/ui/button';
import clsx from 'clsx';
import Link from 'next/link';

export const HomeSecondInfoBlock = () => {
  return (
    <div className={s.container}>
      <div className={s.imageContainer}>
        <Image src={'/home-text-image.png'} fill alt="home-image" />
      </div>
      <div className={s.content}>
        <h3 className={clsx(s.title, 'body_1')}>Электрическое отопление для вашего домка</h3>
        <p className={clsx(s.description, 'body_2')}>
          Оптимальная температура в доме — основа комфорта и здоровья, будь то жилое пространство,
          офис или магазин. Микроклимат влияет не только на физическое самочувствие,
          но и на продуктивность: способность концентрироваться, принимать решения и сохранять
          эмоциональный баланс. Мы проектируем и монтируем системы электрообогрева для частных
          домов, квартир и коммерческих объектов, предлагая комплексный подход: бесплатно
          консультируем по энергоэффективности, рассчитываем необходимое количество обогревателей
          и их мощность.
        </p>
        <Button className={s.link} as={Link} href={'/elektriceskoe-otoplenie'}>
          Подробнее
        </Button>
      </div>
    </div>
  );
};
