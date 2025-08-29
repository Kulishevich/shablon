'use client';
import s from './ProfileSection.module.scss';
import { Button } from '@/shared/ui/button';
import {
  OrderHistoryIcon,
  UserLogOutIcon,
  UserSettingIcon,
  UserProfileIcon,
} from '@/shared/assets';
import { useDispatch } from 'react-redux';
import { logout } from '@/shared/lib/redux/slices/profileSlice';
import Link from 'next/link';

export const ProfileSection = () => {
  const dispatch = useDispatch();

  return (
    <div className={s.container}>
      <div className={s.title}>
        <h1 className="h1">Личный кабинет</h1>
      </div>
      <div className={s.content}>
        <Link href="/profile/info" className={s.contentItem}>
          <UserProfileIcon />
          <span className="h4">Личные данные</span>
        </Link>
        <Link href="/profile/orders" className={s.contentItem}>
          <OrderHistoryIcon />
          <span className="h4">История заказов</span>
        </Link>
        <Link href="/profile/settings" className={s.contentItem}>
          <UserSettingIcon />
          <span className="h4">Настройки профиля</span>
        </Link>
      </div>
      <Button variant="primary" className={s.button} onClick={() => dispatch(logout())}>
        <UserLogOutIcon />
        Выйти из аккаунта
      </Button>
    </div>
  );
};
