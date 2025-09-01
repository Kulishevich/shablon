import Image from 'next/image';
import s from './ImageBlock.module.scss';
import clsx from 'clsx';

export const ImageBlock = ({
  image_path,
  className,
}: {
  image_path: string;
  className?: string;
}) => {
  return (
    <div className={clsx(s.container, 'body_2', className)}>
      <Image src={image_path} alt="image" width={1296} height={620} />
    </div>
  );
};
