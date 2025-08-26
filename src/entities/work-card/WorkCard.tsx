import React from 'react';
import s from './WorkCard.module.scss';
import Image from 'next/image';
import clsx from 'clsx';

export const WorkCard = async () => {
  return (
    <div className={s.container}>
      <div className={s.image}>
        <Image src={'/certificate.png'} alt="work" fill />
      </div>

      <div className={clsx(s.title, 'h5')}>Укладка плитки в ванной</div>
    </div>
  );
};
