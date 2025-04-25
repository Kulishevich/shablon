import React, { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import s from './HeaderBurgerMenu.module.scss';
import { Button } from '@/shared/ui/button';
import { BurgerMobileIcon, CloseIcon } from '@/shared/assets';
import { navigation } from '@/shared/config/constants/navigation';
import Link from 'next/link';
import { SocialMedia } from '@/entities/social-media';
import { CompanyContacts } from '@/entities/company-contacts';
import { CollapseHeader } from '@/entities/collapse-header';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

const categories = [
  'Мебель',
  'Фурнитура',
  'Декор для дома',
  'Ароматы для дома',
  'Мебель',
  'Фурнитура',
  'Декор для дома',
  'Ароматы для дома',
];

export const HeaderBurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const html = document.documentElement;

    if (isOpen) {
      html.style.overflow = 'hidden';
    } else {
      html.style.overflow = '';
    }

    return () => {
      html.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className={s.container}>
      <Button
        variant="icon_secondary"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <CloseIcon /> : <BurgerMobileIcon />}
      </Button>
      {isOpen && (
        <div className={s.content}>
          <div className={s.navigation}>
            <Link
              className="h2"
              href={navigation[0].path}
              onClick={() => setIsOpen(false)}
            >
              {navigation[0].title}
            </Link>
            <CollapseHeader title={'Каталог'}>
              {categories.map((category, index) => (
                <Link
                  className="h3"
                  key={index}
                  href={'/'}
                  onClick={() => setIsOpen(false)}
                >
                  {category}
                </Link>
              ))}
            </CollapseHeader>
            {navigation.slice(1, 5).map((nav, index) => (
              <Link
                className="h2"
                href={nav.path}
                key={index}
                onClick={() => setIsOpen(false)}
              >
                {nav.title}
              </Link>
            ))}
          </div>
          <SocialMedia className={s.socialMedia} />
          <CompanyContacts />
        </div>
      )}
    </div>
  );
};
