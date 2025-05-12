import React from 'react';
import Image from 'next/image';
import { Button } from '@/shared/ui/button';
import { ArrowSmLeftIcon } from '@/shared/assets';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';
import s from './NewsInfoSection.module.scss';
import { NewsT } from '@/shared/api/news/types';

export const NewsInfoSection = ({ news }: { news: NewsT | null }) => {
  return (
    <div className={s.container}>
      <div className={s.titleContainer}>
        <div className={s.title}>
          <span className="h5">
            {new Date(news?.created_at || '').toLocaleDateString('ru-RU', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            })}
          </span>
          <h1 className="h1">{news?.title}</h1>
        </div>
        <div className={s.imageContainer}>
          <Image src={`${process.env.NEXT_PUBLIC_STORE_URL}/${news?.photo_path}`} fill alt="new" />
        </div>
      </div>
      <div className={s.content}>
        <p className="body_2">{news?.content}</p>

        <Button variant="link" as={Link} href={paths.news}>
          <ArrowSmLeftIcon /> Назад к новостям
        </Button>
      </div>
    </div>
  );
};
