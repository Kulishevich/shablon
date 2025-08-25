import React from 'react';
import s from './MainBanner.module.scss';
import Image from 'next/image';
import clsx from 'clsx';
import { Button } from '@/shared/ui/button';
import { SettingsT } from '@/shared/api/design/types';
import Link from 'next/link';

export const MainBanner = ({
  banner,
  storeUrl,
}: {
  banner: SettingsT['main_banner'] | null;
  storeUrl: string;
}) => {
  if (!banner) return null;

  return (
    <div className={s.container}>
      <Image
        src={`${storeUrl}/${banner?.photo}`}
        alt="main-banner"
        fill
        className={clsx(s.image, 'desktop-only')}
      />
      <Image
        src={`${storeUrl}/${banner?.mobile_photo}`}
        alt="main-banner"
        fill
        className={clsx(s.image, 'mobile-only')}
      />
      <div className={s.content}>
        <div className={s.heading}>
          <div
            className={clsx(s.type, 'body_4')}
            dangerouslySetInnerHTML={{ __html: banner?.tag || '' }}
          />
          <div className="h3" dangerouslySetInnerHTML={{ __html: banner?.title || '' }} />
        </div>
        <div className={s.caption}>
          <div
            className={clsx(s.type, 'body_3')}
            dangerouslySetInnerHTML={{ __html: banner?.description || '' }}
          />
          <Button fullWidth as={Link} href={banner?.button_url || ''} className={s.button}>
            <span dangerouslySetInnerHTML={{ __html: banner?.button_text || '' }} />
          </Button>
        </div>
      </div>
    </div>
  );
};
