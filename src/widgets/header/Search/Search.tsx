import Image from 'next/image';
import React from 'react';
import { Button } from '@/shared/ui/button';
import { BurgerIcon, ShoppingCartIcon } from '@/shared/assets';
import { TextField } from '@/shared/ui/text-field';
import { Typography } from '@/shared/ui/typography';
import s from './Search.module.scss';

export const Search = () => {
  return (
    <div className={s.container}>
      <Image src="/logo.png" width={220} height={86} alt="logo" />
      <Button variant="burger" className={s.button}>
        <BurgerIcon />
        Каталог
      </Button>
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
