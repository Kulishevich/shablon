'use client';
import { Button } from '@/shared/ui/button';
import React, { useEffect, useRef, useState } from 'react';
import s from './BurgerButton.module.scss';
import { NavigationPopup } from '../navigation-popup';
import { BurgerIcon } from '@/shared/assets';

export const BurgerButton = () => {
  const [isOpenNavigation, setIsOpenNavigation] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleOpenCatalog = () => {
    setIsOpenNavigation(true);
  };

  const handleCloseCatalog = () => {
    setIsOpenNavigation(false);
  };

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    container.addEventListener('mouseenter', handleOpenCatalog);
    container.addEventListener('mouseleave', handleCloseCatalog);

    return () => {
      container.removeEventListener('mouseenter', handleOpenCatalog);
      container.removeEventListener('mouseleave', handleCloseCatalog);
    };
  }, []);

  return (
    <div className={s.burgerMenu} ref={containerRef}>
      <Button variant="burger" onClick={() => setIsOpenNavigation(true)}>
        <BurgerIcon />
        Каталог
      </Button>
      {isOpenNavigation && <NavigationPopup />}
    </div>
  );
};
