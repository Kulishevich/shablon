'use client';
import { FeedbackForm } from '@/entities/feedback-form';
import s from './page.module.scss';
import { CatalogSection } from '@/widgets/catalog-section';
import { SliderWrapper } from '@/entities/slider-wrapper';
import Image from 'next/image';

export default function Catalog() {
  return (
    <div className={s.page}>
      <CatalogSection />
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
