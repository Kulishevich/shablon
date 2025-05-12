'use client';
import React from 'react';
import { RowProductCart } from '../../entities/row-product-cart';
import s from './CartTable.module.scss';
import { useBreakpoint } from '@/shared/lib/hooks/useBreakpoint';
import { ProductCard } from '@/entities/product-card';
import { useSelector } from 'react-redux';
import { RootState } from '@/shared/lib/redux/store';

export const CartTable = () => {
  const productsCard = useSelector((state: RootState) => state.cart.items);
  const { isMobile } = useBreakpoint();

  return (
    <div className={s.container}>
      <div className={s.tableHeader}>
        <h6 className="h6">Наименование товара</h6>
        <h6 className="h6">Количество</h6>
        <h6 className="h6">Цена за шт.</h6>
        <h6 className="h6">Сумма (BYN)</h6>
      </div>
      {productsCard.map((product, index) =>
        !isMobile ? (
          <RowProductCart {...product} key={product.id} />
        ) : (
          <ProductCard productInCart product={product} key={product.id} />
        )
      )}
    </div>
  );
};
