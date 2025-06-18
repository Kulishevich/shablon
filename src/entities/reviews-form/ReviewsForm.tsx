'use client';
import s from './ReviewsForm.module.scss';
import { Button } from '@/shared/ui/button';
import { showToast } from '@/shared/ui/toast';
import { useForm } from 'react-hook-form';
import { ControlledTextField } from '@/shared/ui/controlled-text-field';
import { ControlledTextArea } from '@/shared/ui/controlled-text-area/ControlledTextArea';
import { ControlledCheckbox } from '@/shared/ui/controlled-checkbox';
import { ControlledFileInput } from '@/shared/ui/controlled-file-input';
import { ReviewsFormScheme } from '@/shared/validation/reviews-scheme-creator';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { ControlledRatingField } from '@/shared/ui/controlled-rating-field';

export const ReviewsForm = () => {
  const {
    control,
    formState: { isValid },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      title: '',
      comment: '',
      rating: 5,
      photo: undefined as File | undefined,
      checked: false,
    },
    mode: 'onChange',
    reValidateMode: 'onBlur',
    resolver: zodResolver(ReviewsFormScheme()),
  });

  const formHandler = handleSubmit(async (data) => {
    const { comment, name, phone, title, rating, photo } = data;

    try {
      //! TODO: отправить отзыв на сервер

      showToast({
        variant: 'success',
        title: 'Спасибо за ваш отзыв!',
        message: 'Ваш отзыв успешно отправлен и скоро появится на сайте',
      });
    } catch (err) {
      console.error(err);
      showToast({
        variant: 'error',
        title: 'Не удалось отправить отзыв...',
        message: 'К сожалению, не удалось отправить ваш отзыв. Повторите попытку снова.',
      });
    }
  });

  return (
    <form onSubmit={formHandler} className={s.formContainer}>
      <h2 className={clsx(s.title, 'h2')}>Добавить отзыв</h2>
      <div className={s.form}>
        <div className={s.fieldsContainer}>
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
            type="tel"
          />
        </div>
        <ControlledRatingField control={control} name="rating" label="Рейтинг" isRequired />
        <ControlledTextField
          control={control}
          name="title"
          placeholder="Заголовок"
          label="Заголовок"
          isRequired
          type="text"
        />
        <ControlledTextArea
          control={control}
          name="comment"
          placeholder="Отзыв"
          isRequired
          label="Отзыв"
          className={s.textarea}
        />

        <div className={s.fieldsContainer}>
          <ControlledFileInput
            control={control}
            name="photo"
            placeholder="Загрузите фото (в формате jpeg, png)"
            acceptedTypes="image/png,image/jpeg"
          />
          <ControlledCheckbox
            control={control}
            name="checked"
            label="Согласие на обработку персональных данных"
            privacyPolicy
          />
        </div>
      </div>
      <Button type="submit" className={s.submitButton} disabled={!isValid}>
        Отправить
      </Button>
    </form>
  );
};
