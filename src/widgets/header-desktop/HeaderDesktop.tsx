import React from 'react';
import { Navigation } from './Navigation/Navigation';
import { Search } from './Search/Search';
import s from './HeaderDesktop.module.scss';
import { CategoryT } from '@/shared/api/category/types';
import { ContactsT } from '@/shared/api/design/types';
import { ProductT } from '@/shared/api/product/types';
import { HeaderFixed } from './HeaderFixed';

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
    <>
      <header className={s.container} data-header-desktop>
        <Navigation contacts={contacts} />
        <Search categories={categories} products={products} />
      </header>
      <HeaderFixed categories={categories} contacts={contacts} products={products} />
    </>
  );
};
