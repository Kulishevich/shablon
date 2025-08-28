'use client';
import React from 'react';
import s from './HeaderMobile.module.scss';
import { Logo } from '@/shared/ui/logo';
import { Button } from '@/shared/ui/button';
import { PhoneOutlinedIcon, ShoppingCartIcon, UserIcon } from '@/shared/assets';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';
import { HeaderBurgerMenu } from '@/features/header-burger-menu';
import { HeaderSearchPopup } from '@/features/header-search-popup';
import { CategoryT } from '@/shared/api/category/types';
import { ContactsT } from '@/shared/api/design/types';
import { ReduxProvider } from '@/shared/lib/redux/providers/ReduxProvider';
import { useSelector } from 'react-redux';
import { RootState } from '@/shared/lib/redux/store';
import { AuthPopup } from '../auth-popup/AuthPopup';

export const HeaderMobile = ({
  categories,
  contacts,
}: {
  categories: CategoryT[] | null;
  contacts: ContactsT | null;
}) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.profile);

  return (
    <div className={s.container}>
      <Logo variant="secondary" />
      <div className={s.buttonsContainer}>
        <HeaderSearchPopup categories={categories} />

        <Button variant="icon_secondary" as={Link} href={paths.cart} aria-label="Корзина">
          <ShoppingCartIcon />
        </Button>
        {isAuthenticated ? (
          <Button
            as={'a'}
            href={paths.profile}
            variant="icon_secondary"
            aria-label="Личный кабинет"
          >
            <UserIcon />
          </Button>
        ) : (
          <AuthPopup>
            <Button variant="icon_secondary" aria-label="Личный кабинет">
              <UserIcon />
            </Button>
          </AuthPopup>
        )}
        <HeaderBurgerMenu categories={categories} contacts={contacts} />
      </div>
    </div>
  );
};
