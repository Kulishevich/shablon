import { emailScheme, nameScheme, phoneScheme } from '@/shared/validation/validation';
import { z } from 'zod';

export const ProfileInfoFormScheme = () => {
  return z.object({
    firstName: nameScheme(),
    lastName: nameScheme(),
    phone: phoneScheme(),
    email: emailScheme(),
  });
};
