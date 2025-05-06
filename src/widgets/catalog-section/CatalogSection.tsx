'use client';
import React, { useState } from 'react';
import s from './CatalogSection.module.scss';
import clsx from 'clsx';
import { ProductCard } from '@/entities/product-card';
import { Button } from '@/shared/ui/button';
import { TextField } from '@/shared/ui/text-field';
import { Select } from '@/shared/ui/select';
import { Pagination } from '@/shared/ui/pagination';
import { Filters } from '@/features/filters';
import { FiltersMobile } from '@/features/filters-mobile';
import { ProductsResponseT, ProductT } from '@/shared/api/product/types';

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

export const CatalogSection = ({
  products,
  subcategoryId,
}: {
  products: ProductsResponseT | null;
  subcategoryId?: number;
}) => {
  return (
    <div className={s.container}>
      <h1 className="h1">{category.title}</h1>
      <div className={s.navigation}>
        {category.subcategories.map((subcategory, index) => (
          <button
            className={clsx(subcategoryId === subcategory.id && s.active, 'h3')}
            key={index}
          >
            {subcategory.name}
          </button>
        ))}
      </div>
      <div className={s.catalog}>
        <Filters />
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
              <FiltersMobile />
            </div>
          </div>
          <div className={s.productList}>
            {products?.data?.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
          <div className={s.pagination}>
            <p className="body_7">
              Найдено по фильтрам: {products?.total || 1}
            </p>
            <Pagination totalPages={products?.last_page || 1} />
          </div>
        </div>
      </div>
    </div>
  );
};
