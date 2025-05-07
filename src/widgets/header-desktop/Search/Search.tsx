import React from 'react';
import s from './Search.module.scss';
import { Logo } from '@/shared/ui/logo';
import { BurgerButton } from '@/entities/burger-button';
import { SearchInput } from '@/entities/search-input';
import { CartButton } from '@/entities/cart-button';
import { CategoryT } from '@/shared/api/category/types';
import { ProductT } from '@/shared/api/product/types';

export const Search = ({
  categories,
  products,
}: {
  categories: CategoryT[] | null;
  products: ProductT[];
}) => {
  return (
    <div className={s.container}>
      <Logo variant="primary" />
      <BurgerButton categories={categories} />
      <SearchInput categories={categories} products={products} />
      <CartButton />
    </div>
  );
};
