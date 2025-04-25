import React from 'react';
import s from './NavigationPopup.module.scss';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';

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

export const NavigationPopup = () => {
  return (
    <div className={s.content}>
      <div className={s.categoryList}>
        {mockNav.map((category, index) => (
          <Link className="h6" href={`${paths.catalog}/1`} key={index}>
            {category.title}
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
