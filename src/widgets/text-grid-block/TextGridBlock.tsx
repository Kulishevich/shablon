import React from 'react';
import s from './TextGridBlock.module.scss';
import clsx from 'clsx';
import { TextGridBlockT } from '@/shared/api/services/types';

export const TextGridBlock = ({ title, content, items }: TextGridBlockT) => {
  return (
    <div className={s.container}>
      <div className={s.caption}>
        <h2 className="h2">{title}</h2>
        <div className="body_1" dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>

      <div className={s.grid}>
        {items.map((item, index) => (
          <div className={s.item} key={index}>
            <div className={s.header}>
              <div className={clsx(s.number, 'h5')}>{index + 1}</div>
              <h3 className="h5">{item.title}</h3>
            </div>
            <p className="body_4" dangerouslySetInnerHTML={{ __html: item.content }}></p>
          </div>
        ))}
      </div>
    </div>
  );
};
