import React from 'react';
import Image from 'next/image';
import s from './ShareInfo.module.scss';
import { Button } from '@/shared/ui/button';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';
import { ArrowSmLeftIcon } from '@/shared/assets';
import { PromotionT } from '@/shared/api/promotions/types';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import clsx from 'clsx';

export const ShareInfo = ({ title, published_at, content, photo_path, slug, id }: PromotionT) => {
  return (
    <div className={s.container}>
      <div className={s.imageContainer}>
        <Image src={`${process.env.NEXT_PUBLIC_STORE_URL}/${photo_path}`} fill alt={'discount'} />
      </div>
      <div className={s.content}>
        <Breadcrumbs
          dynamicPath={[{ title: title || '', path: `/${slug}_${id}` }]}
          className={s.breadcrumbs}
        />
        <p className="h1_discount">{title} </p>
        <span className="body_5">{new Date(published_at || '').toLocaleDateString('RU-ru')}</span>
        <div
          className={clsx('body_2', s.text)}
          dangerouslySetInnerHTML={{ __html: content || '' }}
        />
        <Button variant="link" as={Link} href={paths.shares}>
          <ArrowSmLeftIcon /> Назад к акциям
        </Button>
      </div>
    </div>
  );
};
