import React from 'react';
import s from './HeaderMobile.module.scss';
import { Logo } from '@/shared/ui/logo';
import { Button } from '@/shared/ui/button';
import {
  BurgerMobileIcon,
  PhoneOutlinedIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@/shared/assets';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';
import { HeaderBurgerMenu } from '@/features/header-burger-menu';

export const HeaderMobile = () => {
  return (
    <div className={s.container}>
      <Logo variant="secondary" />
      <div className={s.buttonsContainer}>
        <Button variant="icon_secondary">
          <PhoneOutlinedIcon width={22} height={22} />
        </Button>
        <Button variant="icon_secondary">
          <SearchIcon width={22} height={22} />
        </Button>
        <Button variant="icon_secondary" as={Link} href={paths.cart}>
          <ShoppingCartIcon width={22} height={22} />
        </Button>
        <HeaderBurgerMenu />
      </div>
    </div>
  );
};
