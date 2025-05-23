'use client';
import React, { useEffect, useState } from 'react';
import s from './ProductDescription.module.scss';
import clsx from 'clsx';
import { ProductT } from '@/shared/api/product/types';

export const ProductDescription = ({ product }: { product: ProductT }) => {
  const [activeTag, setActiveTag] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      addViewedProduct(product);
    }
  }, [product.id]);

  const addViewedProduct = (product: ProductT) => {
    const existing = JSON.parse(localStorage.getItem('viewed_products_shablon') || '[]');
    const filtered = existing.filter((item: ProductT) => item.id !== product.id);
    const updated = [product, ...filtered].slice(0, 20);
    localStorage.setItem('viewed_products_shablon', JSON.stringify(updated));
  };

  const info = [
    {
      id: 1,
      title: 'Описание товара',
      content: product.description,
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
