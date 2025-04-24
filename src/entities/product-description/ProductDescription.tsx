import React, { useState } from 'react';
import s from './ProductDescription.module.scss';
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
          <button
            key={index}
            onClick={() => setActiveTag(index)}
            className={clsx(activeTag === index && s.active, 'h6')}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className={s.content}>
        <p className="body_6">{description[activeTag].content}</p>
      </div>
    </div>
  );
};
