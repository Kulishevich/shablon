import React from 'react';
import s from './MissionSection.module.scss';
import Image from 'next/image';

export const MissionSection = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <h2 className="h2">Миссия компании</h2>
        <p className="body_1">
          Наша миссия — создавать мягкую мебель, которая становится не просто предметом интерьера,
          а источником повседневного комфорта и эмоционального благополучия.
        </p>
        <p className="body_2">
          Каждый диван, кресло или пуф — это результат кропотливой работы с натуральными
          материалами, эргономичными формами и продуманными деталями.
        </p>
      </div>
      <Image src={'/mission.png'} alt="about" width={636} height={396} className={s.image} />
    </div>
  );
};
