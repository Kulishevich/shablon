import { checkedScheme, emailScheme, nameScheme, phoneScheme } from '@/shared/validation/validation';
import { z } from 'zod';

export const RegisterFormScheme = () => {
  return z.object({
    firstName: nameScheme(),
    lastName: nameScheme(),
    phone: phoneScheme(),
    email: emailScheme(),
    password: z
      .string()
      .min(1, 'Пароль обязателен')
      .min(6, 'Пароль должен содержать минимум 6 символов'),
    checked: checkedScheme(),
  });
};
