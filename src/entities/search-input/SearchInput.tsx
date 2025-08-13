'use client';
import React, { useEffect, useRef, useState, useMemo } from 'react';
import s from './SearchInput.module.scss';
import { TextField } from '@/shared/ui/text-field';
import { SearchPopup } from '../search-popup';
import { ProductT } from '@/shared/api/product/types';
import { CategoryT } from '@/shared/api/category/types';
import { useRouter } from 'next/navigation';
import { enrichProductsWithFullPath } from '@/shared/lib/utils/productUtils';
import Cookies from 'js-cookie';

export const SearchInput = ({
  categories,
  products,
}: {
  categories: CategoryT[] | null;
  products: ProductT[];
}) => {
  const [variant, setVariant] = useState<string | undefined>(undefined);
  const [searchValue, setSearchValue] = useState('');
  const [productResult, setProductResult] = useState<ProductT[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    const cookieVariant = Cookies.get('variant');
    setVariant(cookieVariant);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const searchResult = useMemo(
    () => ({
      categories: categories?.filter((category) =>
        category.name.toLowerCase().includes(searchValue.toLowerCase())
      ),
      products: products?.filter((product) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
      ),
    }),
    [categories, products, searchValue]
  );

  useEffect(() => {
    const createProductsWithFullPath = async () => {
      if (!searchResult.products || searchResult.products.length === 0) {
        setProductResult([]);
        return;
      }

      const productsResultWithFullPath = await enrichProductsWithFullPath({
        products: searchResult.products,
        variant,
      });

      setProductResult(productsResultWithFullPath);
    };

    createProductsWithFullPath();
  }, [searchValue, variant]); // Используем searchValue вместо searchResult.products

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
        <SearchPopup categories={searchResult.categories || []} products={productResult} />
      )}
    </div>
  );
};
