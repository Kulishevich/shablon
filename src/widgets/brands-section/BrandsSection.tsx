import { BrandCard } from '@/entities/brand-card';
import { SliderWrapper } from '@/entities/slider-wrapper';
import { BrandT } from '@/shared/api/brands/types';
import React from 'react';

export const BrandsSection = ({
  brands,
  storeUrl,
}: {
  brands: BrandT[] | null;
  storeUrl: string;
}) => {
  return (
    <SliderWrapper
      title="Бренды, с которыми мы сотрудничаем"
      variant="news"
      itemsCount={brands?.length || 0}
    >
      {brands?.map((brand) => <BrandCard brand={brand} storeUrl={storeUrl} key={brand.id} />)}
    </SliderWrapper>
  );
};
