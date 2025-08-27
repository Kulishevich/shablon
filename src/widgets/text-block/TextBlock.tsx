import s from './TextBlock.module.scss';
import clsx from 'clsx';

export const TextBlock = ({ text }: { text: string }) => {
  return (
    <div className={clsx(s.container, 'body_2')} dangerouslySetInnerHTML={{ __html: text }}></div>
  );
};
