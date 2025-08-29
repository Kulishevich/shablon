'use client';
import React from 'react';
import s from './ProfileButton.module.scss';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/shared/lib/redux/store';
import {
  OrderHistoryIcon,
  UserIcon,
  UserInfoIcon,
  UserSettingIcon,
  UserLogOutIcon,
} from '@/shared/assets';
import Link from 'next/link';
import { logout } from '@/shared/lib/redux/slices/profileSlice';
import { AuthPopup } from '@/widgets/auth-popup';

export const ProfileButton = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.profile);
  const dispatch = useDispatch();

  if (!isAuthenticated) {
    return (
      <AuthPopup>
        <div className={s.container}>
          <UserIcon />
          <span className="body_7">Личный кабинет</span>
        </div>
      </AuthPopup>
    );
  }

  return (
    <div className={s.container}>
      <Link href="/profile">
        <UserIcon />
        <span className="body_7">Личный кабинет</span>
      </Link>

      <div className={s.dropdown}>
        <Link href="/profile/info" className={s.dropdownItem}>
          <UserInfoIcon />
          <span className="body_7">Личные данные</span>
        </Link>
        <Link href="/profile/orders" className={s.dropdownItem}>
          <OrderHistoryIcon />
          <span className="body_7">История заказов</span>
        </Link>
        <Link href="/profile/settings" className={s.dropdownItem}>
          <UserSettingIcon />
          <span className="body_7">Настройки профиля</span>
        </Link>
        <div
          className={clsx(s.dropdownItem, s.logOut)}
          onClick={() => {
            dispatch(logout());
          }}
        >
          <UserLogOutIcon />
          <span className="body_7">Выйти из аккаунта</span>
        </div>
      </div>
    </div>
  );
};
