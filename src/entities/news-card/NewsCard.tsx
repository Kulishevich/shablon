import React from 'react';
import s from './NewsCard.module.scss';
import Image from 'next/image';
import { Typography } from '@/shared/ui/typography';
import { Button } from '@/shared/ui/button';
import { ArrowRightUpIcon } from '@/shared/assets';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';

const news = {
  title: 'Фурнитура для мебели: как выбрать?',
  date: '12.02.2025',
  image_path: '/news.png',
};

export const NewsCard = () => {
  return (
    <div className={s.cotnainer}>
      <Image src={news.image_path} width={306} height={220} alt="news" />
      <Typography variant="tag" className={s.date}>
        {news.date}
      </Typography>
      <Typography variant="h5">{news.title}</Typography>
      <Button variant="link" as={Link} href={`${paths.news}/1`}>
        Подробнее
        <ArrowRightUpIcon />
      </Button>
    </div>
  );
};
