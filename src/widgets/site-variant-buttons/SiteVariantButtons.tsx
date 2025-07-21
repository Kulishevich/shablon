'use client';
import React from 'react';
import Cookies from 'js-cookie';
import { Button } from '@/shared/ui/button';
import s from './SiteVariantButtons.module.scss';
import { CollapseFilter } from '@/shared/ui/collapse-filter';

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
  const handleChangeVariantSite = (value: string) => {
    Cookies.set('variant', value, {
      expires: 365,
      path: '/',
    });

    window.location.reload();
  };

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
