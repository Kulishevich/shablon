'use client';
import React, { useState } from 'react';
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
import * as Dialog from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { ServiceT } from '@/shared/api/services/types';
import clsx from 'clsx';

export const HeaderBurgerMenu = ({
  categories,
  contacts,
  services,
}: {
  categories: CategoryT[] | null;
  contacts: ContactsT | null;
  services: ServiceT[] | null;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <Button
          variant="icon_secondary"
          onClick={() => setIsOpen((prev) => !prev)}
          className={s.button}
          aria-label="Меню"
        >
          <BurgerMobileIcon />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={s.overlay}>
          <VisuallyHidden>
            <Dialog.Title>Форма обратной связи</Dialog.Title>
          </VisuallyHidden>
          <Dialog.Content className={s.content}>
            <div className={s.navigation}>
              <CollapseHeader
                title={'Каталог'}
                onClick={() => setIsOpen(false)}
                href={paths.catalog}
              >
                {categories?.map((category, index) => (
                  <CategoryItem key={index} category={category} onClose={() => setIsOpen(false)} />
                ))}
              </CollapseHeader>
              {navigation.slice(0, 1).map((nav, index) => (
                <Link className="h3" href={nav.path} key={index} onClick={() => setIsOpen(false)}>
                  {nav.title}
                </Link>
              ))}
              {services?.slice(0, 2).map((service, index) => (
                <Link
                  className="h3"
                  href={`/${service.slug}`}
                  key={index}
                  onClick={() => setIsOpen(false)}
                >
                  {service.title}
                </Link>
              ))}

              {navigation.slice(2, 3).map((nav, index) => (
                <Link className="h3" href={nav.path} key={index} onClick={() => setIsOpen(false)}>
                  {nav.title}
                </Link>
              ))}

              {/*  <CollapseHeader title={'Услуги'} onClick={() => setIsOpen(false)}>
                {services?.map((service, index) => (
                  <Link
                    key={index}
                    className={clsx('body_5', s.serviceItem)}
                    href={`/${service.slug}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </CollapseHeader> */}
              {navigation.slice(3, 5).map((nav, index) => (
                <Link className="h3" href={nav.path} key={index} onClick={() => setIsOpen(false)}>
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
            <CompanyContacts contacts={contacts} className={s.companyContacts} />
            <Dialog.DialogClose asChild>
              <Button className={s.closeButton}>
                <CloseIcon />
              </Button>
            </Dialog.DialogClose>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
