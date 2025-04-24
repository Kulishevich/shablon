'use client';
import React, { useState } from 'react';
import s from './OrderForm.module.scss';
import { TextField } from '@/shared/ui/text-field';
import { DeliveryCard } from '@/entities/delivery-card';
import { Button } from '@/shared/ui/button';
import {
  ArrowRightUpIcon,
  CashIcon,
  CreditCardIcon,
  EripIcon,
  MasterCardIcon,
  VisaIcon,
} from '@/shared/assets';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';
import { TextArea } from '@/shared/ui/text-area';
import { PaymentMethodCard } from '@/entities/payment-method-card';
import Image from 'next/image';

const deliveryTypes = [
  {
    id: 1,
    title: 'Самовывоз',
    description: 'В рабочее время пункта выдачи',
    price: 0,
  },
  {
    id: 2,
    title: 'Экспресс-доставка',
    description: 'В рабочее время пункта выдачи',
    price: 40,
  },
  {
    id: 3,
    title: 'Обычная доставка',
    description: 'В течение 3 дней',
    price: 20,
  },
];

const paymentMethod = [
  {
    id: 1,
    title: 'Оплата картой онлайн',
    icons: [
      <MasterCardIcon />,
      <VisaIcon />,
      <Image src="/belcard.png" width={30} height={33} alt="belcard" />,
    ],
  },
  {
    id: 2,
    title: 'Оплата через ЕРИП',
    icons: [<EripIcon />],
  },
  {
    id: 3,
    title: 'Оплата картой в пункте выдачи',
    icons: [<CreditCardIcon />],
  },
  {
    id: 4,
    title: 'Оплата наличными в пункте выдачи',
    icons: [<CashIcon />],
  },
];

export const OrderForm = () => {
  const [activeDelivery, setActiveDelivery] = useState(deliveryTypes[0].id);
  const [activePaymentMethod, setActivePaymentMethod] = useState(
    paymentMethod[0].id
  );

  return (
    <div className={s.container}>
      <div className={s.elem}>
        <div className={s.title}>
          <span className="h6">1</span>
          <p className="h3">Укажите ваши контакты</p>
        </div>
        <div className={s.contacts}>
          <TextField placeholder="Имя" label="Имя" isRequired />
          <TextField placeholder="Телефон" label="Телефон" isRequired />
          <TextField placeholder="Фамилия" label="Фамилия" isRequired />
          <TextField placeholder="Email" label="Email" isRequired />
          <TextField
            placeholder="Отчество"
            label="Отчество(если есть)"
            isRequired
          />
        </div>
      </div>

      <div className={s.elem}>
        <div className={s.title}>
          <div>
            <span className="h6">2</span>
            <p className="h3">Выберите способ доставки</p>
          </div>
          <Button variant="link" as={Link} href={paths.payment_and_delivery}>
            О доставке <ArrowRightUpIcon />
          </Button>
        </div>
        <div className={s.delivery}>
          {deliveryTypes.map((item) => (
            <DeliveryCard
              {...item}
              key={item.id}
              active={activeDelivery === item.id}
              onClick={() => setActiveDelivery(item.id)}
            />
          ))}
        </div>
      </div>

      <div className={s.elem}>
        <div className={s.title}>
          <span className="h6">3</span>
          <p className="h3">Укажите адрес доставки</p>
        </div>
        <div className={s.address}>
          <TextField
            label="Адрес доставки"
            placeholder="Введите адрес доставки"
            isRequired
          />
          <TextArea
            label="Комментарий"
            placeholder="Комментарий"
            className={s.textarea}
          />
        </div>
      </div>

      <div className={s.elem}>
        <div className={s.title}>
          <span className="h6">4</span>
          <p className="h3">Способ оплаты</p>
        </div>
        <div className={s.paymentMethod}>
          {paymentMethod.map((item) => (
            <PaymentMethodCard
              {...item}
              key={item.id}
              active={activePaymentMethod === item.id}
              onClick={() => setActivePaymentMethod(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
