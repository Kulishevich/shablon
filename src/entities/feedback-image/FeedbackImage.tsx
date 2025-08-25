import Image from 'next/image';
import React from 'react';
import s from './FeedbackImage.module.scss';

export const FeedbackImage = ({ image }: { image: string }) => {
  return (
    <div className={s.titleContainer}>
      <div className={s.textContent}>
        <h2 className="h2">Связаться с нами</h2>
        <p className="body_2">
          Мы всегда готовы помочь вам с любыми вопросами. Свяжитесь с нами по телефону или заполните
          форму обратной связи.
        </p>
      </div>
      <div className={s.imageContainer}>
        <Image src={image} fill alt="feedback" />
      </div>
    </div>
  );
};
