import React from 'react';
import s from './NewsCard.module.scss';
import Image from 'next/image';
import { Button } from '@/shared/ui/button';
import { ArrowRightUpIcon } from '@/shared/assets';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';
import clsx from 'clsx';
import { NewsT } from '@/shared/api/news/types';
import { getStoreBaseUrl } from '@/shared/lib/utils/getBaseUrl';
import { cookies } from 'next/headers';

export const NewsCard = async ({ news }: { news: NewsT }) => {
  const cookieStore = await cookies();
  const variant = cookieStore.get('variant')?.value;

  return (
    <Link
      href={`${paths.news}/${news?.slug}`}
      className={s.cotnainer}
      itemScope
      itemType="http://schema.org/BlogPosting"
      itemProp="blogPost"
    >
      <div className={s.imageContainer}>
        <Image
          src={`${getStoreBaseUrl(variant)}/${news?.photo_path}`}
          fill
          alt="news"
          itemProp="image"
        />
      </div>
      <span className={clsx(s.date, 'tag')}>
        <meta itemProp="datePublished" content={news?.created_at || ''} />
        {new Date(news?.created_at || '').toLocaleString('ru-RU', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })}
      </span>
      <div className={s.content}>
        <div className="h5" itemProp="headline">
          {news?.title}
        </div>
        <Button as={'p'} variant="link" className={s.button} itemProp="mainEntityOfPage">
          Подробнее
          <ArrowRightUpIcon />
        </Button>
      </div>
    </Link>
  );
};
