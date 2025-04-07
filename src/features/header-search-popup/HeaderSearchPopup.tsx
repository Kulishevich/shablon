import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import s from './HeaderSearchPopup.module.scss';
import { Button } from '@/shared/ui/button';
import { SearchIcon } from '@/shared/assets';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Typography } from '@/shared/ui/typography';
import { SearchProductCard } from '@/entities/search-product-card';
import { TextField } from '@/shared/ui/text-field';
import Link from 'next/link';

const categories = ['Мебель', 'Фурнитура', 'Декор для дома'];

const products = [
  {
    id: 1,
    name: 'Ковёр "Valencia"',
    articul: '12345',
    image_path: '/product.png',
    price: 130,
    priceWithDiscount: null,
  },
  {
    id: 2,
    name: 'Ковёр "Valencia"',
    articul: '12345',
    image_path: '/product.png',
    price: 130,
    priceWithDiscount: 110,
  },
  {
    id: 3,
    name: 'Ковёр "Valencia"',
    articul: '12345',
    image_path: '/product.png',
    price: 130,
    priceWithDiscount: null,
  },
];

export const HeaderSearchPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <Button variant="icon_secondary">
          <SearchIcon width={22} height={22} />
        </Button>
      </Dialog.Trigger>
      <VisuallyHidden>
        <Dialog.Title>Поиск</Dialog.Title>
      </VisuallyHidden>
      <Dialog.Content className={s.container}>
        <TextField variant="search" />
        <div className={s.content}>
          <div className={s.categories}>
            <Typography variant="h6">Поиск по категориям:</Typography>
            {categories.map((category, index) => (
              <Typography variant="body_4" key={index} as={Link} href={'/'}>
                {category}
              </Typography>
            ))}
          </div>
          <div className={s.products}>
            <Typography variant="h6">Поиск по товарам:</Typography>
            {products.map((product) => (
              <SearchProductCard {...product} key={product.id} />
            ))}
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
};
