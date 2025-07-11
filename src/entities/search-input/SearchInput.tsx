'use client';
import React, { useEffect, useRef, useState } from 'react';
import s from './SearchInput.module.scss';
import { TextField } from '@/shared/ui/text-field';
import { SearchPopup } from '../search-popup';
import { ProductT } from '@/shared/api/product/types';
import { CategoryT } from '@/shared/api/category/types';
import { useRouter } from 'next/navigation';

export const SearchInput = ({
  categories,
  products,
}: {
  categories: CategoryT[] | null;
  products: ProductT[];
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const searchResult = {
    categories: categories?.filter((category) =>
      category.name.toLowerCase().includes(searchValue.toLowerCase())
    ),
    products: products?.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    ),
  };

  const handleChangeValue = (value: string) => {
    setSearchValue(value);
    setIsOpen(!!value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && searchValue.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchValue.trim())}`);
      setIsOpen(false);
      setSearchValue(''); // Очищаем поле после перехода
    }
  };

  return (
    <div className={s.searchContainer} ref={searchRef}>
      <TextField
        placeholder="Поиск по сайту"
        variant="search"
        value={searchValue}
        onChange={(e) => handleChangeValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      {!!isOpen && (
        <SearchPopup
          categories={searchResult.categories || []}
          products={searchResult.products || []}
        />
      )}
    </div>
  );
};
