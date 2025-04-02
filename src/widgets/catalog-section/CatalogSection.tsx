import React, { useState } from 'react';
import s from './CatalogSection.module.scss';
import { Typography } from '@/shared/ui/typography';
import clsx from 'clsx';
import { ProductCard } from '@/entities/product-card';
import { CollapseFilter } from '@/shared/ui/collapse-filter';
import { Checkbox } from '@/shared/ui/checkbox';
import { Button } from '@/shared/ui/button';
import { TextField } from '@/shared/ui/text-field';
import { Select } from '@/shared/ui/select';
import { Pagination } from '@/shared/ui/pagination';

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
        <div className={s.filters}>
          <CollapseFilter title="Бренд">
            {products.slice(0, 5).map((_, index) => (
              <Checkbox label="Casio" key={index} />
            ))}
          </CollapseFilter>

          <CollapseFilter title="Бренд">
            {products.slice(0, 5).map((_, index) => (
              <Checkbox label="Casio" key={index} />
            ))}
          </CollapseFilter>

          <Button variant={'secondary'} fullWidth>
            Сбросить фильтр
          </Button>
        </div>
        <div className={s.productsContainer}>
          <div className={s.search}>
            <div>
              <TextField
                variant="search"
                placeholder="Поиск по категориям"
                className={s.input}
              />
              <Button>Искать</Button>
            </div>
            <Select
              options={options}
              className={s.select}
              defaultValue={options[0].value}
            />
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
