import React from 'react';
import Image from 'next/image';
import { Button } from '@/shared/ui/button';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';
import { showToast } from '@/shared/ui/toast';
import { useBreakpoint } from '@/shared/lib/hooks/useBreakpoint';
import { CloseIcon, ShoppingCartIcon } from '@/shared/assets';
import clsx from 'clsx';
import { ProductType } from '@/shared/api/product/types';
import s from './ProductCard.module.scss';

export const ProductCard = ({
  product,
  productInCart = false,
}: {
  productInCart?: boolean;
  product: ProductType | null;
}) => {
  const { isMobile } = useBreakpoint();

  const totalPrice = !!product?.discount
    ? Math.round(
        (Number(product?.price) * (100 - Number(product?.discount))) / 100
      )
    : product?.price;

  return (
    <div className={s.container}>
      <div className={s.imageContainer}>
        <Link href={`${paths.product}/${product?.slug}_${product?.id}`}>
          <Image
            src={`${process.env.NEXT_PUBLIC_STORE_URL}/${product?.main_image.image_path}`}
            fill
            alt="product"
            className={s.image}
          />
        </Link>
        <div className={s.tagsContainer}>
          {product?.is_popular && <span className="tag">бестселлер</span>}
          {/* {product.isNew && <span className="tag">новинка</span>} */}
          {!!product?.discount && <span className="tag">акция</span>}
        </div>
        {productInCart && (
          <Button variant="icon_secondary" className={s.deleteButton}>
            <CloseIcon />
          </Button>
        )}
      </div>
      <h5 className={clsx(s.title, 'h5')}>{product?.name}</h5>
      <div
        className={clsx(s.description, 'body_5')}
        dangerouslySetInnerHTML={{ __html: product?.description || '' }}
      />

      <div className={s.priceContainer}>
        <div className={s.price}>
          {!!product?.discount && (
            <span className="discount">{product?.price} BYN</span>
          )}
          <h4 className="h4">{totalPrice} BYN</h4>
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
