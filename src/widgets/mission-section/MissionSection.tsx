import React from 'react';
import s from './MissionSection.module.scss';
import Image from 'next/image';
import Cookies from 'js-cookie';
import { getStoreBaseUrl } from '@/shared/lib/utils/getBaseUrl';

export const MissionSection = ({
  title,
  text_primary,
  text_secondary,
  image_path,
}: {
  title: string;
  text_primary: string;
  text_secondary: string;
  image_path: string;
}) => {
  const variant = Cookies.get('variant');

  return (
    <div className={s.container}>
      <div className={s.content}>
        <h2 className="h2">{title}</h2>
        {text_primary && <p className="body_1">{text_primary}</p>}
        {text_secondary && <p className="body_2">{text_secondary}</p>}
      </div>
      <Image
        src={`${getStoreBaseUrl(variant)}/${image_path}`}
        alt="about"
        width={636}
        height={396}
        className={s.image}
      />
    </div>
  );
};
