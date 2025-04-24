'use client';
import { FeedbackForm } from '@/entities/feedback-form';
import { ContactsSection } from '@/widgets/contacts-section';
import { CompanyDetails } from '@/widgets/company-details';

export default function Contacts() {
  return (
    <main>
      <ContactsSection />
      <CompanyDetails />
      <FeedbackForm />
    </main>
  );
}
