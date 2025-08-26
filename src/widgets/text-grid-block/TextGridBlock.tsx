import React from 'react';
import s from './TextGridBlock.module.scss';
import clsx from 'clsx';

export const TextGridBlock = ({
  title,
  text,
  items,
}: {
  title: string;
  text: string;
  items: { title: string; text: string }[];
}) => {
  return (
    <div className={s.container}>
      <div className={s.caption}>
        <h2 className="h2">{title}</h2>
        <div className="body_1" dangerouslySetInnerHTML={{ __html: text }}></div>
      </div>

      <div className={s.grid}>
        {items.map((item, index) => (
          <div className={s.item} key={index}>
            <div className={s.header}>
              <div className={clsx(s.number, 'h5')}>{index + 1}</div>
              <h3 className="h5" dangerouslySetInnerHTML={{ __html: item.title }}></h3>
            </div>
            <p className="body_4">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
