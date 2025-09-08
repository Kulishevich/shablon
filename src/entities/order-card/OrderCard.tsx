'use client';
import React from 'react';
import s from './OrderCard.module.scss';
import Image from 'next/image';
import clsx from 'clsx';
import { Button } from '@/shared/ui/button';
import { RepeatIcon } from '@/shared/assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const OrderCard = () => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <div className={clsx(s.number, 'h4')}>№ 12345</div>
        <div className={clsx(s.status, s.success, 'body-4')}>Выполнен</div>
      </div>
      <Swiper
        className={s.products}
        slidesPerView={'auto'}
        spaceBetween={8}
        breakpoints={{
          768: {
            spaceBetween: 10,
          },
        }}
      >
        <SwiperSlide className={s.slide}>
          <div className={s.product}>
            <Image src={'/history-product.png'} alt={'Product'} width={64} height={64} />
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.slide}>
          <div className={s.product}>
            <Image src={'/history-product.png'} alt={'Product'} width={64} height={64} />
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.slide}>
          <div className={s.product}>
            <Image src={'/history-product.png'} alt={'Product'} width={64} height={64} />
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.slide}>
          <div className={s.product}>
            <Image src={'/history-product.png'} alt={'Product'} width={64} height={64} />
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.slide}>
          <div className={s.product}>
            <Image src={'/history-product.png'} alt={'Product'} width={64} height={64} />
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.slide}>
          <div className={s.product}>
            <Image src={'/history-product.png'} alt={'Product'} width={64} height={64} />
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.slide}>
          <div className={s.product}>
            <Image src={'/history-product.png'} alt={'Product'} width={64} height={64} />
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.slide}>
          <div className={s.product}>
            <Image src={'/history-product.png'} alt={'Product'} width={64} height={64} />
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.slide}>
          <div className={s.product}>
            <Image src={'/history-product.png'} alt={'Product'} width={64} height={64} />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className={s.orderInfo}>
        <div className={s.orderInfoItem}>
          <div className={clsx(s.orderInfoItemTitle, 'body_6')}>Дата оформления заказа:</div>
          <div className={clsx(s.orderInfoItemValue, 'body_3')}>05.08.2025</div>
        </div>
        <div className={s.orderInfoItem}>
          <div className={clsx(s.orderInfoItemTitle, 'body_6')}>Дата выполнения заказа:</div>
          <div className={clsx(s.orderInfoItemValue, 'body_3')}>06.08.2025</div>
        </div>
        <div className={s.orderInfoItem}>
          <div className={clsx(s.orderInfoItemTitle, 'body_6')}>Сумма:</div>
          <div className={clsx(s.orderInfoItemValue, 'body_3')}>150 BYN</div>
        </div>
      </div>

      <Button className={s.button}>
        <RepeatIcon /> Повторить заказ
      </Button>
    </div>
  );
};
