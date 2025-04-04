'use client';
import React from 'react';
import { Navigation } from '../Navigation/Navigation';
import { Search } from '../Search/Search';
import s from './Header.module.scss';
import { useBreakpoint } from '@/shared/lib/hooks/useBreakpoint';

export const Header = () => {
  const { isMobile } = useBreakpoint();

  return (
    <div className={s.container}>
      <Navigation />
      <Search />
    </div>
  );
};
