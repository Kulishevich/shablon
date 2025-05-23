'use client';
import { useState, useRef } from 'react';
import s from './GallerySection.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import { Button } from '@/shared/ui/button';
import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/assets';
import 'swiper/css';
import clsx from 'clsx';
import { PhotoT } from '@/shared/api/photos/types';
export const GallerySection = ({ items }: { items: PhotoT[] }) => {
  const [activeSlide, setActiveSlide] = useState<number | undefined>(undefined);
  const swiperRef = useRef<SwiperType>(null);

  const handlePrevSlide = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNextSlide = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <div className={s.container}>
      <h2 className="h2">Фотогалерея</h2>
      <div className={s.innerContainer}>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={16}
          breakpoints={{
            768: {
              spaceBetween: 24,
            },
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className={s.swiper}
        >
          {items?.map((item, index) => (
            <SwiperSlide key={index} className={s.swiperSlide}>
              <Image
                src={`${process.env.NEXT_PUBLIC_STORE_URL}/${item.image_path}`}
                alt={item.title || ''}
                width={416}
                height={340}
                onClick={() => setActiveSlide(index)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={s.navigation}>
          <Button variant="icon_secondary" className={s.iconLeft} onClick={handlePrevSlide}>
            <ArrowLeftIcon />
          </Button>
          <Button variant="icon_secondary" className={s.iconRight} onClick={handleNextSlide}>
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
      <div
        className={clsx(s.fullSize, { [s.active]: activeSlide !== undefined })}
        onClick={() => setActiveSlide(undefined)}
      >
        {activeSlide !== undefined && (
          <div onClick={(e) => e.stopPropagation()}>
            <Image
              src={`${process.env.NEXT_PUBLIC_STORE_URL}/${items?.[activeSlide].image_path}`}
              alt={items?.[activeSlide].title || ''}
              width={1000}
              height={1000}
              style={{ objectFit: 'contain' }}
              unoptimized
            />
          </div>
        )}
      </div>
    </div>
  );
};
