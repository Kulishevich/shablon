import React from 'react';
import s from './CatalogProducts.module.scss';
import { CategoryT } from '@/shared/api/category/types';
import { CategoryCard } from '@/entities/category-card/CategoryCard';

export const CatalogProducts = ({ categories }: { categories: CategoryT[] | null }) => {
  return (
    <div className={s.container}>
      <h2 className="h2">Категории товаров</h2>
      <div className={s.cardsContainer}>
        {categories?.map((category) => <CategoryCard {...category} key={category.id} />)}
      </div>
    </div>
  );
};
