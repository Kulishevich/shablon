'use client';
import React from 'react';
import s from './ProfileNavigation.module.scss';
import clsx from 'clsx';
import Link from 'next/link';
import { ArrowRightIcon, UserLogOutIcon } from '@/shared/assets';
import { useDispatch } from 'react-redux';
import { logout } from '@/shared/lib/redux/slices/profileSlice';
import { Button } from '@/shared/ui/button';

export const ProfileNavigation = ({ activePage }: { activePage: string }) => {
  const dispatch = useDispatch();

  return (
    <div className={s.container}>
      <Link href="/profile/info" className={clsx(s.link, { [s.active]: activePage === 'info' })}>
        <span className="h6">Личные данные</span> <ArrowRightIcon />
      </Link>
      <Link
        href="/profile/orders"
        className={clsx(s.link, { [s.active]: activePage === 'orders' })}
      >
        <span className="h6">История заказов</span> <ArrowRightIcon />
      </Link>
      <Link
        href="/profile/settings"
        className={clsx(s.link, { [s.active]: activePage === 'settings' })}
      >
        <span className="h6">Настройки профиля</span>
        <ArrowRightIcon />
      </Link>

      <Button variant="link" className={s.button} onClick={() => dispatch(logout())}>
        <UserLogOutIcon />
        Выйти из аккаунта
      </Button>
    </div>
  );
};
