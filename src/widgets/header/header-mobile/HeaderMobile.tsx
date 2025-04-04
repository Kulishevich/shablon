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

export const HeaderMobile = () => {
  return (
    <div className={s.container}>
      <Logo width={106} height={41} />
      <div className={s.buttonsContainer}>
        <Button variant="icon_secondary">
          <PhoneOutlinedIcon width={22} height={22} />
        </Button>
        <Button variant="icon_secondary">
          <SearchIcon width={22} height={22} />
        </Button>
        <Button variant="icon_secondary">
          <ShoppingCartIcon width={22} height={22} />
        </Button>
        <Button variant="icon_secondary">
          <BurgerMobileIcon width={22} height={22} />
        </Button>
      </div>
    </div>
  );
};
