import React from 'react';
import s from './MainShortcuts.module.scss';
import { CategoryT } from '@/shared/api/category/types';
import { ShortcutCard } from '@/entities/shortcut-card/ShortcutCard';

export const MainShortcuts = ({ categories }: { categories: CategoryT[] | null }) => {
  return (
    <div className={s.container}>
      {categories?.map((category) => <ShortcutCard {...category} key={category.id} />)}
    </div>
  );
};
