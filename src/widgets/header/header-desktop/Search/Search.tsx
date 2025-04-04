import React from 'react';
import s from './Search.module.scss';
import { Logo } from '@/shared/ui/logo';
import { BurgerButton } from '@/entities/burger-button';
import { SearchInput } from '@/entities/search-input';
import { CartButton } from '@/entities/cart-button';

export const Search = () => {
  return (
    <div className={s.container}>
      <Logo variant="primary" />
      <BurgerButton />
      <SearchInput />
      <CartButton />
    </div>
  );
};
