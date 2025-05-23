'use client';
import React, { useEffect, useState } from 'react';
import s from './HeaderBurgerMenu.module.scss';
import { Button } from '@/shared/ui/button';
import { BurgerMobileIcon, CloseIcon } from '@/shared/assets';
import { navigation } from '@/shared/config/constants/navigation';
import Link from 'next/link';
import { SocialMedia } from '@/entities/social-media';
import { CompanyContacts } from '@/entities/company-contacts';
import { CollapseHeader } from '@/entities/collapse-header';
import { CategoryT } from '@/shared/api/category/types';
import { paths } from '@/shared/config/constants/paths';
import { ContactsT } from '@/shared/api/design/types';

export const HeaderBurgerMenu = ({
  categories,
  contacts,
}: {
  categories: CategoryT[] | null;
  contacts: ContactsT | null;
}) => {
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
        className={s.button}
      >
        {isOpen ? <CloseIcon /> : <BurgerMobileIcon />}
      </Button>
      {isOpen && (
        <div className={s.content}>
          <div className={s.navigation}>
            <Link className="h2" href={navigation[0].path} onClick={() => setIsOpen(false)}>
              {navigation[0].title}
            </Link>
            <CollapseHeader title={'Каталог'}>
              {categories?.map((category, index) => (
                <Link
                  className="h3"
                  key={index}
                  href={`${paths.catalog}/${category.slug}_${category.id}`}
                  onClick={() => setIsOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </CollapseHeader>
            {navigation.slice(1, 6).map((nav, index) => (
              <Link className="h2" href={nav.path} key={index} onClick={() => setIsOpen(false)}>
                {nav.title}
              </Link>
            ))}
          </div>
          <SocialMedia
            className={s.socialMedia}
            telegram={contacts?.social_links?.telegram}
            whatsapp={contacts?.social_links?.whatsapp}
            viber={contacts?.social_links?.viber}
          />
          <CompanyContacts contacts={contacts} />
        </div>
      )}
    </div>
  );
};
