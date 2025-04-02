'use client';
import { FeedbackForm } from '@/entities/feedback-form';
import { OtherShares } from '@/widgets/other-shares';
import { ShareInfo } from '@/widgets/share-info';
import s from './page.module.scss';

export default function Share() {
  return (
    <div className={s.page}>
      <ShareInfo />
      <OtherShares />
      <FeedbackForm />
    </div>
  );
}
