import React, { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import s from './HeaderBurgerMenu.module.scss';
import { Button } from '@/shared/ui/button';
import { BurgerMobileIcon, CloseIcon } from '@/shared/assets';
import { navigation } from '@/shared/config/constants/navigation';
import { Typography } from '@/shared/ui/typography';
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
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <Button variant="icon_secondary">
          {isOpen ? (
            <CloseIcon width={22} height={22} />
          ) : (
            <BurgerMobileIcon width={22} height={22} />
          )}
        </Button>
      </Dialog.Trigger>
      <VisuallyHidden>
        <Dialog.Title>Меню</Dialog.Title>
      </VisuallyHidden>
      <Dialog.Content className={s.content}>
        <div className={s.navigation}>
          <Typography as={Link} variant="h2" href={navigation[0].path}>
            {navigation[0].title}
          </Typography>
          <CollapseHeader title={'Каталог'}>
            {categories.map((category, index) => (
              <Typography variant="h3" key={index} as={Link} href={'/'}>
                {category}
              </Typography>
            ))}
          </CollapseHeader>
          {navigation.slice(1).map((nav, index) => (
            <Typography as={Link} variant="h2" href={nav.path} key={index}>
              {nav.title}
            </Typography>
          ))}
        </div>
        <SocialMedia className={s.socialMedia} />
        <CompanyContacts />
      </Dialog.Content>
    </Dialog.Root>
  );
};
