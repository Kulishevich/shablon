import { ProductCard } from '@/entities/product-card';
import { SliderWrapper } from '@/entities/slider-wrapper';
import { useBreakpoint } from '@/shared/lib/hooks/useBreakpoint';
import React from 'react';
import { PopularProductsMobile } from './popular-products-mobile';

export const PopularProductsSection = () => {
  const { isMobile } = useBreakpoint();

  return !isMobile ? (
    <SliderWrapper title="Популярные товары">
      {new Array(9).fill('').map((_, index) => (
        <ProductCard key={index} />
      ))}
    </SliderWrapper>
  ) : (
    <PopularProductsMobile />
  );
};
