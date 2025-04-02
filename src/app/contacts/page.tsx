'use client';
import { FeedbackForm } from '@/entities/feedback-form';
import s from './page.module.scss';
import { ContactsSection } from '@/widgets/contacts-section';
import { CompanyDetails } from '@/widgets/company-details';

export default function Contacts() {
  return (
    <div className={s.page}>
      <ContactsSection />
      <CompanyDetails />
      <FeedbackForm />
    </div>
  );
}
