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
import { useSelector } from 'react-redux';
import { RootState } from '@/shared/lib/redux/store';

export const OrderSection = ({
  paymentMethods,
  deliveryMethods,
}: {
  paymentMethods: PaymentT[] | null;
  deliveryMethods: DeliveryT[] | null;
}) => {
  const productsCart = useSelector((state: RootState) => state.cart.items);

  const form = useForm({
    defaultValues: {
      name: '',
      surname: '',
      patronymic: '',
      phone: '',
      email: '',
      delivery_method_id: 1,
      address: '',
      comment: '',
      payment_method_id: 1,
      checked: false,
    },
    mode: 'onChange',
    reValidateMode: 'onBlur',
    resolver: zodResolver(orderFormSchema),
  });

  const onSubmit = form.handleSubmit(async (data) => {
    const { checked, name, surname, patronymic, ...otherData } = data;
    const items = productsCart.map((product) => ({
      product_id: product.id,
      quantity: product.quantity,
    }));

    try {
      const res = await postOrder({
        ...otherData,
        customer_name: `${name} ${surname} ${patronymic}`,
        items,
      });
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <FormProvider {...form}>
      <div className={s.container}>
        <h1 className="h1">Оформление заказа</h1>
        <form onSubmit={onSubmit} className={s.content}>
          <OrderForm />
          <OrderPrice />
        </form>
      </div>
    </FormProvider>
  );
};
