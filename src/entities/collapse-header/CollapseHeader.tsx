import React, { ReactNode, useState } from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import s from './CollapseHeader.module.scss';
import { ArrowRightIcon } from '@/shared/assets';
import { Typography } from '@/shared/ui/typography';
import { Button } from '@/shared/ui/button';

export const CollapseHeader = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible.Root
      open={open}
      onOpenChange={setOpen}
      className={s.rootState}
    >
      <Collapsible.Trigger className={s.trigger}>
        <Typography variant="h2">{title}</Typography>
        <ArrowRightIcon width={24} height={24} />
      </Collapsible.Trigger>
      <Collapsible.Content className={s.content}>
        <div className={s.wrapper}>{children}</div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};
