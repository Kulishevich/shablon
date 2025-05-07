import React from 'react';
import { Navigation } from './Navigation/Navigation';
import { Search } from './Search/Search';
import s from './HeaderDesktop.module.scss';
import { CategoryT } from '@/shared/api/category/types';
import { ContactsT } from '@/shared/api/design/types';
import { ProductT } from '@/shared/api/product/types';

export const HeaderDesktop = ({
  categories,
  contacts,
  products,
}: {
  categories: CategoryT[];
  contacts: ContactsT | null;
  products: ProductT[];
}) => {
  return (
    <div className={s.container}>
      <Navigation contacts={contacts} />
      <Search categories={categories} products={products} />
    </div>
  );
};
