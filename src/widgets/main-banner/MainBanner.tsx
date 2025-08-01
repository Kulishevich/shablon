import React from 'react';
import s from './MainBanner.module.scss';
import Image from 'next/image';
import clsx from 'clsx';
import { Button } from '@/shared/ui/button';
import { SettingsT } from '@/shared/api/design/types';

export const MainBanner = ({ banner }: { banner: SettingsT['main_banner'] | null }) => {
  if (!banner) return null;
  return (
    <div className={s.container}>
      <Image src={`${process.env.NEXT_PUBLIC_STORE_URL}/${banner?.photo}`} alt="main-banner" fill />
      <div className={s.content}>
        <div className={s.heading}>
          <p className={clsx(s.type, 'body_4')}>{banner?.tag}</p>
          <h3 className="h3">{banner?.title}</h3>
        </div>
        <div className={s.caption}>
          <p className={clsx(s.type, 'body_3')}>{banner?.description}</p>
          <Button fullWidth as="a" href={banner?.button_url || ''} className={s.button}>
            {banner?.button_text}
          </Button>
        </div>
      </div>
    </div>
  );
};
