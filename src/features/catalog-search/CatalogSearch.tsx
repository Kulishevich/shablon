'use client';
import React, { useState } from 'react';
import s from './CatalogSearch.module.scss';
import { TextField } from '@/shared/ui/text-field';
import { Button } from '@/shared/ui/button';
import { useRouter, useSearchParams } from 'next/navigation';

export const CatalogSearch = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = () => {
    const params = new URLSearchParams(searchParams.toString());

    params.set('page', '1');
    if (!!searchValue.length) {
      params.set('search', searchValue);
    } else {
      params.delete('search');
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <div className={s.searchContainer}>
      <TextField
        variant="search"
        placeholder="Поиск по категориям"
        className={s.input}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Button onClick={handleChange}>Искать</Button>
    </div>
  );
};
