import * as Collapsible from '@radix-ui/react-collapsible';
import { ReactNode, useState } from 'react';
import { Typography } from '../typography';
import { Button } from '../button';
import { ArrowRightIcon } from '@/shared/assets';
import s from './Collapse.module.scss';

export const Collapse = ({
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
        <Button variant="icon_secondary" as="span">
          <ArrowRightIcon />
        </Button>
      </Collapsible.Trigger>
      <Collapsible.Content className={s.content}>
        {children}
      </Collapsible.Content>
    </Collapsible.Root>
  );
};
