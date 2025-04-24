'use client';
import { FeedbackForm } from '@/entities/feedback-form';
import { SharesSection } from '@/widgets/shares-section';

export default function Shares() {
  return (
    <main>
      <SharesSection />
      <FeedbackForm />
    </main>
  );
}
