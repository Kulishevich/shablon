import { z } from 'zod';
import { validation } from './validation.errors';
import { emailScheme, phoneScheme, nameScheme, checkedScheme } from './validation';

// Схема для авторизации
export const loginScheme = () =>
  z.object({
    email: emailScheme(),
    password: z
      .string()
      .min(6, { message: validation.minLength })
      .max(50, { message: validation.maxLength }),
    rememberMe: z.boolean().optional(),
  });

// Схема для регистрации
export const registerScheme = () =>
  z
    .object({
      firstName: nameScheme(),
      lastName: nameScheme(),
      email: emailScheme(),
      phone: phoneScheme(),
      password: z
        .string()
        .min(6, { message: validation.minLength })
        .max(50, { message: validation.maxLength })
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, {
          message: 'Пароль должен содержать как минимум одну заглавную букву, одну строчную букву и одну цифру',
        }),
      confirmPassword: z
        .string()
        .min(6, { message: validation.minLength }),
      agreeToTerms: checkedScheme(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'Пароли не совпадают',
      path: ['confirmPassword'],
    });

// Схема для восстановления пароля
export const forgotPasswordScheme = () =>
  z.object({
    email: emailScheme(),
  });

// Схема для сброса пароля
export const resetPasswordScheme = () =>
  z
    .object({
      token: z.string().min(1, { message: validation.requiredField }),
      password: z
        .string()
        .min(6, { message: validation.minLength })
        .max(50, { message: validation.maxLength })
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, {
          message: 'Пароль должен содержать как минимум одну заглавную букву, одну строчную букву и одну цифру',
        }),
      confirmPassword: z
        .string()
        .min(6, { message: validation.minLength }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'Пароли не совпадают',
      path: ['confirmPassword'],
    });

// Схема для редактирования профиля
export const updateProfileScheme = () =>
  z.object({
    firstName: nameScheme(),
    lastName: nameScheme(),
    email: emailScheme(),
    phone: phoneScheme(),
  });

// Схема для смены пароля (для будущего использования)
export const changePasswordScheme = () =>
  z
    .object({
      currentPassword: z
        .string()
        .min(1, { message: validation.requiredField }),
      newPassword: z
        .string()
        .min(6, { message: validation.minLength })
        .max(50, { message: validation.maxLength })
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, {
          message: 'Пароль должен содержать как минимум одну заглавную букву, одну строчную букву и одну цифру',
        }),
      confirmNewPassword: z
        .string()
        .min(6, { message: validation.minLength }),
    })
    .refine((data) => data.newPassword === data.confirmNewPassword, {
      message: 'Пароли не совпадают',
      path: ['confirmNewPassword'],
    })
    .refine((data) => data.currentPassword !== data.newPassword, {
      message: 'Новый пароль должен отличаться от текущего',
      path: ['newPassword'],
    });



// Типы для TypeScript
export type LoginFormData = z.infer<ReturnType<typeof loginScheme>>;
export type RegisterFormData = z.infer<ReturnType<typeof registerScheme>>;
export type ForgotPasswordFormData = z.infer<ReturnType<typeof forgotPasswordScheme>>;
export type ResetPasswordFormData = z.infer<ReturnType<typeof resetPasswordScheme>>;
export type UpdateProfileFormData = z.infer<ReturnType<typeof updateProfileScheme>>;
export type ChangePasswordFormData = z.infer<ReturnType<typeof changePasswordScheme>>;

