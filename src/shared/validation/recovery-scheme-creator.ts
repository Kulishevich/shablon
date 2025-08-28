import { emailScheme } from '@/shared/validation/validation';
import { z } from 'zod';

export const RecoveryFormScheme = () => {
  return z.object({
    email: emailScheme(),
  });
};
