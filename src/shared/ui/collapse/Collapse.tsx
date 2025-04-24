import * as Collapsible from '@radix-ui/react-collapsible';
import { ReactNode, useState } from 'react';
import { Button } from '../button';
import { ArrowRightIcon } from '@/shared/assets';
import s from './Collapse.module.scss';
import clsx from 'clsx';

export const Collapse = ({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible.Root
      open={open}
      onOpenChange={setOpen}
      className={clsx(s.rootState, className)}
    >
      <Collapsible.Trigger className={s.trigger}>
        <p className="h2">{title}</p>
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
