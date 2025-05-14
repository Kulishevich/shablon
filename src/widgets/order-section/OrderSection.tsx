'use client';
import React from 'react';
import { OrderForm } from '@/features/ordre-form';
import { OrderPrice } from '@/features/order-price';
import s from './OrderSection.module.scss';
import { FormProvider, useForm } from 'react-hook-form';
import { PaymentT } from '@/shared/api/payment-methods/types';
import { DeliveryT } from '@/shared/api/delivery-methods/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { orderFormSchema } from '@/shared/validation/order-scheme-creator';
import { postOrder } from '@/shared/api/order/postOrder';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/shared/lib/redux/store';
import { clearCart } from '@/shared/lib/redux/slices/cartSlice';
import SectionAnimationWrapper from '@/shared/ui/section/SectionAnimationWrapper';

export const OrderSection = ({
  paymentMethods,
  deliveryMethods,
}: {
  paymentMethods: PaymentT[] | null;
  deliveryMethods: DeliveryT[] | null;
}) => {
  const productsCart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const form = useForm({
    defaultValues: {
      name: '',
      surname: '',
      patronymic: '',
      phone: '',
      email: '',
      delivery_method_id: deliveryMethods?.[0]?.id,
      delivery_cost: Number(deliveryMethods?.[0]?.cost) || 0,
      address: '',
      comment: '',
      payment_method_id: paymentMethods?.[0]?.id,
      checked: false,
    },
    mode: 'onChange',
    reValidateMode: 'onBlur',
    resolver: zodResolver(orderFormSchema),
  });

  const onSubmit = form.handleSubmit(async (data) => {
    const { checked, name, surname, patronymic, delivery_cost, ...otherData } = data;
    const items = productsCart.map((product) => ({
      product_id: product.id,
      quantity: product.quantity,
    }));

    try {
      await postOrder({
        ...otherData,
        customer_name: `${name} ${surname} ${patronymic}`,
        items,
      });

      dispatch(clearCart());
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <SectionAnimationWrapper>
      <FormProvider {...form}>
        <div className={s.container}>
          <h1 className="h1">Оформление заказа</h1>
          <form onSubmit={onSubmit} className={s.content}>
            <OrderForm paymentMethods={paymentMethods} deliveryMethods={deliveryMethods} />
            <OrderPrice />
          </form>
        </div>
      </FormProvider>
    </SectionAnimationWrapper>
  );
};
