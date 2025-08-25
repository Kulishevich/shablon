'use client';
import { paths } from '@/shared/config/constants/paths';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import s from './Logo.module.scss';
import { getSetting } from '@/shared/api/design/getSetting';
import { usePathname } from 'next/navigation';
import { useRuntimeConfig } from '@/shared/lib/hooks/useRuntimeConfig';

export const Logo = ({ variant = 'primary' }: { variant?: 'primary' | 'secondary' }) => {
  const [image, setImage] = useState<string | null>(null);
  const pathname = usePathname();
  const { storeUrl } = useRuntimeConfig();

  useEffect(() => {
    const fetchData = async () => {
      const settings = await getSetting();
      if (settings?.logo) {
        setImage(settings.logo);
      }
    };

    fetchData();
  }, []);

  if (pathname === '/') {
    return (
      <div className={s[variant]}>
        {!!image && (
          <Image
            src={`${storeUrl}/${image}`}
            fill
            alt="logo"
            priority
            sizes="(max-width: 768px) 120px, (max-width: 1200px) 160px, 200px"
          />
        )}
      </div>
    );
  }

  return (
    <Link href={paths.home} className={s[variant]}>
      {!!image && (
        <Image
          src={`${storeUrl}/${image}`}
          fill
          alt="logo"
          priority
          sizes="(max-width: 768px) 120px, (max-width: 1200px) 160px, 200px"
        />
      )}
    </Link>
  );
};
