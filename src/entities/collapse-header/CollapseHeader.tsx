import React, { ReactNode, useState } from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import s from './CollapseHeader.module.scss';
import { ArrowRightIcon } from '@/shared/assets';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';
import clsx from 'clsx';

export const CollapseHeader = ({
  title,
  children,
  subcategory = false,
  onClick,
  href,
}: {
  title: string;
  children: ReactNode;
  subcategory?: boolean;
  onClick: () => void;
  href: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible.Root
      open={open}
      onOpenChange={setOpen}
      className={clsx(s.rootState, { [s.subcategory]: subcategory })}
    >
      <Collapsible.Trigger className={s.trigger}>
        <div className={subcategory ? 'h3' : 'h2'}>
          <Link href={href} onClick={onClick}>
            {title}
          </Link>
          <ArrowRightIcon width={24} height={24} className={open ? s.rotated : ''} />
        </div>
      </Collapsible.Trigger>
      <Collapsible.Content className={s.content}>
        <div className={s.wrapper}>{children}</div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};
