'use client';
import React from 'react';
import Image from 'next/image';
import { MasterCardIcon, VisaIcon } from '@/shared/assets';
import Link from 'next/link';
import { useBreakpoint } from '@/shared/lib/hooks/useBreakpoint';
import s from './FooterInfo.module.scss';

export const FooterInfo = () => {
  const { isMobile } = useBreakpoint();

  return (
    <div className={s.container}>
      <p className="body_7">ⓒ 2025 website.by</p>
      <div className={s.paymentMethod}>
        <MasterCardIcon width={!isMobile ? 35 : 26} height={!isMobile ? 21 : 16} />
        <Image
          src={'/belcard-password.png'}
          width={!isMobile ? 56 : 41}
          height={!isMobile ? 22 : 16}
          alt="belcard"
        />
        <Image
          src={'/belcard.png'}
          width={!isMobile ? 24 : 17}
          height={!isMobile ? 26 : 19}
          alt="belcard"
        />
        <VisaIcon width={!isMobile ? 36 : 27} height={!isMobile ? 11 : 8} />
        <Image
          src="/visa-secure.png"
          width={!isMobile ? 33 : 24}
          height={!isMobile ? 32 : 24}
          alt="visa secure"
          style={{ objectFit: 'cover' }}
        />
        <Image
          src={'/be-paid.png'}
          width={!isMobile ? 45 : 33}
          height={!isMobile ? 22 : 16}
          alt="bePaid"
        />
        <Image
          src={'/mtb-bank.png'}
          width={!isMobile ? 54 : 40}
          height={!isMobile ? 22 : 16}
          alt="MTB Bank"
        />
      </div>
      <div className={s.productBy}>
        <p className="body_7">Дизайн и разработка: </p>
        <Link href={'https://web-space.by/'} className="body_7" target="_blank">
          Web-space.by
        </Link>
      </div>
    </div>
  );
};
