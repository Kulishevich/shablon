import React from 'react';
import s from './WorkCard.module.scss';
import Image from 'next/image';
import clsx from 'clsx';

export const WorkCard = async ({
  image,
  caption,
  storeUrl,
}: {
  image: string;
  caption: string;
  storeUrl: string;
}) => {
  return (
    <div className={s.container}>
      <div className={s.image}>
        <Image src={`${storeUrl}/${image}`} alt={caption} fill />
      </div>

      <div className={clsx(s.title, 'h5')}>{caption}</div>
    </div>
  );
};
