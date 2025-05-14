'use client';
import { SliderWrapper } from '@/entities/slider-wrapper';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import s from './PreviouslyViewed.module.scss';
import { ProductT } from '@/shared/api/product/types';
import SectionAnimationWrapper from '@/shared/ui/section/SectionAnimationWrapper';

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
    <SectionAnimationWrapper>
      {!!viewedProducts.length && (
        <SliderWrapper title={'Вы смотрели ранее'} variant="mini_product">
          {viewedProducts.map((product, index) => (
            <Link
              href={`/product/${product.slug}_${product.id}`}
              className={s.productLink}
              key={index}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_STORE_URL}/${product.main_image.image_path}`}
                fill
                alt="product"
              />
            </Link>
          ))}
        </SliderWrapper>
      )}
    </SectionAnimationWrapper>
  );
};
