import React from 'react';
import { Typography } from '@/shared/ui/typography';
import { Slider } from '@/shared/ui/slider';
import { DiscountCard } from '@/entities/discount-card';
import s from './OtherShares.module.scss';

export const OtherShares = () => {
  return (
    <div className={s.container}>
      <Typography variant="h2">Другие акции</Typography>
      <Slider itemWidth={440}>
        {new Array(12).fill('').map((_, index) => (
          <DiscountCard key={index} />
        ))}
      </Slider>
    </div>
  );
};
