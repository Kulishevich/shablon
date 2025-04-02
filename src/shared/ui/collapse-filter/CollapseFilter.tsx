import * as Collapsible from '@radix-ui/react-collapsible';
import { ReactNode, useState } from 'react';
import { Typography } from '../typography';
import { ArrowDownIcon } from '@/shared/assets';
import s from './CollapseFilter.module.scss';

export const CollapseFilter = ({
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
        <Typography variant="h5">{title}</Typography>
        <ArrowDownIcon />
      </Collapsible.Trigger>
      <Collapsible.Content className={s.content}>
        {children}
      </Collapsible.Content>
    </Collapsible.Root>
  );
};
