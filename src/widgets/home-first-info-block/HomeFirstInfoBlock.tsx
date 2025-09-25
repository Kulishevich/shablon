import React from 'react';
import s from './styles.module.scss';
import Image from 'next/image';
import { Button } from '@/shared/ui/button';
import Link from 'next/link';
import { getFirstBlock } from '@/shared/api/main-blocks/getFirstBlock';
import { getStoreUrl } from '@/shared/api/base';

export const HomeFirstInfoBlock = async () => {
  const firstBlock = await getFirstBlock();
  const storeUrl = await getStoreUrl();

  return (
    <div className={s.container}>
      <div className={s.imageContainer}>
        <div className={s.image}>
          <Image
            src={`${storeUrl}/${firstBlock?.fields?.image?.path}` || ''}
            fill
            alt="home-image"
          />
        </div>
      </div>
      <div className={s.content}>
        <div dangerouslySetInnerHTML={{ __html: firstBlock?.fields?.text?.html || '' }} />
        <Button className={s.link} as={Link} href={'/texniceskaia-informaciia'}>
          Подробнее
        </Button>
      </div>
    </div>
  );
};
