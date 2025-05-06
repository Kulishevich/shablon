import { FeedbackForm } from '@/entities/feedback-form';
import { ContactsSection } from '@/widgets/contacts-section';
import { CompanyDetails } from '@/widgets/company-details';
import { getContacts } from '@/shared/api/design/getContacts';

export default async function Contacts() {
  const contacts = await getContacts();

  return (
    <main>
      <ContactsSection contacts={contacts} />
      <CompanyDetails contacts={contacts} />
      <FeedbackForm />
    </main>
  );
}
