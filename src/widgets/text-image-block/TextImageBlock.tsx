import React from 'react';
import s from './TextImageBlock.module.scss';
import { TextImageBlockT } from '@/shared/api/services/types';
import Image from 'next/image';
import clsx from 'clsx';
import { Button } from '@/shared/ui/button';

export const TextImageBlock = ({
  storeUrl,
  isButton = false,
  ...block
}: TextImageBlockT & { storeUrl: string; isButton?: boolean }) => {
  return (
    <div className={clsx(s.container, { [s.right]: block.image_position === 'right' })}>
      <div className={s.image}>
        <Image src={`${storeUrl}/${block.image_path}`} alt={`Изображение`} fill />
      </div>

      <div className={s.content}>
        <div className={s.text} dangerouslySetInnerHTML={{ __html: block.text }} />

        {isButton && <Button className={s.button}>Оставить заявку</Button>}
      </div>
    </div>
  );
};
