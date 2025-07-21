import { Feedback } from '@/widgets/feedback/Feedback';
import { getSetting } from '@/shared/api/design/getSetting';
import { DeliverySection } from '@/widgets/delivery-section';
import { SeoBlock } from '@/entities/seo-block';
import { getContacts } from '@/shared/api/design/getContacts';
import { cookies } from 'next/headers';

export default async function PaymentAndDelivery() {
  const cookieStore = await cookies();
  const variant = cookieStore.get('variant')?.value;

  const setting = await getSetting({ variant });
  const contacts = await getContacts({ variant });
  return (
    <main>
      <DeliverySection content={setting?.delivery_payment} contacts={contacts} />
      <SeoBlock page="/payment-and-delivery" />
      <Feedback variant={variant} />
    </main>
  );
}
