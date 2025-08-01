'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import debounce from 'lodash.debounce';

import { Button } from '@/shared/ui/button';
import { Checkbox } from '@/shared/ui/checkbox';
import { CollapseFilter } from '@/shared/ui/collapse-filter';
import clsx from 'clsx';
import s from './Filters.module.scss';
import { BrandT } from '@/shared/api/brands/types';
import { PriceSlider } from '@/shared/ui/price-slider';
import { TextField } from '@/shared/ui/text-field';

export const Filters = ({ brands, min, max }: { brands: BrandT[]; min: number; max: number }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [minPrice, setMinPrice] = useState<number>(Number(searchParams.get('price_from')) || min);
  const [maxPrice, setMaxPrice] = useState<number>(Number(searchParams.get('price_to')) || max);
  const [checkedBrands, setCheckedBrands] = useState<string[]>([]);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const brandParam = searchParams.get('brand');
    const initialBrands = brandParam ? brandParam.split(',') : [];
    setCheckedBrands(initialBrands);
  }, []);

  const updatePriceUrl = useMemo(
    () =>
      debounce((min: number, max: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('price_from', min.toString());
        params.set('price_to', max.toString());
        params.set('page', '1');

        router.push(`?${params.toString()}`);
      }, 500),
    [searchParams]
  );

  const updateUrl = useMemo(
    () =>
      debounce((values: string[]) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('brand', values.join(','));
        params.set('page', '1');
        router.push(`?${params.toString()}`);
      }, 500),
    [searchParams]
  );

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    updatePriceUrl(minPrice, maxPrice);
  }, [minPrice, maxPrice]);

  useEffect(() => {
    return () => {
      updatePriceUrl.cancel();
      updateUrl.cancel();
    };
  }, [updatePriceUrl, updateUrl]);

  const handleChangeBrands = (value: string, checked: boolean) => {
    const lower = value.toLowerCase();
    const updated = checked ? [...checkedBrands, lower] : checkedBrands.filter((v) => v !== lower);

    setCheckedBrands(updated);
    updateUrl(updated);
  };

  const handleChangePrice = (value: string, type: 'max' | 'min') => {
    const numeric = Number(value);
    if (!isNaN(numeric)) {
      if (type === 'max') {
        setMaxPrice(numeric);
      } else {
        setMinPrice(numeric);
      }
    }
  };

  const resetFilters = () => {
    setCheckedBrands([]);
    setMinPrice(min);
    setMaxPrice(max);

    // Сохраняем поисковой запрос и другие параметры (кроме фильтров) при сбросе
    const params = new URLSearchParams();
    const searchQuery = searchParams.get('q');
    const sortBy = searchParams.get('sort_by');
    const sortDirection = searchParams.get('sort_direction');
    const search = searchParams.get('search');
    const tags = searchParams.get('tags'); // Сохраняем теги

    if (searchQuery) {
      params.set('q', searchQuery);
    }
    if (search) {
      params.set('search', search);
    }
    if (sortBy) {
      params.set('sort_by', sortBy);
    }
    if (sortDirection) {
      params.set('sort_direction', sortDirection);
    }
    if (tags) {
      params.set('tags', tags); // Сохраняем теги при сбросе
    }
    params.set('page', '1');

    router.push(`?${params.toString()}`);
  };

  return (
    <div className={clsx(s.filters, 'desktop-only')}>
      <CollapseFilter title="Бренд">
        {brands.map((brand, index) => (
          <Checkbox
            label={brand.name}
            checked={checkedBrands.includes(brand.name.toLowerCase())}
            onCheckedChange={(checked) => handleChangeBrands(brand.name, !!checked)}
            key={index}
          />
        ))}
      </CollapseFilter>

      <CollapseFilter title="Цена">
        <div className={s.inputsContainer}>
          <TextField
            className={s.input}
            value={minPrice}
            onChange={(e) => handleChangePrice(e.target.value, 'min')}
          />
          <TextField
            className={s.input}
            value={maxPrice}
            onChange={(e) => handleChangePrice(e.target.value, 'max')}
          />
        </div>
        <PriceSlider
          min={min}
          max={max}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        />
      </CollapseFilter>

      <Button variant="secondary" fullWidth onClick={resetFilters}>
        Сбросить фильтр
      </Button>
    </div>
  );
};
