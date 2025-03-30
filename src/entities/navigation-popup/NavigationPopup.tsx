import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import s from './NavigationPopup.module.scss';
import { Typography } from '@/shared/ui/typography';
import Link from 'next/link';

type NavigationPopupProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

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
  isOpen,
  setIsOpen,
}: NavigationPopupProps) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Content className={s.content}>
        <div className={s.categoryList}>
          {mockNav.map((category) => (
            <Typography variant="h6" as={Link} href="/">
              {category.title}
            </Typography>
          ))}
        </div>
        <div className={s.subcategoryList}>
          <Typography variant="h3">{mockNav[0].title}</Typography>
          <div className={s.subcategories}>
            {mockNav[0].subcategories.map((subcategory) => (
              <Typography variant="body_4" as={Link} href={'/'}>
                {subcategory}
              </Typography>
            ))}
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
};
