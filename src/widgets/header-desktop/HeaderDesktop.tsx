import React from 'react';
import { Navigation } from './Navigation/Navigation';
import { Search } from './Search/Search';
import s from './HeaderDesktop.module.scss';
import { CategoryT } from '@/shared/api/category/types';
import { ContactsT } from '@/shared/api/design/types';

export const HeaderDesktop = ({
  categories,
  contacts,
}: {
  categories: CategoryT[] | null;
  contacts: ContactsT | null;
}) => {
  return (
    <div className={s.container}>
      <Navigation contacts={contacts} />
      <Search categories={categories} />
    </div>
  );
};
