import { Typography } from '@/shared/ui/typography';
import React, { ReactNode } from 'react';
import s from './SliderWrapper.module.scss';
import { Slider } from '@/shared/ui/slider';
import { useBreakpoint } from '@/shared/lib/hooks/useBreakpoint';

export const SliderWrapper = ({
  title,
  children,
  itemWidth = 330,
}: {
  title: string;
  children: ReactNode;
  itemWidth?: number;
}) => {
  const { isMobile } = useBreakpoint();

  return (
    <div className={s.container}>
      <Typography variant="h2">{title}</Typography>
      <Slider itemWidth={!isMobile ? itemWidth : 175}>{children}</Slider>
    </div>
  );
};
