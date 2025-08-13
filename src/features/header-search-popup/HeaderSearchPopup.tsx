'use client';
import React, { useEffect, useRef, useState, useMemo } from 'react';
import s from './HeaderSearchPopup.module.scss';
import { Button } from '@/shared/ui/button';
import { SearchIcon } from '@/shared/assets';
import { SearchProductCard } from '@/entities/search-product-card';
import { TextField } from '@/shared/ui/text-field';
import Link from 'next/link';
import { CategoryT } from '@/shared/api/category/types';
import { ProductT } from '@/shared/api/product/types';
import { useRouter } from 'next/navigation';

export const HeaderSearchPopup = ({
  categories,
  products,
}: {
  categories: CategoryT[] | null;
  products: ProductT[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();

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
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && searchValue.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchValue.trim())}`);
      setIsOpen(false);
      setSearchValue(''); // Очищаем поле после перехода
    }
  };

  return (
    <div ref={containerRef}>
      <Button variant="icon_secondary" onClick={() => setIsOpen(!isOpen)} aria-label="Поиск">
        <SearchIcon />
      </Button>
      {isOpen && (
        <div className={s.container}>
          <TextField
            variant="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <div className={s.content}>
            {searchResult.categories &&
              searchResult.categories.length > 0 &&
              searchValue.length > 0 && (
                <div className={s.categories}>
                  <h6 className="h6">Поиск по категориям:</h6>
                  {searchResult.categories?.map((category, index) => (
                    <Link className="body_4" key={index} href={'/'}>
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            {searchResult.products &&
              searchResult.products.length > 0 &&
              searchValue.length > 0 && (
                <div className={s.products}>
                  <h6 className="h6">Поиск по товарам:</h6>
                  {searchResult.products?.map((product) => (
                    <SearchProductCard {...product} key={product.id} />
                  ))}
                </div>
              )}
            {(searchValue.length === 0 ||
              (searchResult.categories &&
                searchResult.categories.length === 0 &&
                searchResult.products &&
                searchResult.products.length === 0)) && (
              <div className={s.noResults}>
                <p className="body_4">По вашему запросу ничего не найдено</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
