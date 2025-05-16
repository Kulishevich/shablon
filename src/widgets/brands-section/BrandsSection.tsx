import { BrandCard } from '@/entities/brand-card';
import { SliderWrapper } from '@/entities/slider-wrapper';
import { BrandT } from '@/shared/api/brands/types';
import React from 'react';

export const BrandsSection = ({ brands }: { brands: BrandT[] | null }) => {
  return (
    <SliderWrapper title="Бренды, с которыми мы сотрудничаем" variant="discount">
      {brands?.map((brand) => <BrandCard {...brand} key={brand.id} />)}
    </SliderWrapper>
  );
};
