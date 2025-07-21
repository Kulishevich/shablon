import React from 'react';
import s from './MainBanner.module.scss';
import Image from 'next/image';
import clsx from 'clsx';
import { Button } from '@/shared/ui/button';
import { SettingsT } from '@/shared/api/design/types';
import { getStoreBaseUrl } from '@/shared/lib/utils/getBaseUrl';

export const MainBanner = ({
  banner,
  variant,
}: {
  banner: SettingsT['main_banner'] | null;
  variant?: string;
}) => {
  if (!banner) return null;
  return (
    <div className={s.container}>
      <Image src={`${getStoreBaseUrl(variant)}/${banner?.photo}`} alt="main-banner" fill />
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
