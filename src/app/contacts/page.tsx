import { ContactsSection } from '@/widgets/contacts-section';
import { CompanyDetails } from '@/widgets/company-details';
import { getContacts } from '@/shared/api/design/getContacts';
import { SeoBlock } from '@/entities/seo-block';
import { Feedback } from '@/widgets/feedback/Feedback';

export default async function Contacts() {
  const contacts = await getContacts();

  return (
    <main>
      <ContactsSection contacts={contacts} />
      <CompanyDetails contacts={contacts} />
      <SeoBlock page="/contacts" />
      <Feedback />
    </main>
  );
}
