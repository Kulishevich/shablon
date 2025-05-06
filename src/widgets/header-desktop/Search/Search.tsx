import React from 'react';
import s from './Search.module.scss';
import { Logo } from '@/shared/ui/logo';
import { BurgerButton } from '@/entities/burger-button';
import { SearchInput } from '@/entities/search-input';
import { CartButton } from '@/entities/cart-button';
import { CategoryT } from '@/shared/api/category/types';

export const Search = ({ categories }: { categories: CategoryT[] | null }) => {
  return (
    <div className={s.container}>
      <Logo variant="primary" />
      <BurgerButton categories={categories} />
      <SearchInput />
      <CartButton />
    </div>
  );
};
