import clsx from 'clsx';
import s from './YandexMap.module.scss';

type YandexMapProps = {
  className?: string;
};

export const YandexMap = ({ className }: YandexMapProps) => {
  return (
    <iframe
      src="https://yandex.ru/map-widget/v1/?um=constructor%3A1b05bb4aaa2d91b5058ee3f3b66d98e0ca4d2f5025c525288a69c012bf42cd55&amp;source=constructor"
      className={clsx(s.map, className)}
      width="100%"
    />
  );
};
