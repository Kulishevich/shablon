import React from 'react';
import s from './styles.module.scss';
import Image from 'next/image';
import { Button } from '@/shared/ui/button';
import clsx from 'clsx';
import Link from 'next/link';

export const HomeFirstInfoBlock = () => {
  return (
    <div className={s.container}>
      <div className={s.imageContainer}>
        <div className={s.image}>
          <Image src={'/home-text-second-block-image.jpg'} fill alt="home-image" />
        </div>
        <div className={s.image}>
          <Image src={'/home-text-second-block-second-image.png'} fill alt="home-image" />
        </div>
      </div>
      <div className={s.content}>
        <h3 className={clsx(s.title, 'body_1')}>
          Электроконвектор “Теплея” — современный отопительный прибор для систем электрического
          обогрева.
        </h3>
        <p className={clsx(s.description, 'body_2')}>
          Быстро нагревает помещение до заданной температуры и поддерживает микроклимат даже после
          отключения от сети. В аварийном режиме сохраняет тепло без электропитания, сочетая
          экологичность, энергоэффективность и безопасность. Уникальность технологии обеспечивает
          кварцево‑оливиновый нагреватель с увеличенным сроком службы, запатентованный компанией.
        </p>
        <Button className={s.link} as={Link} href={'/texniceskaia-informaciia'}>
          Подробнее
        </Button>
      </div>
    </div>
  );
};
