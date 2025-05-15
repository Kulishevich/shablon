import React from 'react';
import { TelegramIcon, ViberIcon, WhatsAppIcon } from '@/shared/assets';
import Link from 'next/link';
import { navigation } from '@/shared/config/constants/navigation';
import { Logo } from '@/shared/ui/logo';
import { CompanyContacts } from '@/entities/company-contacts';
import { CategoryT } from '@/shared/api/category/types';
import { paths } from '@/shared/config/constants/paths';
import { ContactsT } from '@/shared/api/design/types';
import s from './FooterContent.module.scss';
import { SocialMedia } from '@/entities/social-media';

export const FooterContent = ({
  categories,
  contacts,
}: {
  categories: CategoryT[] | null;
  contacts: ContactsT | null;
}) => {
  return (
    <div className={s.container}>
      <div className={s.elem}>
        <Logo variant="secondary" />
        <p className="body_7">{contacts?.company_description}</p>
        <SocialMedia {...contacts?.social_links} />
      </div>

      <div className={s.catalogContainer}>
        <div className={s.elem}>
          <h5 className="h5">Каталог</h5>
          <div className={s.catalog}>
            {categories?.map((category, index) => (
              <Link
                className="body_3"
                href={`${paths.catalog}/${category.slug}_${category.id}`}
                key={index}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        <div className={s.elem}>
          <h5 className="h5">Покупателям</h5>
          <div className={s.navigation}>
            {navigation.slice(0, 7).map((nav, index) => (
              <Link className="body_6" href={nav.path} key={index}>
                {nav.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className={s.elem}>
        <h5 className="h5">Контакты</h5>
        <CompanyContacts contacts={contacts} />
      </div>

      <div className={s.elem}>
        <p className="body_7">{contacts?.company_info}</p>
      </div>
    </div>
  );
};
