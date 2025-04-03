import { Typography } from '@/shared/ui/typography';
import React from 'react';
import { RowProductCart } from '../row-product-cart';
import s from './CartTable.module.scss';

const products = [
  {
    id: 1,
    name: 'Ковёр "Valencia"',
    articul: '12345',
    image_path: '/product.png',
    price: 130,
    priceWithDiscount: null,
  },
  {
    id: 2,
    name: 'Ковёр "Valencia"',
    articul: '12345',
    image_path: '/product.png',
    price: 130,
    priceWithDiscount: 110,
  },
  {
    id: 3,
    name: 'Ковёр "Valencia"',
    articul: '12345',
    image_path: '/product.png',
    price: 130,
    priceWithDiscount: null,
  },
  {
    id: 4,
    name: 'Ковёр "Valencia"',
    articul: '12345',
    image_path: '/product.png',
    price: 130,
    priceWithDiscount: 110,
  },
];

export const CartTable = () => {
  return (
    <div className={s.container}>
      <div className={s.tableHeader}>
        <Typography variant="h6">Наименование товара</Typography>
        <Typography variant="h6">Количество</Typography>
        <Typography variant="h6">Цена за шт.</Typography>
        <Typography variant="h6">Сумма (BYN)</Typography>
      </div>
      {products.map((product) => (
        <RowProductCart {...product} key={product.id} />
      ))}
    </div>
  );
};
