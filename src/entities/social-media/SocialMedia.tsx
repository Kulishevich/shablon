import { TelegramIcon, ViberIcon, WhatsAppIcon } from '@/shared/assets';
import React from 'react';
import s from './SocialMedia.module.scss';
import Link from 'next/link';
import clsx from 'clsx';

export const SocialMedia = ({ className }: { className?: string }) => {
  return (
    <div className={clsx(s.container, className)}>
      <Link href={'/'}>
        <ViberIcon />
      </Link>
      <Link href={'/'}>
        <TelegramIcon />
      </Link>
      <Link href={'/'}>
        <WhatsAppIcon />
      </Link>
    </div>
  );
};
