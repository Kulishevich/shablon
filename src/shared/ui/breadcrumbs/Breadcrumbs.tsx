'use client';
import cn, { clsx } from 'clsx';
import s from './Breadcrumbs.module.scss';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ArrowRightIcon } from '@/shared/assets';
import { navigation } from '@/shared/config/constants/navigation';

interface Props {
  className?: string;
  dynamicPath?: { title: string; path: string }[];
}

export const Breadcrumbs = ({ className, dynamicPath }: Props) => {
  const pathname = usePathname();
  const pathNames = pathname.split('/');

  function handlePathName(path: string) {
    return navigation.find((elem) => path === elem.path.replace('/', ''));
  }

  const pathArr = [
    ...pathNames.map((elem) => handlePathName(elem)),
    ...(dynamicPath ? [...dynamicPath] : []),
  ].filter((elem) => !!elem);

  return (
    <div className={clsx(s.container, className)}>
      {pathArr?.map((path, idx) => {
        const lastItem = idx === pathArr.length - 1;
        const href = pathArr
          .slice(1, idx + 1)
          .map((elem) => elem.path)
          .join('');

        return (
          <Link
            href={href || '/'}
            className={cn(
              s.elem,
              lastItem ? 'body_6_bold' : 'body_6'
              // lastItem && s.lastItem
            )}
            key={idx}
          >
            {!!idx && <ArrowRightIcon className={s.icon} />}
            {path?.title}
          </Link>
        );
      })}
    </div>
  );
};
