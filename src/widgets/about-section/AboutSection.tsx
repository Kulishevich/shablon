import React from 'react';
import s from './AboutSection.module.scss';
import Image from 'next/image';

export const AboutSection = () => {
  return (
    <div className={s.container}>
      <h1 className="h1">О нас</h1>
      <div className={s.content}>
        <div className={s.block}>
          <div className={s.caption}>
            <p className="body_1">
              Компания, занимающаяся продажей мебели и товаров для дома, успешно работает в Минске
              уже более 10 лет.
            </p>
            <p className="body_2">
              За годы успешной работы на рынке мы не просто завоевали доверие клиентов — мы создали
              сообщество лояльных партнёров, которые ценят наш вдумчивый подход к каждому заказу.
              Наша репутация строится на двух китах: безупречном качестве продукции, проверенном
              тысячами отзывов, и сервисе, где клиент всегда чувствует заботу. Например,
              перед отправкой каждый товар проходит многоэтапный контроль, а служба поддержки решает
              вопросы в режиме 24/7.
            </p>
          </div>
          <Image src={'/about-us.png'} alt="about" width={636} height={396} className={s.image} />
        </div>
      </div>
    </div>
  );
};
