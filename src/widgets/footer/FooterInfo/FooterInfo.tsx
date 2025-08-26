'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import s from './FooterInfo.module.scss';

export const FooterInfo = () => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <div className={s.container}>
      <p className="body_7">
        ⓒ {new Date().getFullYear()} {url.split('/')[2]}
      </p>

      <div className={s.productBy}>
        <p className="body_7">Дизайн и разработка: </p>
        <Link href={'https://web-space.by/'} className="body_7" target="_blank">
          Web-space.by
        </Link>
      </div>
    </div>
  );
};
