import React from 'react';
import s from './TextImageBlock.module.scss';
import { TextImageBlockT } from '@/shared/api/services/types';
import Image from 'next/image';
import clsx from 'clsx';
import { Button } from '@/shared/ui/button';
import { FeedbackPopup } from '../feedback-popup/FeedbackPopup';
/* import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/assets';
import 'swiper/css';
import { Swiper as SwiperType } from 'swiper'; */

export const TextImageBlock = ({
  storeUrl,
  isButton = false,
  ...block
}: TextImageBlockT & { storeUrl: string; isButton?: boolean }) => {
  /*   const swiperRef = useRef<SwiperType>(null);

  const handlePrevSlide = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNextSlide = () => {
    swiperRef.current?.slideNext();
  };
 */
  return (
    <div className={clsx(s.container, { [s.right]: block.image_position === 'right' })}>
      {/* <div className={s.innerContainer}>
        <Swiper
          slidesPerView={1}
          spaceBetween={16}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className={s.swiper}
        >
          {new Array(4).fill(0).map((item, index) => (
            <SwiperSlide key={index} className={s.swiperSlide}>
              <Image
                src={`${storeUrl}/${block.image_path}`}
                alt={item.title || ''}
                width={416}
                height={340}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={clsx(s.navigation, { [s.hidden]: new Array(4).fill(0).length <= 1 })}>
          <Button variant="icon_secondary" className={s.iconLeft} onClick={handlePrevSlide}>
            <ArrowLeftIcon />
          </Button>
          <Button variant="icon_secondary" className={s.iconRight} onClick={handleNextSlide}>
            <ArrowRightIcon />
          </Button>
        </div>
      </div> */}

      <div className={s.image}>
        <Image
          src={`${storeUrl}/${block.image_path}`}
          alt={`Изображение`}
          height={416}
          width={636}
        />
      </div>

      <div className={s.content}>
        <div className={s.text} dangerouslySetInnerHTML={{ __html: block.text }} />

        {isButton && (
          <FeedbackPopup image={block.image_path || ''}>
            <Button className={s.button}>Оставить заявку</Button>
          </FeedbackPopup>
        )}
      </div>
    </div>
  );
};
