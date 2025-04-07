import React from 'react';
import { FooterContent } from './FooterContent/FooterContent';
import { FooterInfo } from './FooterInfo/FooterInfo';
import s from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <FooterContent />
        <FooterInfo />
      </div>
    </div>
  );
};
