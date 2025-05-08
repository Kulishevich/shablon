'use client';
import { useEffect, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import debounce from 'lodash.debounce';

import { Button } from '@/shared/ui/button';
import { Checkbox } from '@/shared/ui/checkbox';
import { CollapseFilter } from '@/shared/ui/collapse-filter';
import clsx from 'clsx';
import s from './Filters.module.scss';
import { BrandT } from '@/shared/api/brands/types';

export const Filters = ({ brands }: { brands: BrandT[] }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [checkedBrands, setCheckedBrands] = useState<string[]>([]);

  useEffect(() => {
    const initialBrands = searchParams.getAll('brands');
    setCheckedBrands(initialBrands);
  }, []);

  const updateUrl = useMemo(
    () =>
      debounce((values: string[]) => {
        const params = new URLSearchParams(searchParams.toString());
        params.delete('brands');
        values.forEach((v) => params.append('brands', v));
        params.set('page', '1');
        router.push(`?${params.toString()}`);
      }, 300),
    [searchParams]
  );

  const handleChange = (value: string, checked: boolean) => {
    const lower = value.toLowerCase();
    const updated = checked ? [...checkedBrands, lower] : checkedBrands.filter((v) => v !== lower);

    setCheckedBrands(updated);
    updateUrl(updated);
  };

  return (
    <div className={clsx(s.filters, 'desktop-only')}>
      <CollapseFilter title="Бренд">
        {brands.map((brand, index) => (
          <Checkbox
            label={brand.name}
            checked={checkedBrands.includes(brand.name.toLowerCase())}
            onCheckedChange={(checked) => handleChange(brand.name, !!checked)}
            key={index}
          />
        ))}
      </CollapseFilter>

      <CollapseFilter title="Цена">cena</CollapseFilter>

      <Button
        variant="secondary"
        fullWidth
        onClick={() => {
          setCheckedBrands([]);
          router.push('?');
        }}
      >
        Сбросить фильтр
      </Button>
    </div>
  );
};
