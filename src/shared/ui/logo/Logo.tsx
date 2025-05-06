import { paths } from '@/shared/config/constants/paths';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import s from './Logo.module.scss';
import { getSetting } from '@/shared/api/design/getSetting';

export const Logo = async ({
  variant = 'primary',
}: {
  variant?: 'primary' | 'secondary';
}) => {
  const settings = await getSetting();

  return (
    <Link href={paths.home} className={s[variant]}>
      <Image
        src={`${process.env.NEXT_PUBLIC_STORE_URL}/${settings?.logo}`}
        fill
        alt="logo"
      />
    </Link>
  );
};
