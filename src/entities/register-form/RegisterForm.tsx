'use client';
import s from './RegisterForm.module.scss';
import { Button } from '@/shared/ui/button';

import { useForm } from 'react-hook-form';
import { ControlledTextField } from '@/shared/ui/controlled-text-field';
import { zodResolver } from '@hookform/resolvers/zod';
import { ControlledPhoneField } from '@/shared/ui/controlled-phone-field';
import { useDispatch } from 'react-redux';
import { registerUser } from '@/shared/lib/redux/slices/profileSlice';
import { AppDispatch } from '@/shared/lib/redux/store';
import { RegisterFormScheme } from '@/shared/validation/register-scheme-creator';
import { ControlledCheckbox } from '@/shared/ui/controlled-checkbox';
import { useNotification } from '@/widgets/notification-popup';
import { AuthPopup } from '@/widgets/auth-popup/AuthPopup';

export const RegisterForm = ({ onClose }: { onClose: () => void }) => {
  const {
    control,
    formState: { isValid },
    handleSubmit,
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      password: '',
      checked: false,
    },
    mode: 'onChange',
    reValidateMode: 'onBlur',
    resolver: zodResolver(RegisterFormScheme()),
  });
  const dispatch = useDispatch<AppDispatch>();
  const { showNotification } = useNotification();

  const formHandler = handleSubmit(async (data) => {
    const { firstName, lastName, phone, email, password, checked } = data;

    try {
      const result = await dispatch(
        registerUser({ name: firstName, last_name: lastName, phone, email, password })
      );

      if (registerUser.fulfilled.match(result)) {
        showNotification({
          type: 'success',
          title: 'Вы зарегистрированы!',
          message:
            'Поздравляем с успешной регистрацией! Теперь вам доступны все возможности для совершения покупок.',
          button: (
            <Button as="a" href="/catalog" className={s.notificationButton}>
              К покупкам
            </Button>
          ),
        });
        onClose();
      } else {
        const errorMessage = (result.payload as string) || 'Произошла ошибка при регистрации';
        console.error('Registration failed:', errorMessage);

        showNotification({
          type: 'error',
          title: 'Вы не зарегистрированы…',
          message:
            'Приносим извинения за возникшую ошибку при регистрации. Пожалуйста, попробуйте отправить данные повторно.',
          button: (
            <AuthPopup initialType="register">
              <Button className={s.notificationButton}>К регистрации</Button>
            </AuthPopup>
          ),
        });
        onClose();
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      showNotification({
        type: 'error',
        title: 'Вы не зарегистрированы…',
        message:
          'Приносим извинения за возникшую ошибку при регистрации. Пожалуйста, попробуйте отправить данные повторно.',
        button: (
          <AuthPopup initialType="register">
            <Button className={s.notificationButton}>К регистрации</Button>
          </AuthPopup>
        ),
      });
      onClose();
    }
  });

  return (
    <form onSubmit={formHandler} className={s.formContainer}>
      <div className={s.form}>
        <ControlledTextField
          control={control}
          name="firstName"
          placeholder="Ваше имя"
          label="Имя"
          isRequired
        />
        <ControlledTextField
          control={control}
          name="lastName"
          placeholder="Ваша фамилия"
          label="Фамилия"
          isRequired
        />
        <ControlledPhoneField
          control={control}
          name="phone"
          placeholder="Ваш номер телефона"
          label="Номер телефона"
          isRequired
          mask="+375 (99) 999-99-99"
        />
        <ControlledTextField
          control={control}
          name="email"
          placeholder="Ваш адрес электронной почты"
          label="Адрес электронной почты"
          isRequired
        />
        <ControlledTextField
          control={control}
          type="password"
          name="password"
          placeholder="Придумайте пароль"
          label="Пароль"
          isRequired
        />

        <ControlledCheckbox
          control={control}
          name="checked"
          label="Я согласен с условиями использования"
          privacyPolicy={true}
          isRequired
          className={s.checkbox}
        />
      </div>

      <Button type="submit" className={s.submitButton} disabled={!isValid}>
        Зарегистрироваться
      </Button>
    </form>
  );
};
