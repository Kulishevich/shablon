import React from 'react';
import s from './ReviewCard.module.scss';
import { ReviewT } from '@/shared/api/reviews/types';
import { ReviewPopup } from '../review-popup';
import { ReviewContent } from '../review-content';

export const ReviewCard = (props: ReviewT) => {
  return (
    <div className={s.container}>
      <ReviewContent {...props} is_card />
      <ReviewPopup {...props} />
    </div>
  );
};
