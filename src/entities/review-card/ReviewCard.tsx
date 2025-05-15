import React from 'react';
import s from './ReviewCard.module.scss';
import Image from 'next/image';
import clsx from 'clsx';
import { ArrowRightUpIcon, StarIcon } from '@/shared/assets';
import { Button } from '@/shared/ui/button';

export const ReviewCard = () => {
  return (
    <div className={s.container}>
      <div className={s.head}>
        <div className={s.imageContainer}>
          <Image src={'/profile.png'} fill alt="profile" />
        </div>
        <div className={s.nameContainer}>
          <p className="body_3">Анна</p>
          <span className={clsx(s.date, 'tag')}>12.02.2025</span>
        </div>
      </div>

      <div className={s.startRating}>
        {new Array(5).fill('').map((_, index) => (
          <StarIcon key={index} />
        ))}
      </div>

      <div className={s.textContainer}>
        <h5 className="h5">Отличная мебель!</h5>
        <p className="body_4">
          Уже давно пользуюсь услугами Вашего магазина и буду по-прежнему им пользоваться. Очень
          большой ассортимент мебели для дома и квартиры, простое и понятное оформление сайта...
        </p>
      </div>

      <Button variant="link">
        Читать весь отзыв
        <ArrowRightUpIcon />
      </Button>
    </div>
  );
};
