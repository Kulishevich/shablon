'use client';
import React, { useState } from 'react';
import s from './ProfileSettings.module.scss';
import { Button } from '@/shared/ui/button';
import { showToast } from '@/shared/ui/toast';
import { useForm } from 'react-hook-form';
import { ControlledTextField } from '@/shared/ui/controlled-text-field';
import { zodResolver } from '@hookform/resolvers/zod';
import { PasswordChangeFormScheme } from '@/shared/validation/password-change-scheme-creator';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/shared/lib/redux/store';
import {
  selectPasswordChangeLoading,
  selectDeleteAccountLoading,
  selectAuthError,
} from '@/shared/lib/redux/selectors/ProfileSelectors';
import { changePassword, deleteAccount, logout } from '@/shared/lib/redux/slices/profileSlice';
import { useRouter } from 'next/navigation';

export const ProfileSettings = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [deletePassword, setDeletePassword] = useState('');

  // Получаем данные из стора
  const authError = useSelector(selectAuthError);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const {
    control,
    formState: { isValid },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      password: '',
      newPassword: '',
    },
    mode: 'onChange',
    reValidateMode: 'onBlur',
    resolver: zodResolver(PasswordChangeFormScheme()),
  });

  const formHandler = handleSubmit(async (data) => {
    const { password, newPassword } = data;

    try {
      const result = await dispatch(
        changePassword({
          current_password: password,
          new_password: newPassword,
        })
      );

      if (changePassword.fulfilled.match(result)) {
        showToast({
          variant: 'success',
          title: 'Пароль успешно изменен!',
        });
        reset();
      } else {
        const errorMessage = (result.payload as string) || 'Произошла ошибка при смене пароля';
        showToast({
          variant: 'error',
          title: 'Ошибка смены пароля',
          message: errorMessage,
        });
      }
    } catch (err) {
      console.error(err);
      showToast({
        variant: 'error',
        title: 'Ошибка смены пароля',
        message: 'Не удалось сменить пароль. Попробуйте снова.',
      });
    }
  });

  const handleDeleteAccount = async () => {
    if (!deletePassword.trim()) {
      showToast({
        variant: 'error',
        title: 'Ошибка',
        message: 'Введите пароль для подтверждения удаления аккаунта',
      });
      return;
    }

    try {
      const result = await dispatch(
        deleteAccount({
          password: deletePassword,
          confirmDeletion: true,
        })
      );

      if (deleteAccount.fulfilled.match(result)) {
        showToast({
          variant: 'success',
          title: 'Аккаунт успешно удален',
        });
        router.push('/');
      } else {
        const errorMessage = (result.payload as string) || 'Произошла ошибка при удалении аккаунта';
        showToast({
          variant: 'error',
          title: 'Ошибка удаления аккаунта',
          message: errorMessage,
        });
      }
    } catch (err) {
      console.error(err);
      showToast({
        variant: 'error',
        title: 'Ошибка удаления аккаунта',
        message: 'Не удалось удалить аккаунт. Попробуйте снова.',
      });
    }
  };

  return (
    <div className={s.container}>
      <div className={s.section}>
        <form onSubmit={formHandler} className={s.form}>
          <ControlledTextField
            control={control}
            name="password"
            type="password"
            label="Текущий пароль"
            placeholder="Введите текущий пароль"
            isRequired
            variant="password"
          />
          <ControlledTextField
            control={control}
            name="newPassword"
            type="password"
            label="Новый пароль"
            placeholder="Введите новый пароль"
            isRequired
            variant="password"
          />

          <div className={s.buttonGroup}>
            {isEditing ? (
              <>
                <Button type="submit" disabled={!isValid} className={s.saveButton}>
                  Сохранить изменения
                </Button>
              </>
            ) : (
              <Button
                type="button"
                variant="link"
                onClick={handleEditToggle}
                className={s.editButton}
              >
                Редактировать пароль
              </Button>
            )}
          </div>
        </form>
      </div>

      <Button
        type="button"
        variant="primary"
        onClick={handleDeleteAccount}
        className={s.deleteButton}
      >
        Удалить профиль
      </Button>
    </div>
  );
};
