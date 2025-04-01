'use client';
import React, { useState } from 'react';
import { Button } from '@/shared/ui/button';
import { BurgerIcon, ShoppingCartIcon } from '@/shared/assets';
import { TextField } from '@/shared/ui/text-field';
import { Typography } from '@/shared/ui/typography';
import s from './Search.module.scss';
import { NavigationPopup } from '@/entities/navigation-popup';
import { Logo } from '@/shared/ui/logo';

export const Search = () => {
  const [isOpenNavigation, setIsOpenNavigation] = useState(false);

  return (
    <div className={s.container}>
      <Logo />
      <div className={s.burgerMenu}>
        <Button
          variant="burger"
          className={s.button}
          onClick={() => setIsOpenNavigation(true)}
        >
          <BurgerIcon />
          Каталог
        </Button>
        <NavigationPopup
          isOpen={isOpenNavigation}
          setIsOpen={setIsOpenNavigation}
        />
      </div>
      <TextField
        placeholder="Поиск по сайту"
        variant="search"
        className={s.input}
      />
      <div className={s.cart}>
        <Button variant="icon_2">
          <ShoppingCartIcon width={32} height={32} />
        </Button>
        <div className={s.content}>
          <Typography variant="body_4">Корзина</Typography>
          <Typography variant="body_7">0 товаров(0 BYN)</Typography>
        </div>
      </div>
    </div>
  );
};
