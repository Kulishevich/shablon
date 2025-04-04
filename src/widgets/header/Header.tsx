'use client';
import { useBreakpoint } from '@/shared/lib/hooks/useBreakpoint';
import React from 'react';
import { HeaderDesktop } from './header-desktop';
import { HeaderMobile } from './header-mobile';

export const Header = () => {
  const { isMobile } = useBreakpoint();

  return !isMobile ? <HeaderDesktop /> : <HeaderMobile />;
};
