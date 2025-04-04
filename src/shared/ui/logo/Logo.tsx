import { paths } from '@/shared/config/constants/paths';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import s from './Logo.module.scss';

export const Logo = ({
  variant = 'primary',
}: {
  variant?: 'primary' | 'secondary';
}) => {
  return (
    <Link href={paths.home} className={s[variant]}>
      <Image src="/logo.png" fill alt="logo" />
    </Link>
  );
};
