'use client';
import React, { useState } from 'react';
import s from './SearchInput.module.scss';
import { TextField } from '@/shared/ui/text-field';
import { SearchPopup } from '../search-popup';
import { ProductT } from '@/shared/api/product/types';
import { CategoryT } from '@/shared/api/category/types';

export const SearchInput = ({
  categories,
  products,
}: {
  categories: CategoryT[] | null;
  products: ProductT[];
}) => {
  const [searchValue, setSearchValue] = useState('');

  const searchResult = {
    categories: categories?.filter((category) =>
      category.name.toLowerCase().includes(searchValue.toLowerCase())
    ),
    products: products?.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    ),
  };

  return (
    <div className={s.searchContainer}>
      <TextField
        placeholder="Поиск по сайту"
        variant="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {!!searchValue && (
        <SearchPopup
          categories={searchResult.categories || []}
          products={searchResult.products || []}
        />
      )}
    </div>
  );
};
