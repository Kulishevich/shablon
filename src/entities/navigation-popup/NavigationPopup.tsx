import React from 'react';
import s from './NavigationPopup.module.scss';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';
import { CategoryT } from '@/shared/api/category/types';

const mockNav = [
  {
    title: 'Мебель',
    subcategories: [
      'Столы',
      'Стулья',
      'Столы',
      'Стулья',
      'Столы',
      'Стулья',
      'Столы',
      'Стулья',
      'Столы',
      'Стулья',
      'Столы',
      'Столы',
      'Стулья',
      'Столы',
      'Стулья',
      'Столы',
      'Стулья',
      'Столы',
      'Стулья',
      'Столы',
      'Стулья',
      'Столы',
    ],
  },
  {
    title: 'Фурнитура',
    subcategories: [
      'Столы',
      'Стулья',
      'Столы',
      'Стулья',
      'Столы',
      'Стулья',
      'Столы',
      'Стулья',
      'Столы',
      'Стулья',
      'Столы',
    ],
  },
  {
    title: 'Декор для дома',
    subcategories: [
      'Столы',
      'Стулья',
      'Столы',
      'Стулья',
      'Столы',
      'Стулья',
      'Столы',
      'Стулья',
      'Столы',
      'Стулья',
      'Столы',
    ],
  },
  {
    title: 'Посуда',
    subcategories: [
      'Столы',
      'Стулья',
      'Столы',
      'Стулья',
      'Столы',
      'Стулья',
      'Столы',
      'Стулья',
      'Столы',
      'Стулья',
      'Столы',
    ],
  },
  {
    title: 'Фурнитура',
    subcategories: [
      'Столы',
      'Стулья',
      'Столы',
      'Стулья',
      'Столы',
      'Стулья',
      'Столы',
      'Стулья',
      'Столы',
      'Стулья',
      'Столы',
    ],
  },
  {
    title: 'Декор для дома',
    subcategories: [
      'Столы',
      'Стулья',
      'Столы',
      'Стулья',
      'Столы',
      'Стулья',
      'Столы',
      'Стулья',
      'Столы',
      'Стулья',
      'Столы',
    ],
  },
  {
    title: 'Посуда',
    subcategories: [
      'Столы',
      'Стулья',
      'Столы',
      'Стулья',
      'Столы',
      'Стулья',
      'Столы',
      'Стулья',
      'Столы',
      'Стулья',
      'Столы',
    ],
  },
];

export const NavigationPopup = ({
  categories,
}: {
  categories: CategoryT[] | null;
}) => {
  return (
    <div className={s.content}>
      <div className={s.categoryList}>
        {categories?.map((category, index) => (
          <Link
            className="h6"
            href={`${paths.catalog}/${category.slug}_${category.id}`}
            key={index}
          >
            {category.name}
          </Link>
        ))}
      </div>
      <div className={s.subcategoryList}>
        <h3 className="h3">{mockNav[0].title}</h3>
        <div className={s.subcategories}>
          {mockNav[0].subcategories.map((subcategory, index) => (
            <Link className="body_4" href={'/'} key={index}>
              {subcategory}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
