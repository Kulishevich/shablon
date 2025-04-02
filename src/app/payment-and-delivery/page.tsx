'use client';
import { FeedbackForm } from '@/entities/feedback-form';
import s from './page.module.scss';
import { DeliverySection } from '@/widgets/delivery-section';

export default function PaymentAndDelivery() {
  return (
    <div className={s.page}>
      <DeliverySection />
      <FeedbackForm />
    </div>
  );
}
