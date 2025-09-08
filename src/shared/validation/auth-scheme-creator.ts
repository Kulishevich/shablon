import { phoneScheme } from '@/shared/validation/validation';
import { z } from 'zod';

export const AuthFormScheme = () => {
  return z.object({
    phone: phoneScheme(),
    password: z
      .string()
      .min(1, 'Пароль обязателен')
      .min(6, 'Пароль должен содержать минимум 6 символов'),
  });
};
