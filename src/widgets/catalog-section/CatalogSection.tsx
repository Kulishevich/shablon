import React, { useState } from 'react';
import s from './CatalogSection.module.scss';
import { Typography } from '@/shared/ui/typography';
import clsx from 'clsx';
import { ProductCard } from '@/entities/product-card';
import { Button } from '@/shared/ui/button';
import { TextField } from '@/shared/ui/text-field';
import { Select } from '@/shared/ui/select';
import { Pagination } from '@/shared/ui/pagination';
import { Filters } from '@/features/filters';
import { useBreakpoint } from '@/shared/lib/hooks/useBreakpoint';
import { FilterIcon } from '@/shared/assets';
import { FiltersMobile } from '@/features/filters-mobile';

const category = {
  title: 'Мебель',
  subcategories: [
    { name: 'Столы', id: 1 },
    { name: 'Стулья', id: 2 },
    { name: 'Столы', id: 3 },
    { name: 'Стулья', id: 4 },
    { name: 'Столы', id: 5 },
    { name: 'Стулья', id: 6 },
  ],
};

const products = new Array(9).fill('');

const options = [
  {
    option: 'Популярные',
    value: 'popular',
  },
  {
    option: 'Сначала дешевые',
    value: 'min',
  },
  {
    option: 'Сначала дорогие',
    value: 'max',
  },
  {
    option: 'По алфавиту А-Я',
    value: 'desc',
  },
  {
    option: 'По алфавиту Я-А',
    value: 'asc',
  },
];

export const CatalogSection = () => {
  const [activeSubcategory, setActiveSubcategory] = useState<number>(
    category.subcategories[0].id
  );
  const { isMobile } = useBreakpoint();

  return (
    <div className={s.container}>
      <Typography variant="h1" as="h1">
        {category.title}
      </Typography>
      <div className={s.navigation}>
        {category.subcategories.map((subcategory, index) => (
          <Typography
            variant="h3"
            as="button"
            className={clsx(activeSubcategory === subcategory.id && s.active)}
            onClick={() => setActiveSubcategory(subcategory.id)}
            key={index}
          >
            {subcategory.name}
          </Typography>
        ))}
      </div>
      <div className={s.catalog}>
        {!isMobile && <Filters />}
        <div className={s.productsContainer}>
          <div className={s.search}>
            <div className={s.searchContainer}>
              <TextField
                variant="search"
                placeholder="Поиск по категориям"
                className={s.input}
              />
              <Button>Искать</Button>
            </div>
            <div className={s.selectContainer}>
              <Select options={options} defaultValue={options[0].value} />
              {isMobile && <FiltersMobile />}
            </div>
          </div>
          <div className={s.productList}>
            {products.map((_, index) => (
              <ProductCard key={index} />
            ))}
          </div>
          <div className={s.pagination}>
            <Typography variant="body_7">Найдено по фильтрам: 100</Typography>
            <Pagination totalPages="10" />
          </div>
        </div>
      </div>
    </div>
  );
};
