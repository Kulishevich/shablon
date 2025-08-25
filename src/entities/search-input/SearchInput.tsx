'use client';
import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import s from './SearchInput.module.scss';
import { TextField } from '@/shared/ui/text-field';
import { SearchPopup } from '../search-popup';
import { ProductT } from '@/shared/api/product/types';
import { CategoryT } from '@/shared/api/category/types';
import { useRouter } from 'next/navigation';
import { enrichProductsWithFullPath } from '@/shared/lib/utils/productUtils';
import { searchProducts } from '@/shared/api/product/searchProducts';

export const SearchInput = ({ categories }: { categories: CategoryT[] | null }) => {
  const [searchValue, setSearchValue] = useState('');
  const [products, setProducts] = useState<ProductT[]>([]);
  const [productResult, setProductResult] = useState<ProductT[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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

  // Debounced search function
  const debouncedSearch = useCallback(
    (() => {
      let timeoutId: NodeJS.Timeout;
      return (searchQuery: string) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(async () => {
          if (!searchQuery.trim() || searchQuery.trim().length < 2) {
            setProducts([]);
            setIsLoading(false);
            return;
          }

          setIsLoading(true);
          try {
            const searchResults = await searchProducts({
              search: searchQuery,
              limit: 10,
            });
            setProducts(searchResults || []);
          } catch (error) {
            console.error('Search error:', error);
            setProducts([]);
          } finally {
            setIsLoading(false);
          }
        }, 300); // 300ms debounce
      };
    })(),
    []
  );

  // Effect для поиска продуктов при изменении поискового запроса
  useEffect(() => {
    if (!searchValue.trim()) {
      setProducts([]);
      setIsLoading(false);
      return;
    }

    debouncedSearch(searchValue);
  }, [searchValue, debouncedSearch]);

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
    if (!products.length) {
      setProductResult([]);
      return;
    }

    const createProductsWithFullPath = async () => {
      try {
        const productsResultWithFullPath = await enrichProductsWithFullPath({
          products,
        });
        setProductResult(productsResultWithFullPath);
      } catch (error) {
        console.error('Error enriching products with full path:', error);
        setProductResult(products); // Fallback to original products
      }
    };

    createProductsWithFullPath();
  }, [products]);

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
          products={productResult}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};
