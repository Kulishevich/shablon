'use client';
import { FeedbackForm } from '@/entities/feedback-form';
import { DeliverySection } from '@/widgets/delivery-section';

export default function PaymentAndDelivery() {
  return (
    <main>
      <DeliverySection />
      <FeedbackForm />
    </main>
  );
}
