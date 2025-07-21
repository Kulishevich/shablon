import React from 'react';
import s from './Feedback.module.scss';
import { FeedbackForm } from '../../entities/feedback-form';
import { getSetting } from '@/shared/api/design/getSetting';
import { FeedbackImage } from '@/entities/feedback-image';
import { cookies } from 'next/headers';

export const Feedback = async () => {
  const cookieStore = await cookies();
  const variant = cookieStore.get('variant')?.value;
  const setting = await getSetting({ variant });

  return (
    <div className={s.container}>
      <FeedbackImage image={setting?.feedback_image || ''} />
      <FeedbackForm />
    </div>
  );
};
