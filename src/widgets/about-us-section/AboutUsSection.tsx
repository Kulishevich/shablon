import React from 'react';
import s from './AboutUsSection.module.scss';
import Image from 'next/image';
import { Logo } from '@/shared/ui/logo';

export const AboutUsSection = ({
  text,
  image,
}: {
  text: string;
  image: string;
}) => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <div>
          <h2 className="h2">О нас</h2>
          <p className="body_2">{text}</p>
        </div>
        <Logo variant="primary" />
      </div>
      <div className={s.imageContainer}>
        <Image
          src={`${process.env.NEXT_PUBLIC_STORE_URL}/${image}`}
          fill
          alt="about-us"
        />
      </div>
    </div>
  );
};
