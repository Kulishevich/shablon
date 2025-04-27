'use client';
import { ProductCard } from '@/entities/product-card';
import { SliderWrapper } from '@/entities/slider-wrapper';
import { useBreakpoint } from '@/shared/lib/hooks/useBreakpoint';
import React from 'react';
import { PopularProductsMobile } from './popular-products-mobile';
import { ProductType } from '@/shared/api/product/types';

export const PopularProductsSection = ({
  products,
}: {
  products: ProductType[] | null;
}) => {
  const { isMobile } = useBreakpoint();

  return !isMobile ? (
    <SliderWrapper title="Популярные товары">
      {products?.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </SliderWrapper>
  ) : (
    <PopularProductsMobile />
  );
};
