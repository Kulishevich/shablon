'use client';
import s from './RecoveryForm.module.scss';
import { Button } from '@/shared/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RecoveryFormScheme } from '@/shared/validation/recovery-scheme-creator';
import { ControlledTextField } from '@/shared/ui/controlled-text-field';
import clsx from 'clsx';
import { useNotification } from '@/widgets/notification-popup';

export const RecoveryForm = ({
  onClose,
  backButton,
}: {
  onClose: () => void;
  backButton?: () => void;
}) => {
  const {
    control,
    formState: { isValid },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
    reValidateMode: 'onBlur',
    resolver: zodResolver(RecoveryFormScheme()),
  });
  const { showNotification, hideNotification } = useNotification();

  const formHandler = handleSubmit(async (data) => {
    const { email } = data;

    try {
      onClose();

      showNotification({
        type: 'success',
        title: 'Ссылка отправлена!',
        message: 'Пожалуйста, проверьте вашу электронную почту для восстановления пароля.',
        button: (
          <Button
            variant="primary"
            className={s.notificationButton}
            onClick={() => {
              hideNotification();
            }}
          >
            Спасибо!
          </Button>
        ),
      });
    } catch (err) {
      console.error(err);
      showNotification({
        type: 'error',
        title: 'Ссылка не отправлена...',
        message: 'Пожалуйста, повторите попытку ещё раз.',
        button: (
          <Button
            variant="primary"
            className={s.notificationButton}
            onClick={() => {
              hideNotification();
            }}
          >
            Повторить попытку
          </Button>
        ),
      });
    }
  });

  return (
    <form onSubmit={formHandler} className={s.formContainer}>
      <div className={clsx('h3', s.title)}>Восстановить пароль</div>
      <div className={clsx('body_3', s.description)}>
        Укажите адрес электронной почты, и мы вышлем вам ссылку для восстановления пароля.
      </div>
      <div className={s.form}>
        <ControlledTextField
          control={control}
          name="email"
          placeholder="Введите ваш адрес электронной почты"
          label="Адрес электронной почты"
          isRequired
        />
      </div>

      <Button type="submit" className={s.submitButton} disabled={!isValid}>
        Восстановить
      </Button>
      {backButton && (
        <Button variant="link" className={s.backButton} onClick={backButton}>
          Вернуться во вход
        </Button>
      )}
    </form>
  );
};
