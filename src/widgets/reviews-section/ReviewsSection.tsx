'use client';
import { ReviewCard } from '@/entities/review-card';
import { SliderWrapper } from '@/entities/slider-wrapper';
import { ReviewT } from '@/shared/api/reviews/types';
import React from 'react';

export const ReviewsSection = ({
  reviews,
  storeUrl,
}: {
  reviews: ReviewT[] | null;
  storeUrl: string;
}) => {
  return (
    !!reviews?.length && (
      <SliderWrapper title="Отзывы" variant="news" itemsCount={reviews?.length}>
        {reviews?.map((review) => (
          <ReviewCard key={review.id} review={review} storeUrl={storeUrl} />
        ))}
      </SliderWrapper>
    )
  );
};
