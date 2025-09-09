import React from 'react';
import { FooterContent } from './FooterContent/FooterContent';
import { FooterInfo } from './FooterInfo/FooterInfo';
import { CategoryT } from '@/shared/api/category/types';
import { ContactsT } from '@/shared/api/design/types';
import s from './Footer.module.scss';
import { ServiceT } from '@/shared/api/services/types';

export const Footer = ({
  categories,
  contacts,
  services,
}: {
  categories: CategoryT[] | null;
  contacts: ContactsT | null;
  services: ServiceT[] | null;
}) => {
  return (
    <footer className={s.container}>
      <div className={s.wrapper}>
        <FooterContent categories={categories} contacts={contacts} services={services} />
        <FooterInfo />
      </div>
    </footer>
  );
};
