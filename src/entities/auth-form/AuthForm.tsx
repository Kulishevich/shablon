'use client';
import s from './AuthForm.module.scss';
import { Button } from '@/shared/ui/button';
import { showToast } from '@/shared/ui/toast';
import { useForm } from 'react-hook-form';
import { ControlledTextField } from '@/shared/ui/controlled-text-field';
import { zodResolver } from '@hookform/resolvers/zod';
import { ControlledPhoneField } from '@/shared/ui/controlled-phone-field';
import { AuthFormScheme } from '@/shared/validation/auth-scheme-creator';
import { useDispatch } from 'react-redux';
import { loginUser } from '@/shared/lib/redux/slices/profileSlice';
import { AppDispatch } from '@/shared/lib/redux/store';

export const AuthForm = ({
  onClose,
  onSwitchToRecovery,
}: {
  onClose: () => void;
  onSwitchToRecovery?: () => void;
}) => {
  const {
    control,
    formState: { isValid },
    handleSubmit,
  } = useForm({
    defaultValues: {
      phone: '',
      password: '',
    },
    mode: 'onChange',
    reValidateMode: 'onBlur',
    resolver: zodResolver(AuthFormScheme()),
  });
  const dispatch = useDispatch<AppDispatch>();

  const formHandler = handleSubmit(async (data) => {
    const { phone, password } = data;

    try {
      const result = await dispatch(loginUser({ phone, password }));

      console.log(result);

      if (loginUser.fulfilled.match(result)) {
        showToast({
          variant: 'success',
          title: 'Вы вошли в систему!',
        });
      } else {
        const errorMessage = (result.payload as string) || 'Произошла ошибка при входе';
        showToast({
          variant: 'error',
          title: 'Ошибка входа...',
          message: errorMessage,
        });
      }
      onClose();
    } catch (err) {
      console.error(err);
      showToast({
        variant: 'error',
        title: 'Ошибка входа...',
        message: 'К сожалению, не получилось войти в систему. Повторите попытку снова.',
      });
      onClose();
    }
  });

  return (
    <form onSubmit={formHandler} className={s.formContainer}>
      <div className={s.form}>
        <ControlledPhoneField
          control={control}
          name="phone"
          placeholder="Введите ваш телефон"
          label="Ваш телефон"
          isRequired
          mask="+375 (99) 999-99-99"
        />
        <ControlledTextField
          control={control}
          type="password"
          name="password"
          placeholder="Введите ваш пароль"
          label="Пароль"
          variant="password"
          isRequired
        />
      </div>
      {onSwitchToRecovery && (
        <Button
          variant="link"
          className={s.forgotPassword}
          onClick={onSwitchToRecovery}
          type="button"
        >
          Забыли пароль?
        </Button>
      )}
      <Button type="submit" className={s.submitButton} disabled={!isValid}>
        Войти
      </Button>
    </form>
  );
};
