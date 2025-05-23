import React from 'react';
import s from './AboutSection.module.scss';
import Image from 'next/image';
import { ContentImageBlock } from '@/shared/api/about/types';
import clsx from 'clsx';
import { parseImageTextBlock } from '@/shared/lib/utils/parseImageTextBlock';

export const AboutSection = ({ items }: { items?: ContentImageBlock[] }) => {
  return (
    <div className={s.container}>
      <h1 className="h1">О нас</h1>
      {items && (
        <div className={s.content}>
          {items.map((item) => {
            if (item.type === 'image_text') {
              const caption = parseImageTextBlock(item.content.text);

              return (
                <div
                  className={clsx(s.block, item.content.image_position === 'right' && s.reverse)}
                >
                  <div className={s.caption} dangerouslySetInnerHTML={{ __html: caption }} />

                  <Image
                    src={`${process.env.NEXT_PUBLIC_STORE_URL}/${item.content.image_path}`}
                    alt="about"
                    width={636}
                    height={396}
                    className={s.image}
                  />
                </div>
              );
            } else {
              return (
                <div className={s.block}>
                  <div
                    className={clsx(s.caption, 'body_2')}
                    dangerouslySetInnerHTML={{ __html: item.content.text }}
                  />
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};
