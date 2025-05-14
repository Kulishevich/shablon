import {
  addressScheme,
  checkedScheme,
  commentScheme,
  emailScheme,
  nameScheme,
  phoneScheme,
} from '@/shared/validation/validation';
import { z } from 'zod';

export const orderFormSchema = z.object({
  name: nameScheme(),
  surname: nameScheme(),
  patronymic: nameScheme(),
  phone: phoneScheme(),
  email: emailScheme(),
  delivery_method_id: z
    .number({
      required_error: 'Выберите способ доставки',
      invalid_type_error: 'Некорректный способ доставки',
    })
    .int()
    .min(1, 'Выберите способ доставки'),
  address: addressScheme(),
  comment: commentScheme(),
  payment_method_id: z
    .number({
      required_error: 'Выберите способ оплаты',
      invalid_type_error: 'Некорректный способ оплаты',
    })
    .int()
    .min(1, 'Выберите способ оплаты'),
  checked: checkedScheme(),
});
