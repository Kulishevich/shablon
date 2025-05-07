'use client';
import React, { useEffect, useRef, useState } from 'react';
import s from './HeaderSearchPopup.module.scss';
import { Button } from '@/shared/ui/button';
import { SearchIcon } from '@/shared/assets';
import { SearchProductCard } from '@/entities/search-product-card';
import { TextField } from '@/shared/ui/text-field';
import Link from 'next/link';
import { CategoryT } from '@/shared/api/category/types';
import { ProductT } from '@/shared/api/product/types';

export const HeaderSearchPopup = ({
  categories,
  products,
}: {
  categories: CategoryT[] | null;
  products: ProductT[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef}>
      <Button variant="icon_secondary" onClick={() => setIsOpen(true)}>
        <SearchIcon />
      </Button>
      {isOpen && (
        <div className={s.container}>
          <TextField variant="search" />
          <div className={s.content}>
            <div className={s.categories}>
              <h6 className="h6">Поиск по категориям:</h6>
              {categories?.map((category, index) => (
                <Link className="body_4" key={index} href={'/'}>
                  {category.name}
                </Link>
              ))}
            </div>
            <div className={s.products}>
              <h6 className="h6">Поиск по товарам:</h6>
              {products.map((product) => (
                <SearchProductCard {...product} key={product.id} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
