import React from 'react';
import Image from 'next/image';
import { ReviewT } from '@/shared/api/reviews/types';
import clsx from 'clsx';
import { StarIcon } from '@/shared/assets';
import s from './ReviewContent.module.scss';

export const ReviewContent = ({
  author_name,
  author_photo,
  rating,
  created_at,
  title,
  review_text,
  is_card = false,
}: ReviewT & {
  is_card?: boolean;
}) => {
  return (
    <>
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
        <p className={clsx('body_4', is_card && s.textClamp)}>{review_text}</p>
      </div>
    </>
  );
};
