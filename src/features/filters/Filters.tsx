import { Button } from '@/shared/ui/button';
import { Checkbox } from '@/shared/ui/checkbox';
import { CollapseFilter } from '@/shared/ui/collapse-filter';
import React from 'react';
import clsx from 'clsx';
import s from './Filters.module.scss';

const products = new Array(9).fill('');

export const Filters = () => {
  return (
    <div className={clsx(s.filters, 'desktop-only')}>
      <CollapseFilter title="Бренд">
        {products.slice(0, 5).map((_, index) => (
          <Checkbox label="Casio" key={index} />
        ))}
      </CollapseFilter>

      <CollapseFilter title="Цена">
        {products.slice(0, 5).map((_, index) => (
          <Checkbox label="Casio" key={index} />
        ))}
      </CollapseFilter>

      <Button variant={'secondary'} fullWidth>
        Сбросить фильтр
      </Button>
    </div>
  );
};
