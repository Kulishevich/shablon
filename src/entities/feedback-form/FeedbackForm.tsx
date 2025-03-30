import React from 'react';
import s from './FeedbackForm.module.scss';
import Image from 'next/image';
import { Typography } from '@/shared/ui/typography';
import { TextField } from '@/shared/ui/text-field';
import { TextArea } from '@/shared/ui/text-area';
import { Checkbox } from '@/shared/ui/checkbox';
import { Button } from '@/shared/ui/button';

export const FeedbackForm = () => {
  return (
    <div className={s.container}>
      <div className={s.imageContainer}>
        <div className={s.textContent}>
          <Typography variant="h2">Связаться с нами</Typography>
          <Typography variant="body_2">
            Мы всегда готовы помочь вам с любыми вопросами. Свяжитесь с нами по
            телефону или заполните форму обратной связи.
          </Typography>
        </div>
        <Image src={'/feedback.png'} width={612} height={355} alt="feedback" />
      </div>

      <div className={s.formContainer}>
        <div className={s.form}>
          <TextField
            placeholder="Введите ваше имя"
            label="Ваше имя"
            isRequired
          />
          <TextField
            placeholder="Введите ваш телефон"
            label="Ваш телефон"
            isRequired
          />
          <TextArea placeholder="Комментарий" label="Комментарий" />
          <Checkbox label="Согласие на обработку персональных данных" />
        </div>
        <Button>Отправить</Button>
      </div>
    </div>
  );
};
