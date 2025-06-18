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
import { ContactsT } from '@/shared/api/design/types';
import { CategoryItem } from '@/entities/category-item';
import { paths } from '@/shared/config/constants/paths';

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
        aria-label="Меню"
      >
        {isOpen ? <CloseIcon /> : <BurgerMobileIcon />}
      </Button>
      {isOpen && (
        <div className={s.content}>
          <div
            className={s.navigation}
            itemScope
            itemType="http://schema.org/SiteNavigationElement"
          >
            <Link
              className="h2"
              href={navigation[0].path}
              onClick={() => setIsOpen(false)}
              itemProp="url"
            >
              {navigation[0].title}
            </Link>
            <CollapseHeader title={'Каталог'} onClick={() => setIsOpen(false)} href={paths.catalog}>
              {categories?.map((category, index) => (
                <CategoryItem key={index} category={category} onClose={() => setIsOpen(false)} />
              ))}
            </CollapseHeader>
            {navigation.slice(1, 6).map((nav, index) => (
              <Link
                className="h2"
                href={nav.path}
                key={index}
                onClick={() => setIsOpen(false)}
                itemProp="url"
              >
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
