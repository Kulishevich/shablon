'use client';
import React from 'react';
import { Navigation } from './Navigation/Navigation';
import { Search } from './Search/Search';
import s from './HeaderDesktop.module.scss';

export const HeaderDesktop = () => {
  return (
    <div className={s.container}>
      <Navigation />
      <Search />
    </div>
  );
};
