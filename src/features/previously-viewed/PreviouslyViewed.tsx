import { SliderWrapper } from '@/entities/slider-wrapper';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import s from './PreviouslyViewed.module.scss';

export const PreviouslyViewed = () => {
  return (
    <SliderWrapper title={'Вы смотрели ранее'} variant="mini_product">
      {new Array(9).fill('').map((_, index) => (
        <Link href={'/product/1'} className={s.productLink} key={index}>
          <Image src={'/product.png'} fill alt="product" />
        </Link>
      ))}
    </SliderWrapper>
  );
};
