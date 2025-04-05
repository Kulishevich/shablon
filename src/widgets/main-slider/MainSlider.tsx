'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import s from './MainSlider.module.scss';
import { Typography } from '@/shared/ui/typography';
import { Button } from '@/shared/ui/button';
import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/assets';

const slides = [
  {
    title: 'Скидки до 50% на товары для дома',
    content:
      'Покупайте товары со скидкой в каталоге, применив промокод “Февраль”',
    image_path: '/slider-image.png',
  },
  {
    title: 'Скидки до 50% на товары для дома',
    content:
      'Покупайте товары со скидкой в каталоге, применив промокод “Февраль”',
    image_path: '/slider-image.png',
  },
  {
    title: 'Скидки до 50% на товары для дома',
    content:
      'Покупайте товары со скидкой в каталоге, применив промокод “Февраль”',
    image_path: '/slider-image.png',
  },
  {
    title: 'Скидки до 50% на товары для дома',
    content:
      'Покупайте товары со скидкой в каталоге, применив промокод “Февраль”',
    image_path: '/slider-image.png',
  },
];

export const MainSlider = () => {
  return (
    <Swiper
      className={s.container}
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation={{
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom',
      }}
      pagination={{
        el: '.custom-pagination',
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${className} ${s.bullet}"></span>`;
        },
      }}
      autoplay={{ delay: 5000 }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className={s.slide}>
            <Image src={slide.image_path} alt="Slide 1" fill />
            <div className={s.content}>
              <div>
                <Typography variant="h1">{slide.title}</Typography>
                <Typography variant="body_1">{slide.content}</Typography>
              </div>
              <Button>Перейти в каталог</Button>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <Button
        variant="icon_primary"
        className={`swiper-button-prev-custom ${s.iconLeft}`}
      >
        <ArrowLeftIcon />
      </Button>
      <Button
        variant="icon_primary"
        className={`swiper-button-next-custom ${s.iconRight}`}
      >
        <ArrowRightIcon />
      </Button>
      <div className={`custom-pagination ${s.pagination}`} />
    </Swiper>
  );
};
