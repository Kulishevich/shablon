'use client';
import { FeedbackForm } from '@/entities/feedback-form';
import s from './page.module.scss';
import { SalesSecton } from '@/widgets/sales-section';

export default function Sales() {
  return (
    <div className={s.page}>
      <SalesSecton />
      <FeedbackForm />
    </div>
  );
}
