import React from 'react';
import { Navigation } from './Navigation/Navigation';
import { Search } from './Search/Search';
import s from './HeaderDesktop.module.scss';
import { CategoryT } from '@/shared/api/category/types';
import { ContactsT } from '@/shared/api/design/types';
import { ProductT } from '@/shared/api/product/types';
import { HeaderFixed } from './HeaderFixed';
import { ServiceT } from '@/shared/api/services/types';

export const HeaderDesktop = ({
  categories,
  contacts,
  services,
}: {
  categories: CategoryT[];
  contacts: ContactsT | null;
  services: ServiceT[];
}) => {
  return (
    <>
      <header className={s.container} data-header-desktop>
        <Navigation contacts={contacts} services={services} />
        <Search categories={categories} />
      </header>
      <HeaderFixed categories={categories} contacts={contacts} services={services} />
    </>
  );
};
