import React, { useState } from 'react';
import s from './ProductDescription.module.scss';
import { Typography } from '@/shared/ui/typography';
import clsx from 'clsx';

const description = [
  {
    id: 1,
    title: 'Описание товара',
    content:
      'Описание товара Описание товара Описание товараОписание товараОписание товараОписание товараОписание товараОписание товараОписание товараОписание товараОписание товараОписание товараОписание товараОписание товараОписание товараОписание товараОписание товараОписание товараОписание товараОписание товара',
  },
  {
    id: 2,
    title: 'Доставка',
    content:
      'Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка ',
  },
];

export const ProductDescription = () => {
  const [activeTag, setActiveTag] = useState(0);

  return (
    <div className={s.container}>
      <div className={s.navigation}>
        {description.map((item, index) => (
          <Typography
            variant="h6"
            as="button"
            key={index}
            onClick={() => setActiveTag(index)}
            className={clsx(activeTag === index && s.active)}
          >
            {item.title}
          </Typography>
        ))}
      </div>
      <div className={s.content}>
        <Typography variant="body_6">
          {description[activeTag].content}
        </Typography>
      </div>
    </div>
  );
};
