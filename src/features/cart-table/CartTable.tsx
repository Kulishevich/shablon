'use client';
import React from 'react';
import { RowProductCart } from '../../entities/row-product-cart';
import s from './CartTable.module.scss';
import { useBreakpoint } from '@/shared/lib/hooks/useBreakpoint';
import { ProductCard } from '@/entities/product-card';

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
  const { isMobile } = useBreakpoint();

  return (
    <div className={s.container}>
      <div className={s.tableHeader}>
        <h6 className="h6">Наименование товара</h6>
        <h6 className="h6">Количество</h6>
        <h6 className="h6">Цена за шт.</h6>
        <h6 className="h6">Сумма (BYN)</h6>
      </div>
      {products.map((product) =>
        !isMobile ? (
          <RowProductCart {...product} key={product.id} />
        ) : (
          <ProductCard productInCart />
        )
      )}
    </div>
  );
};
