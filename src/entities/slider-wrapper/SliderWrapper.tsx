import { Typography } from '@/shared/ui/typography';
import React, { ReactNode } from 'react';
import s from './SliderWrapper.module.scss';
import { Slider } from '@/shared/ui/slider';
import { useBreakpoint } from '@/shared/lib/hooks/useBreakpoint';

export const SliderWrapper = ({
  title,
  children,
  variant,
}: {
  title: string;
  children: ReactNode;
  variant?: 'news' | 'product' | 'discount' | 'mini_product';
}) => {
  const { isMobile } = useBreakpoint();

  const itemWidth = () => {
    switch (variant) {
      case 'product':
        return 330;
      case 'mini_product':
        return !isMobile ? 220 : 117;
      case 'news':
        return !isMobile ? 330 : 174;
      case 'discount':
        return !isMobile ? 440 : 350;
    }
    return 330;
  };

  return (
    <div className={s.container}>
      <Typography variant="h2">{title}</Typography>
      <Slider itemWidth={itemWidth()}>{children}</Slider>
    </div>
  );
};
