import React from 'react';
import s from './HeaderMobile.module.scss';
import { Logo } from '@/shared/ui/logo';
import { Button } from '@/shared/ui/button';
import { PhoneOutlinedIcon, ShoppingCartIcon } from '@/shared/assets';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';
import { HeaderBurgerMenu } from '@/features/header-burger-menu';
import { HeaderSearchPopup } from '@/features/header-search-popup';

export const HeaderMobile = () => {
  return (
    <div className={s.container}>
      <Logo variant="secondary" />
      <div className={s.buttonsContainer}>
        <Button variant="icon_secondary">
          <PhoneOutlinedIcon />
        </Button>
        <HeaderSearchPopup />
        <Button variant="icon_secondary" as={Link} href={paths.cart}>
          <ShoppingCartIcon />
        </Button>
        <HeaderBurgerMenu />
      </div>
    </div>
  );
};
