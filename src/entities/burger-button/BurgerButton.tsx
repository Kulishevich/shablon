'use client';
import { Button } from '@/shared/ui/button';
import React, { useState } from 'react';
import s from './BurgerButton.module.scss';
import { NavigationPopup } from '../navigation-popup';
import { BurgerIcon } from '@/shared/assets';

export const BurgerButton = () => {
  const [isOpenNavigation, setIsOpenNavigation] = useState(false);

  return (
    <div className={s.burgerMenu}>
      <Button
        variant="burger"
        className={s.button}
        onClick={() => setIsOpenNavigation(true)}
      >
        <BurgerIcon />
        Каталог
      </Button>
      <NavigationPopup
        isOpen={isOpenNavigation}
        setIsOpen={setIsOpenNavigation}
      />
    </div>
  );
};
