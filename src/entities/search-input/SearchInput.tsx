'use client';
import React, { useEffect, useState } from 'react';
import s from './SearchInput.module.scss';
import { TextField } from '@/shared/ui/text-field';
import { SearchPopup } from '../search-popup';

export const SearchInput = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (!!searchValue) {
      setIsOpenSearch(true);
    }
  }, [searchValue]);

  return (
    <div className={s.searchContainer}>
      <TextField
        placeholder="Поиск по сайту"
        variant="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <SearchPopup isOpen={isOpenSearch} setIsOpen={setIsOpenSearch} />
    </div>
  );
};
