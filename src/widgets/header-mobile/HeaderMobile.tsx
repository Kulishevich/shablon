import React from 'react';
import s from './HeaderMobile.module.scss';
import { Logo } from '@/shared/ui/logo';
import { Button } from '@/shared/ui/button';
import { PhoneOutlinedIcon, ShoppingCartIcon } from '@/shared/assets';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';
import { HeaderBurgerMenu } from '@/features/header-burger-menu';
import { HeaderSearchPopup } from '@/features/header-search-popup';
import { CategoryT } from '@/shared/api/category/types';
import { ContactsT } from '@/shared/api/design/types';
import { ProductT } from '@/shared/api/product/types';
import { FeedbackPopup } from '../feedback-popup/FeedbackPopup';

export const HeaderMobile = ({
  categories,
  contacts,
  products,
  feedbackImage,
}: {
  categories: CategoryT[] | null;
  contacts: ContactsT | null;
  products: ProductT[];
  feedbackImage: string;
}) => {
  return (
    <div className={s.container}>
      <Logo variant="secondary" />
      <div className={s.buttonsContainer}>
        <FeedbackPopup image={feedbackImage}>
          <Button variant="icon_secondary">
            <PhoneOutlinedIcon />
          </Button>
        </FeedbackPopup>
        <HeaderSearchPopup categories={categories} products={products} />
        <Button variant="icon_secondary" as={Link} href={paths.cart}>
          <ShoppingCartIcon />
        </Button>
        <HeaderBurgerMenu categories={categories} contacts={contacts} />
      </div>
    </div>
  );
};
