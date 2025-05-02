'use client';
import React from 'react';
import s from './FeedbackForm.module.scss';
import Image from 'next/image';
import { TextField } from '@/shared/ui/text-field';
import { TextArea } from '@/shared/ui/text-area';
import { Checkbox } from '@/shared/ui/checkbox';
import { Button } from '@/shared/ui/button';
import { showToast } from '@/shared/ui/toast';
import { useForm } from 'react-hook-form';
import { ControlledTextField } from '@/shared/ui/controlled-text-field';
import { ControlledTextArea } from '@/shared/ui/controlled-text-area/ControlledTextArea';
import { postContact } from '@/shared/api/contacts/postContact';

export const FeedbackForm = () => {
  const {
    control,
    formState: { isValid },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      message: '',
    },
  });

  const formHandler = handleSubmit(async (data) => {
    console.log(data);

    try {
      const res = await postContact(data);

      console.log(res);
      showToast({
        variant: 'success',
        title: 'Спасибо за вашу заявку!',
        message:
          'Скоро с вами свяжется наш менеджер и ответит на все ваши вопросы',
      });
    } catch (err) {
      console.error(err);
    }
  });

  return (
    <div className={s.container}>
      <div className={s.titleContainer}>
        <div className={s.textContent}>
          <h2 className="h2">Связаться с нами</h2>
          <p className="body_2">
            Мы всегда готовы помочь вам с любыми вопросами. Свяжитесь с нами по
            телефону или заполните форму обратной связи.
          </p>
        </div>
        <div className={s.imageContainer}>
          <Image src={'/feedback.png'} fill alt="feedback" />
        </div>
      </div>

      <form onSubmit={formHandler} className={s.formContainer}>
        <div className={s.form}>
          <ControlledTextField
            control={control}
            name="name"
            placeholder="Введите ваше имя"
            label="Ваше имя"
            isRequired
          />
          <ControlledTextField
            control={control}
            name="phone"
            placeholder="Введите ваш телефон"
            label="Ваш телефон"
            isRequired
          />
          <ControlledTextArea
            control={control}
            name="message"
            placeholder="Комментарий"
            label="Комментарий"
            className={s.textarea}
          />
          <Checkbox label="Согласие на обработку персональных данных" />
        </div>
        <Button type="submit" className={s.submitButton}>
          Отправить
        </Button>
      </form>
    </div>
  );
};
