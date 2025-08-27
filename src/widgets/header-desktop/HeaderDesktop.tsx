import React from 'react';
import { Navigation } from './Navigation/Navigation';
import { Search } from './Search/Search';
import s from './HeaderDesktop.module.scss';
import { CategoryT } from '@/shared/api/category/types';
import { ContactsT } from '@/shared/api/design/types';
import { HeaderFixed } from './HeaderFixed';
import { ServiceT } from '@/shared/api/services/types';
import { HeaderLine } from './HeaderLine/HeaderLine';

export const HeaderDesktop = ({
  categories,
  contacts,
}: {
  categories: CategoryT[];
  contacts: ContactsT | null;
}) => {
  return (
    <>
      <header className={s.container} data-header-desktop>
        <HeaderLine />
        <Navigation contacts={contacts} />
        <Search categories={categories} />
      </header>
      <HeaderFixed categories={categories} contacts={contacts} />
    </>
  );
};
