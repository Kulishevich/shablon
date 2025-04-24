import React from 'react';
import s from './ProductCard.module.scss';
import Image from 'next/image';
import { Button } from '@/shared/ui/button';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';
import { showToast } from '@/shared/ui/toast';
import { useBreakpoint } from '@/shared/lib/hooks/useBreakpoint';
import { CloseIcon, ShoppingCartIcon } from '@/shared/assets';
import clsx from 'clsx';

const product = {
  name: 'Свеча Jo Malone',
  description: 'Насыщенные ноты сока миррового дерева из Намибии',
  price: 130,
  priceWithDiscount: 110,
  image_path: '/product.png',
  isNew: true,
  isPopular: true,
  isDiscount: true,
};

export const ProductCard = ({
  productInCart = false,
}: {
  productInCart?: boolean;
}) => {
  const { isMobile } = useBreakpoint();

  return (
    <div className={s.container}>
      <div className={s.imageContainer}>
        <Link href={`${paths.product}/1`}>
          <Image
            src={product.image_path}
            fill
            alt="product"
            className={s.image}
          />
        </Link>
        <div className={s.tagsContainer}>
          {product.isNew && <span className="tag">бестселлер</span>}
          {product.isNew && <span className="tag">новинка</span>}
          {product.isNew && <span className="tag">акция</span>}
        </div>
        {productInCart && (
          <Button variant="icon_secondary" className={s.deleteButton}>
            <CloseIcon />
          </Button>
        )}
      </div>
      <h5 className={clsx(s.title, 'h5')}>{product.name}</h5>
      <p className={clsx(s.discription, 'body_5')}>{product.description}</p>

      <div className={s.priceContainer}>
        <div className={s.price}>
          <span className="discount">{product.price} BYN</span>
          <h4 className="h4">{product.priceWithDiscount} BYN</h4>
        </div>
        {!isMobile ? (
          <Button
            fullWidth
            onClick={() =>
              showToast({ title: 'Добавлено в корзину', variant: 'success' })
            }
          >
            В корзину
          </Button>
        ) : (
          <Button variant={'icon_outlined'}>
            <ShoppingCartIcon />
          </Button>
        )}
      </div>
    </div>
  );
};
