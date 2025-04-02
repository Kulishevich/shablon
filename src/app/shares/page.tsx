'use client';
import { FeedbackForm } from '@/entities/feedback-form';
import s from './page.module.scss';
import { SharesSection } from '@/widgets/shares-section';

export default function Shares() {
  return (
    <div className={s.page}>
      <SharesSection />
      <FeedbackForm />
    </div>
  );
}
