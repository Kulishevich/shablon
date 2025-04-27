'use client';
import React, { useState } from 'react';
import s from './ProductDescription.module.scss';
import clsx from 'clsx';

export const ProductDescription = ({
  description,
}: {
  description: string;
}) => {
  const [activeTag, setActiveTag] = useState(0);

  const info = [
    {
      id: 1,
      title: 'Описание товара',
      content: description,
    },
    {
      id: 2,
      title: 'Доставка',
      content:
        'Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка Доставка',
    },
  ];

  return (
    <div className={s.container}>
      <div className={s.navigation}>
        {info.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveTag(index)}
            className={clsx(activeTag === index && s.active, 'h6')}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div
        className={s.content}
        dangerouslySetInnerHTML={{ __html: info[activeTag].content || '' }}
      />
    </div>
  );
};
