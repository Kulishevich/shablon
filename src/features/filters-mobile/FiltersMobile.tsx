import { CloseIcon, FilterIcon } from '@/shared/assets';
import { Button } from '@/shared/ui/button';
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import s from './FiltersMobile.module.scss';
import { Filters } from '../filters/Filters';

export const FiltersMobile = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild className={s.trigger}>
        <Button variant="icon_secondary">
          <FilterIcon />
        </Button>
      </Dialog.Trigger>
      <Dialog.Content className={s.content}>
        <div className={s.wrapper}>
          <Dialog.Title asChild>
            <h2 className="h2">Фильтр</h2>
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
