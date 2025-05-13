'use client';
import { paths } from '@/shared/config/constants/paths';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import s from './Logo.module.scss';
import { getSetting } from '@/shared/api/design/getSetting';
import { usePathname } from 'next/navigation';

export const Logo = ({ variant = 'primary' }: { variant?: 'primary' | 'secondary' }) => {
  const [image, setImage] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const fetchLogo = async () => {
      const settings = await getSetting();
      if (settings?.logo) {
        setImage(settings?.logo);
      }
    };

    fetchLogo();
  }, []);

  if (pathname === '/') {
    return (
      <div className={s[variant]}>
        {!!image && <Image src={`${process.env.NEXT_PUBLIC_STORE_URL}/${image}`} fill alt="logo" />}
      </div>
    );
  }

  return (
    <Link href={paths.home} className={s[variant]}>
      {!!image && <Image src={`${process.env.NEXT_PUBLIC_STORE_URL}/${image}`} fill alt="logo" />}
    </Link>
  );
};
