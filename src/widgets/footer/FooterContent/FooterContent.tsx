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
          <div className="h5">Каталог</div>
          <div className={s.catalog} itemScope itemType="http://schema.org/SiteNavigationElement">
            {categories?.map((category, index) => (
              <Link
                className="body_3"
                href={`${paths.catalog}/${category.slug}`}
                key={index}
                itemProp="url"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        <div className={s.elem}>
          <div className="h5">Покупателям</div>
          <div
            className={s.navigation}
            itemScope
            itemType="http://schema.org/SiteNavigationElement"
          >
            {navigation.slice(0, 7).map((nav, index) => (
              <Link className="body_6" href={nav.path} key={index} itemProp="url">
                {nav.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className={s.elem}>
        <div className="h5">Контакты</div>
        <CompanyContacts contacts={contacts} />
      </div>

      <div className={s.elem}>
        <p className="body_7">{contacts?.company_info}</p>
      </div>
    </div>
  );
};
