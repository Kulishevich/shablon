import React from 'react';
import s from './DiscountCard.module.scss';
import Image from 'next/image';
import { Button } from '@/shared/ui/button';
import { ArrowRightUpIcon } from '@/shared/assets';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';
import clsx from 'clsx';

const discount = {
  title: 'Скидка 10% на кухонные стулья! ',
  image_path: '/discount.png',
  date: 'с 01.02.2025 по 28.02.2025',
};

export const DiscountCard = () => {
  return (
    <div className={s.container}>
      <div className={s.imageContainer}>
        <Image src={discount.image_path} fill alt="discount" />
      </div>
      <div className={s.content}>
        <span className={clsx(s.tag, 'tag')}>{discount.date}</span>
        <h5 className={clsx(s.title, 'h5')}>{discount.title}</h5>
        <Button
          variant="link"
          as={Link}
          href={`${paths.shares}/1`}
          className={s.button}
        >
          Подробнее
          <ArrowRightUpIcon />
        </Button>
      </div>
    </div>
  );
};
