import React from 'react';
import { Navigation } from '../Navigation/Navigation';
import { Search } from '../Search/Search';
import s from './Header.module.scss';

export const Header = () => {
  return (
    <div className={s.container}>
      <Navigation />
      <Search />
    </div>
  );
};
