import React from 'react';
import s from './Feedback.module.scss';
import { FeedbackForm } from '../../entities/feedback-form';
import { getSetting } from '@/shared/api/design/getSetting';
import { FeedbackImage } from '@/entities/feedback-image';
import { getStoreUrl } from '@/shared/api/base';

export const Feedback = async () => {
  const setting = await getSetting();
  const storeUrl = await getStoreUrl();

  return (
    <div className={s.container}>
      <FeedbackImage image={`${storeUrl}/${setting?.feedback_image}`} />
      <FeedbackForm />
    </div>
  );
};
