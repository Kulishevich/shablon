import { ReviewCard } from '@/entities/review-card';
import { SliderWrapper } from '@/entities/slider-wrapper';
import { ReviewT } from '@/shared/api/reviews/types';
import React from 'react';

export const ReviewsSection = ({ reviews }: { reviews: ReviewT[] | null }) => {
  return (
    <SliderWrapper title="Отзывы" variant="news">
      {reviews?.map((review) => <ReviewCard key={review.id} {...review} />)}
    </SliderWrapper>
  );
};
