import React from 'react';
import s from './DiscountCard.module.scss';
import Image from 'next/image';
import { Typography } from '@/shared/ui/typography';
import { Button } from '@/shared/ui/button';
import { ArrowRightUpIcon } from '@/shared/assets';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';

const discount = {
  title: 'Скидка 10% на кухонные стулья! ',
  image_path: '/discount.png',
  date: 'с 01.02.2025 по 28.02.2025',
};

export const DiscountCard = () => {
  return (
    <div className={s.container}>
      <Image
        src={discount.image_path}
        width={416}
        height={240}
        alt="discount"
      />
      <div className={s.content}>
        <Typography variant="tag" className={s.tag}>
          {discount.date}
        </Typography>
        <Typography variant="h5" className={s.title}>
          {discount.title}
        </Typography>
        <Button variant="link" as={Link} href={`${paths.shares}/1`}>
          Подробнее
          <ArrowRightUpIcon />
        </Button>
      </div>
    </div>
  );
};
