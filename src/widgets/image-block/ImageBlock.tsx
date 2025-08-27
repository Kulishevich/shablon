import Image from 'next/image';
import s from './ImageBlock.module.scss';
import clsx from 'clsx';

export const ImageBlock = ({ image_path }: { image_path: string }) => {
  return (
    <div className={clsx(s.container, 'body_2')}>
      <Image src={image_path} alt="image" fill />
    </div>
  );
};
