import React from 'react';
import Image from 'next/image';
import { ReviewT } from '@/shared/api/reviews/types';
import clsx from 'clsx';
import { StarIcon } from '@/shared/assets';
import s from './ReviewContent.module.scss';
import Cookies from 'js-cookie';
import { getStoreBaseUrl } from '@/shared/lib/utils/getBaseUrl';

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
  const variant = Cookies.get('variant');

  return (
    <>
      <div className={s.head}>
        <div className={s.imageContainer}>
          <Image src={`${getStoreBaseUrl(variant)}/${author_photo}`} fill alt="profile" />
        </div>
        <div className={s.nameContainer}>
          <p className="body_3" itemProp="author">
            {author_name}
          </p>
          <span className={clsx(s.date, 'tag')} itemProp="datePublished">
            {new Date(created_at).toLocaleDateString()}
          </span>
        </div>
      </div>

      <div className={s.startRating} itemProp="reviewRating">
        {new Array(5).fill('').map((_, index) => (
          <StarIcon key={index} className={clsx(index < rating && s.active)} />
        ))}
      </div>

      <div className={s.textContainer}>
        <h3 className="h5" itemProp="name">
          {title}
        </h3>
        <p className={clsx('body_4', is_card && s.textClamp)} itemProp="reviewBody">
          {review_text}
        </p>
      </div>
    </>
  );
};
