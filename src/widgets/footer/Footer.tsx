import React from 'react';
import { FooterContent } from './FooterContent/FooterContent';
import { FooterInfo } from './FooterInfo/FooterInfo';
import { CategoryT } from '@/shared/api/category/types';
import { ContactsT } from '@/shared/api/design/types';
import s from './Footer.module.scss';

export const Footer = ({
  categories,
  contacts,
}: {
  categories: CategoryT[] | null;
  contacts: ContactsT | null;
}) => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <FooterContent categories={categories} contacts={contacts} />
        <FooterInfo />
      </div>
    </div>
  );
};
