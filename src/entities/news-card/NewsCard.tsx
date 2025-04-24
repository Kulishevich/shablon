import React from 'react';
import s from './NewsCard.module.scss';
import Image from 'next/image';
import { Button } from '@/shared/ui/button';
import { ArrowRightUpIcon } from '@/shared/assets';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';
import clsx from 'clsx';

const news = {
  title: 'Фурнитура для мебели: как выбрать?',
  date: '12.02.2025',
  image_path: '/news.png',
};

export const NewsCard = () => {
  return (
    <div className={s.cotnainer}>
      <div className={s.imageContainer}>
        <Image src={news.image_path} fill alt="news" />
      </div>
      <span className={clsx(s.date, 'tag')}>{news.date}</span>
      <h5 className="h5">{news.title}</h5>
      <Button
        variant="link"
        as={Link}
        href={`${paths.news}/1`}
        className={s.button}
      >
        Подробнее
        <ArrowRightUpIcon />
      </Button>
    </div>
  );
};
