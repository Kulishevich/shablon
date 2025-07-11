'use client';
import { SliderWrapper } from '@/entities/slider-wrapper';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import s from './PreviouslyViewed.module.scss';
import { ProductT } from '@/shared/api/product/types';
import SectionAnimationWrapper from '@/shared/ui/section/SectionAnimationWrapper';
import { buildProductUrlSync } from '@/shared/lib/utils/productUtils';
import { ProductCard } from '@/entities/product-card/ProductCard';
import { ReduxProvider } from '@/shared/lib/redux/providers/ReduxProvider';

export const PreviouslyViewed = () => {
  const [viewedProducts, setViewedProducts] = useState<ProductT[]>([]);

  const getViewedProductIds = (): ProductT[] => {
    try {
      return JSON.parse(localStorage.getItem('viewed_products_shablon') || '[]');
    } catch {
      return [];
    }
  };

  useEffect(() => {
    const products = getViewedProductIds();
    setViewedProducts(products);
  }, []);

  return (
    <ReduxProvider>
      <SectionAnimationWrapper>
        {!!viewedProducts.length && (
          <SliderWrapper title={'Вы смотрели ранее'} variant="mini_product">
            {viewedProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </SliderWrapper>
        )}
      </SectionAnimationWrapper>
    </ReduxProvider>
  );
};
