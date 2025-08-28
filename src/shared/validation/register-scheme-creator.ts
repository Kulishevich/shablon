import { checkedScheme, emailScheme, nameScheme, passwordScheme, phoneScheme } from '@/shared/validation/validation';
import { z } from 'zod';

export const RegisterFormScheme = () => {
  return z.object({
    firstName: nameScheme(),
    lastName: nameScheme(),
    phone: phoneScheme(),
    email: emailScheme(),
    password: passwordScheme(),
    checked: checkedScheme(),
  });
};
