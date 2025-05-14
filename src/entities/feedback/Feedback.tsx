import React from 'react';
import s from './Feedback.module.scss';
import { FeedbackForm } from '../feedback-form';
import { getSetting } from '@/shared/api/design/getSetting';
import Image from 'next/image';

export const Feedback = async () => {
  const setting = await getSetting();

  return (
    <div className={s.container}>
      <div className={s.titleContainer}>
        <div className={s.textContent}>
          <h2 className="h2">Связаться с нами</h2>
          <p className="body_2">
            Мы всегда готовы помочь вам с любыми вопросами. Свяжитесь с нами по телефону или
            заполните форму обратной связи.
          </p>
        </div>
        <div className={s.imageContainer}>
          <Image
            src={`${process.env.NEXT_PUBLIC_STORE_URL}/${setting?.feedback_image}`}
            fill
            alt="feedback"
          />
        </div>
      </div>

      <FeedbackForm />
    </div>
  );
};
