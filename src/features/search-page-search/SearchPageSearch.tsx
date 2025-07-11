'use client';
import React, { useState, useEffect } from 'react';
import s from './SearchPageSearch.module.scss';
import { TextField } from '@/shared/ui/text-field';
import { Button } from '@/shared/ui/button';
import { useRouter, useSearchParams } from 'next/navigation';

export const SearchPageSearch = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const router = useRouter();
  const searchParams = useSearchParams();

  // Устанавливаем текущий поисковый запрос при загрузке компонента
  useEffect(() => {
    const currentSearch = searchParams.get('q');
    if (currentSearch) {
      setSearchValue(currentSearch);
    }
  }, [searchParams]);

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());

    params.set('page', '1');
    if (!!searchValue.trim().length) {
      params.set('q', searchValue.trim());
    } else {
      params.delete('q');
    }

    router.push(`/search?${params.toString()}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={s.searchContainer}>
      <TextField
        variant="search"
        placeholder="Поиск по товарам"
        className={s.input}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button onClick={handleSearch}>Искать</Button>
    </div>
  );
};
