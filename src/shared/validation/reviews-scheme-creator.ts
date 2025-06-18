import {
  checkedScheme,
  commentScheme,
  nameScheme,
  phoneScheme,
  titleScheme,
  ratingScheme,
  imageFileScheme,
} from '@/shared/validation/validation';
import { z } from 'zod';

export const ReviewsFormScheme = () => {
  return z.object({
    name: nameScheme(),
    phone: phoneScheme(),
    title: titleScheme(),
    comment: commentScheme(),
    rating: ratingScheme(),
    photo: imageFileScheme(),
    checked: checkedScheme(),
  });
};
