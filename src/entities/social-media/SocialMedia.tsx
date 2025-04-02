import { TelegramIcon, ViberIcon, WhatsAppIcon } from '@/shared/assets';
import React from 'react';
import s from './SocialMedia.module.scss';
import { Typography } from '@/shared/ui/typography';
import Link from 'next/link';

export const SocialMedia = () => {
  return (
    <div className={s.container}>
      <Typography as={Link} href={'/'}>
        <ViberIcon />
      </Typography>
      <Typography as={Link} href={'/'}>
        <TelegramIcon />
      </Typography>
      <Typography as={Link} href={'/'}>
        <WhatsAppIcon />
      </Typography>
    </div>
  );
};
