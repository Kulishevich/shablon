import React, { Dispatch, SetStateAction, useState } from 'react';
import s from './CartPrice.module.scss';
import { TextField } from '@/shared/ui/text-field';
import { Button } from '@/shared/ui/button';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';
import { showToast } from '@/shared/ui/toast';
import { checkCartPriceWitchPromocode } from '@/shared/api/promocode/checkCartPriceWitchPromocode.ts';
import { useDispatch } from 'react-redux';
import { CartProduct, clearPromocode, setPromocode } from '@/shared/lib/redux/slices/cartSlice';

export type CartPriceProps = {
  productsCart: CartProduct[];
  promocode: string;
  priceWithOutDiscount: number;
  priceWithDiscount: number;
  setProductsState: Dispatch<SetStateAction<CartProduct[]>>;
  setPromocodeDiscount: Dispatch<SetStateAction<number>>;
};

export const CartPrice = ({
  productsCart,
  promocode,
  priceWithOutDiscount,
  priceWithDiscount,
  setProductsState,
  setPromocodeDiscount,
}: CartPriceProps) => {
  const [promocodeState, setPromocodeState] = useState<string>(promocode || '');

  const dispatch = useDispatch();

  const handleCheckPromocode = async () => {
    try {
      const res = await checkCartPriceWitchPromocode({
        code: promocodeState,
        products: productsCart.map((elem) => ({ id: elem.id, quantity: elem.quantity })),
      });
      if (Number(res.min_order_amount) <= priceWithOutDiscount) {
        if (res.type === 'percentage') {
          showToast({ variant: 'success', title: 'Промокод активирован' });
          dispatch(setPromocode(promocodeState));
          setProductsState(
            productsCart.map((product) => ({
              ...product,
              discount:
                res.products.find((elem) => elem.id === product.id)?.best_discount_percent || '',
            }))
          );
        } else {
          showToast({ variant: 'success', title: 'Промокод активирован' });
          dispatch(setPromocode(promocodeState));
          setPromocodeDiscount(+res.value);
        }
      } else {
        showToast({ variant: 'error', title: 'Сумма в вашей корзине меньше нужной' });
        dispatch(clearPromocode());
      }
    } catch (err) {
      showToast({ variant: 'error', title: 'Промокод не действителен' });
      dispatch(clearPromocode());
      console.log(err);
    }
  };

  return (
    <div className={s.container}>
      <div className={s.promocode}>
        <TextField
          className={s.input}
          placeholder="Промокод"
          value={promocodeState}
          onChange={(e) => setPromocodeState(e.target.value)}
        />
        <Button variant="secondary" onClick={handleCheckPromocode}>
          Применить
        </Button>
      </div>
      <div className={s.price}>
        <div className={s.elem}>
          <p className="body_7">Стоимость товаров без скидки</p>
          <h5 className="h5">{priceWithOutDiscount} BYN</h5>
        </div>
        <div className={s.elem}>
          <p className="body_7">Скидка</p>
          <h5 className="h5">{priceWithOutDiscount - priceWithDiscount} BYN</h5>
        </div>
        <div className={s.elem}>
          <p className="body_7">Стоимость доставки</p>
          <h5 className="h5">При оформлении</h5>
        </div>
      </div>
      <div className={s.elem}>
        <h5 className="h5">Итого</h5>
        <h3 className="h3">{priceWithDiscount} BYN</h3>
      </div>
      {productsCart.length ? (
        <Button as={Link} href={`${paths.cart}${paths.order}`} className={s.button}>
          К оформлению
        </Button>
      ) : (
        <Button className={s.button} disabled>
          К оформлению
        </Button>
      )}
    </div>
  );
};
