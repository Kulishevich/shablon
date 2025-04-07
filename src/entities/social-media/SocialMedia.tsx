import { TelegramIcon, ViberIcon, WhatsAppIcon } from '@/shared/assets';
import React from 'react';
import s from './SocialMedia.module.scss';
import { Typography } from '@/shared/ui/typography';
import Link from 'next/link';
import clsx from 'clsx';

export const SocialMedia = ({ className }: { className?: string }) => {
  return (
    <div className={clsx(s.container, className)}>
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
