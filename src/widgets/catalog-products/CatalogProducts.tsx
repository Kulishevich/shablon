import React from 'react';
import s from './CatalogProducts.module.scss';
import { CategoryT } from '@/shared/api/category/types';
import { CategoryCard } from '@/entities/category-card/CategoryCard';
import clsx from 'clsx';

export const CatalogProducts = ({
  categories,
  title,
}: {
  categories: CategoryT[] | null;
  title?: string;
}) => {
  return (
    <div className={s.container}>
      {title ? <h1 className="h1">{title}</h1> : <h2 className="h2">Категории товаров</h2>}

      <div className={s.cardsContainer}>
        {categories?.map((category) => <CategoryCard {...category} key={category.id} />)}
      </div>
    </div>
  );
};
