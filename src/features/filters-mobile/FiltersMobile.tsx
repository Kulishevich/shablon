import { CloseIcon, FilterIcon } from '@/shared/assets';
import { Button } from '@/shared/ui/button';
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import s from './FiltersMobile.module.scss';
import { Filters } from '../filters/Filters';
import { Typography } from '@/shared/ui/typography';

export const FiltersMobile = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="icon_secondary">
          <FilterIcon />
        </Button>
      </Dialog.Trigger>
      <Dialog.Content className={s.content}>
        <div className={s.wrapper}>
          <Dialog.Title asChild>
            <Typography variant="h2">Фильтр</Typography>
          </Dialog.Title>
          <Filters />
          <Dialog.Close asChild>
            <Button variant="icon_secondary" className={s.closeButton}>
              <CloseIcon />
            </Button>
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
};
