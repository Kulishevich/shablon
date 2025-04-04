'use client';
import React, { useEffect, useState } from 'react';
import s from './SearchInput.module.scss';
import { TextField } from '@/shared/ui/text-field';
import { SearchPopup } from '../search-popup';

export const SearchInput = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className={s.searchContainer}>
      <TextField
        placeholder="Поиск по сайту"
        variant="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {!!searchValue && <SearchPopup />}
    </div>
  );
};
