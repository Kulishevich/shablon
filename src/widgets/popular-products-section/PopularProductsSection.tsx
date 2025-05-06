import { ProductCard } from '@/entities/product-card';
import { SliderWrapper } from '@/entities/slider-wrapper';
import React from 'react';
import { ProductT } from '@/shared/api/product/types';
import { PopularProductsMobile } from './popular-products-mobile';

export const PopularProductsSection = ({
  products,
}: {
  products: ProductT[] | null;
}) => {
  return (
    <>
      <SliderWrapper title="Популярные товары" className={'desktop-only'}>
        {products?.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </SliderWrapper>
      <PopularProductsMobile />
    </>
  );
};
