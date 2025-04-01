import { Typography } from '@/shared/ui/typography';
import React from 'react';
import s from './NewsSliderSection.module.scss';
import { Slider } from '@/shared/ui/slider';
import { NewsCard } from '@/entities/news-card';

export const NewsSliderSection = ({ title }: { title: string }) => {
  return (
    <div className={s.container}>
      <Typography variant="h2">{title}</Typography>
      <Slider itemWidth={330}>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </Slider>
    </div>
  );
};
