'use client';
import s from './FeedbackForm.module.scss';
import { Button } from '@/shared/ui/button';
import { showToast } from '@/shared/ui/toast';
import { useForm } from 'react-hook-form';
import { ControlledTextField } from '@/shared/ui/controlled-text-field';
import { ControlledTextArea } from '@/shared/ui/controlled-text-area/ControlledTextArea';
import { postFeedback } from '@/shared/api/feedback/postFeedback';
import { ControlledCheckbox } from '@/shared/ui/controlled-checkbox';
import { FeedbackFormScheme } from '@/shared/validation/feedback-scheme-creator';
import { zodResolver } from '@hookform/resolvers/zod';

export const FeedbackForm = () => {
  const {
    control,
    formState: { isValid },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      comment: '',
      checked: false,
    },
    mode: 'onChange',
    reValidateMode: 'onBlur',
    resolver: zodResolver(FeedbackFormScheme()),
  });

  const formHandler = handleSubmit(async (data) => {
    const { comment, name, phone } = data;

    try {
      await postFeedback({ comment, name, phone });

      showToast({
        variant: 'success',
        title: 'Спасибо за вашу заявку!',
        message: 'Скоро с вами свяжется наш менеджер и ответит на все ваши вопросы',
      });
    } catch (err) {
      console.error(err);
      showToast({
        variant: 'error',
        title: 'Не получили вашу заявку...',
        message: 'К сожалению, не получили вашу заявку. Повторите попытку снова.',
      });
    }
  });

  return (
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
          type="tel"
        />
        <ControlledTextArea
          control={control}
          name="comment"
          placeholder="Комментарий"
          label="Комментарий"
          className={s.textarea}
        />
        <ControlledCheckbox
          control={control}
          name="checked"
          label="Согласие на обработку персональных данных"
          privacyPolicy
        />
      </div>
      <Button type="submit" className={s.submitButton} disabled={!isValid}>
        Отправить
      </Button>
    </form>
  );
};
