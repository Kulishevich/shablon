import { z } from 'zod';

export const PasswordChangeFormScheme = () => {
  return z.object({
    password: z
      .string()
      .min(1, 'Пароль обязателен')
      .min(6, 'Пароль должен содержать минимум 6 символов'),

    newPassword: z
      .string()
      .min(1, 'Пароль обязателен')
      .min(6, 'Пароль должен содержать минимум 6 символов'),

  });
};
