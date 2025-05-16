import React from 'react';
import s from './ReviewCard.module.scss';
import Image from 'next/image';
import clsx from 'clsx';
import { ArrowRightUpIcon, StarIcon } from '@/shared/assets';
import { Button } from '@/shared/ui/button';
import { ReviewT } from '@/shared/api/reviews/types';

export const ReviewCard = ({
  author_name,
  author_photo,
  rating,
  created_at,
  title,
  review_text,
}: ReviewT) => {
  return (
    <div className={s.container}>
      <div className={s.head}>
        <div className={s.imageContainer}>
          <Image src={`${process.env.NEXT_PUBLIC_STORE_URL}/${author_photo}`} fill alt="profile" />
        </div>
        <div className={s.nameContainer}>
          <p className="body_3">{author_name}</p>
          <span className={clsx(s.date, 'tag')}>{new Date(created_at).toLocaleDateString()}</span>
        </div>
      </div>

      <div className={s.startRating}>
        {new Array(rating).fill('').map((_, index) => (
          <StarIcon key={index} />
        ))}
      </div>

      <div className={s.textContainer}>
        <h5 className="h5">{title}</h5>
        <p className="body_4">{review_text}</p>
      </div>

      <Button variant="link">
        Читать весь отзыв
        <ArrowRightUpIcon />
      </Button>
    </div>
  );
};
