'use client';
import React from 'react';
import Cookies from 'js-cookie';
import { Button } from '@/shared/ui/button';
import s from './SiteVariantButtons.module.scss';
import { CollapseFilter } from '@/shared/ui/collapse-filter';
import { useSearchParams } from 'next/navigation';
import { clearCart } from '@/shared/lib/redux/slices/cartSlice';
import { useDispatch } from 'react-redux';
import revalidatePath from '@/shared/lib/utils/revalidatePath';

const siteVariants = [
  {
    id: '1',
    name: 'Косметика',
    value: 'kosmetika',
  },
  {
    id: '2',
    name: 'Для дома',
    value: 'dlyadoma',
  },
  {
    id: '3',
    name: 'Одежда',
    value: 'odejda',
  },
  {
    id: '4',
    name: 'Авто',
    value: 'auto',
  },
  {
    id: '5',
    name: 'Техника',
    value: 'tehnika',
  },
  {
    id: '6',
    name: 'Подарок',
    value: 'podarok',
  },
  {
    id: '7',
    name: 'Стройка',
    value: 'stroyka',
  },
];

export const SiteVariantButtons = () => {
  const searchParams = useSearchParams();
  const variant = searchParams.get('variant');
  const dispatch = useDispatch();

  const handleChangeVariantSite = (value: string) => {
    Cookies.set('variant', value, {
      expires: 365,
      path: '/',
    });

    dispatch(clearCart());
    localStorage.removeItem('viewed_products_shablon');
    localStorage.removeItem('cart_shablon');

    revalidatePath('');

    if (window) {
      if (window.location.pathname === '/') {
        window.location.reload();
      } else {
        window.location.href = '/';
      }
    }
  };

  if (variant) {
    handleChangeVariantSite(variant);
  }

  return (
    <div className={s.container}>
      <CollapseFilter title="Варианты сайта">
        {siteVariants.map((variant) => (
          <Button key={variant.id} onClick={() => handleChangeVariantSite(variant.value)}>
            {variant.name}
          </Button>
        ))}
      </CollapseFilter>
    </div>
  );
};
