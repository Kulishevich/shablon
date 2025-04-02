'use client';
import { FeedbackForm } from '@/entities/feedback-form';
import { SliderWrapper } from '@/entities/slider-wrapper';
import Image from 'next/image';
import s from './page.module.scss';
import { ProductSection } from '@/widgets/product-info';

export default function Product() {
  return (
    <div className={s.page}>
      <ProductSection />
      <SliderWrapper title={'Вы смотрели ранее'} itemWidth={220}>
        {new Array(9).fill('').map((_, index) => (
          <Image
            src={'/product.png'}
            width={196}
            height={196}
            alt="product"
            key={index}
          />
        ))}
      </SliderWrapper>
      <FeedbackForm />
    </div>
  );
}
