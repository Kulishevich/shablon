'use client';
import React, { useState, useEffect } from 'react';
import s from './ProfileInfo.module.scss';
import { Button } from '@/shared/ui/button';
import { showToast } from '@/shared/ui/toast';
import { useForm } from 'react-hook-form';
import { ControlledTextField } from '@/shared/ui/controlled-text-field';
import { zodResolver } from '@hookform/resolvers/zod';
import { ControlledPhoneField } from '@/shared/ui/controlled-phone-field';
import { ProfileInfoFormScheme } from '@/shared/validation/profile-info-scheme-creator';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/shared/lib/redux/store';
import {
  selectUser,
  selectProfileLoading,
  selectProfileError,
} from '@/shared/lib/redux/selectors/ProfileSelectors';
import { fetchUserProfile, updateUserProfile } from '@/shared/lib/redux/slices/profileSlice';

export const ProfileInfo = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isEditing, setIsEditing] = useState(false);

  // Получаем данные из стора
  const user = useSelector(selectUser);
  const isProfileLoading = useSelector(selectProfileLoading);
  const profileError = useSelector(selectProfileError);

  const {
    control,
    formState: { isValid },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
    },
    mode: 'onChange',
    reValidateMode: 'onBlur',
    resolver: zodResolver(ProfileInfoFormScheme()),
  });

  // Загружаем профиль при монтировании компонента
  useEffect(() => {
    if (!user) {
      dispatch(fetchUserProfile());
    }
  }, [dispatch, user]);

  // Обновляем форму при получении данных пользователя
  useEffect(() => {
    if (user) {
      reset({
        firstName: user.name || '',
        lastName: user.last_name || '',
        phone: user.phone || '',
        email: user.email || '',
      });
    }
  }, [user, reset]);

  const formHandler = handleSubmit(async (data) => {
    const { firstName, lastName, phone, email } = data;

    try {
      const result = await dispatch(
        updateUserProfile({
          name: firstName,
          last_name: lastName,
          phone,
          email,
        })
      );

      if (updateUserProfile.fulfilled.match(result)) {
        showToast({
          variant: 'success',
          title: 'Данные профиля успешно обновлены!',
        });
        setIsEditing(false);
      } else {
        const errorMessage =
          (result.payload as string) || 'Произошла ошибка при обновлении профиля';
        showToast({
          variant: 'error',
          title: 'Ошибка сохранения',
          message: errorMessage,
        });
      }
    } catch (err) {
      console.error(err);
      showToast({
        variant: 'error',
        title: 'Ошибка сохранения',
        message: 'Не удалось сохранить данные профиля. Попробуйте снова.',
      });
    }
  });

  const handleEditToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isEditing) {
      if (user) {
        reset({
          firstName: user.name || '',
          lastName: user.last_name || '',
          phone: user.phone || '',
          email: user.email || '',
        });
      }
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  if (isProfileLoading && !user) {
    return (
      <div className={s.container}>
        <div className={s.loading}>Загрузка данных профиля...</div>
      </div>
    );
  }

  // Показываем ошибку загрузки
  if (profileError && !user) {
    return (
      <div className={s.container}>
        <div className={s.error}>
          Ошибка загрузки профиля: {profileError}
          <Button type="button" onClick={() => dispatch(fetchUserProfile())} variant="secondary">
            Попробовать снова
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={s.container}>
      <form onSubmit={formHandler} className={s.form}>
        <ControlledTextField
          control={control}
          name="firstName"
          label="Имя"
          placeholder="Введите ваше имя"
          disabled={!isEditing}
          isRequired
        />

        <ControlledTextField
          control={control}
          name="lastName"
          label="Фамилия"
          placeholder="Введите вашу фамилию"
          disabled={!isEditing}
          isRequired
        />

        <ControlledPhoneField
          control={control}
          name="phone"
          label="Телефон"
          placeholder="Введите ваш телефон"
          disabled={!isEditing}
          isRequired
          mask="+375 (99) 999-99-99"
        />

        <ControlledTextField
          control={control}
          name="email"
          type="email"
          label="Электронная почта"
          placeholder="Введите вашу почту"
          disabled={!isEditing}
          isRequired
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
              Редактировать данные
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};
