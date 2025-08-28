import { passwordScheme, phoneScheme } from '@/shared/validation/validation';
import { z } from 'zod';

export const AuthFormScheme = () => {
  return z.object({
    phone: phoneScheme(),
    password: passwordScheme(),
  });
};
