import React from 'react';
import s from './FooterInfo.module.scss';
import { Typography } from '@/shared/ui/typography';
import Image from 'next/image';
import { MasterCardIcon, VisaIcon } from '@/shared/assets';
import Link from 'next/link';

export const FooterInfo = () => {
  return (
    <div className={s.container}>
      <Typography variant="body_7">ⓒ 2025 website.by</Typography>
      <div className={s.paymentMethod}>
        <MasterCardIcon />
        <Image
          src={'/belcard-password.png'}
          width={56}
          height={22}
          alt="belcard"
        />
        <Image src={'/belcard.png'} width={24} height={26} alt="belcard" />
        <VisaIcon />
        <Image
          src="/visa-secure.png"
          width={33}
          height={32}
          alt="visa secure"
          style={{ objectFit: 'cover' }}
        />
        <Image src={'/be-paid.png'} width={45} height={22} alt="bePaid" />
        <Image src={'/mtb-bank.png'} width={54} height={22} alt="MTB Bank" />
      </div>
      <Typography variant="body_7">
        Дизайн и разработка:{' '}
        <Typography as={Link} href={'https://web-space.by/'} variant="body_7">
          Web-space.by
        </Typography>
      </Typography>
    </div>
  );
};
