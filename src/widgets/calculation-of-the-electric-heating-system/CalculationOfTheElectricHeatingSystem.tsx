import React from 'react';
import s from './styles.module.scss';
import clsx from 'clsx';
import { Button } from '@/shared/ui/button';
import { FeedbackPopup } from '../feedback-popup/FeedbackPopup';

const mockData = {
  title: 'Расчёт системы электрического отопления',
  subtitle: 'Почему важен профессиональный расчёт мощности отопления?',
  description:
    'Теплопотери дома зависят от разницы температур внутри и снаружи, а также качества утепления. Например, при -20°С стандартные потери составляют до 100 Вт/м², но если здание энергоэффективно — показатель снижается до 50 Вт/м². При +20°С на улице обогрев не нужен, а при экстремальных морозах — критичен. Преимущества точного расчёта:',
  items: [
    {
      id: '1',
      title: 'Экономия на оборудовании',
      description:
        'Мы подбираем технику, которая точно соответствует площади и теплопотерям вашего дома, чтобы вы не переплачивали за ненужные киловатты.',
    },
    {
      id: '2',
      title: 'Адаптация к климату',
      description:
        'Анализ среднегодовых температур и пиковых холодов гарантирует, что система справится с любыми погодными сюрпризами.',
    },
    {
      id: '3',
      title: 'Энергетическая эффективность',
      description:
        'Точный подбор мощности предотвращает перегрузки электросети, также это снижает ежемесячные счета на 20-30%.',
    },
    {
      id: '4',
      title: 'Гарантия комфорта',
      description:
        'Мы исключаем «холодные зоны» и перегрев, используя многоточечные замеры теплопотерь.',
    },
  ],
};

interface CalculationOfTheElectricHeatingSystemProps {
  image: string;
}

export const CalculationOfTheElectricHeatingSystem = ({
  image,
}: CalculationOfTheElectricHeatingSystemProps) => {
  return (
    <div className={s.container}>
      <div className={s.firstBlock}>
        <h2 className={clsx(s.title, 'h2')}>{mockData.title}</h2>
        <p className={clsx(s.subtitle, 'body_1')}>{mockData.subtitle}</p>
        <p className={clsx(s.description, 'body_2')}>{mockData.description}</p>
        <FeedbackPopup image={image}>
          <Button className={s.btn}>Заказать бесплатный расчёт</Button>
        </FeedbackPopup>
      </div>

      <div className={s.secondBlock}>
        {mockData.items.map((item) => (
          <div key={item.id} className={s.card}>
            <div className={s.card__header}>
              <p className={clsx(s.card__number, 'h5')}>{item.id}</p>
              <p className={clsx(s.card__title, 'h5')}>{item.title}</p>
            </div>

            <p className={'body_4'}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
