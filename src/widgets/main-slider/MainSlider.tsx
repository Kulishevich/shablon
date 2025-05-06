'use client';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import s from './MainSlider.module.scss';
import { Button } from '@/shared/ui/button';
import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/assets';
import { Swiper as SwiperType } from 'swiper';
import { BannerT } from '@/shared/api/banners/types';

export const MainSlider = ({ slides }: { slides: BannerT[] | null }) => {
  const swiperRef = useRef<SwiperType>(null);

  const handleNext = () => {
    if (!swiperRef.current) return;

    const swiper = swiperRef.current;
    if (swiper.isEnd) {
      swiper.slideTo(0);
    } else {
      swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (!swiperRef.current) return;

    const swiper = swiperRef.current;
    if (swiper.isBeginning) {
      swiper.slideTo(slides.length - 1);
    } else {
      swiper.slidePrev();
    }
  };

  return (
    <div className={s.wrapper}>
      <Swiper
        className={s.container}
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        pagination={{
          el: '.custom-pagination',
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} ${s.bullet}"></span>`;
          },
        }}
        autoplay={{ delay: 5000 }}
      >
        {slides?.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={s.slide}>
              <Image
                src={`${process.env.NEXT_PUBLIC_STORE_URL}/${slide.image_path}`}
                alt={`Slide ${index + 1}`}
                fill
              />
              <div className={s.content}>
                <div>
                  <h1 className="h1">{slide.title}</h1>
                  <p className="body_1">{slide.subtitle}</p>
                </div>
                <Button>Перейти в каталог</Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Button
        variant="icon_primary"
        onClick={handlePrev}
        className={s.iconLeft}
      >
        <ArrowLeftIcon />
      </Button>
      <Button
        variant="icon_primary"
        onClick={handleNext}
        className={s.iconRight}
      >
        <ArrowRightIcon />
      </Button>
      <div className={`custom-pagination ${s.pagination}`} />
    </div>
  );
};
