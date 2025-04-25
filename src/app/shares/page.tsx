'use client';
import { FeedbackForm } from '@/entities/feedback-form';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { SharesSection } from '@/widgets/shares-section';

export default function Shares() {
  return (
    <>
      <Breadcrumbs />
      <main>
        <SharesSection />
        <FeedbackForm />
      </main>
    </>
  );
}
