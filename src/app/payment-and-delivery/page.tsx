import { Feedback } from '@/widgets/feedback/Feedback';
import { getSetting } from '@/shared/api/design/getSetting';
import { DeliverySection } from '@/widgets/delivery-section';
import { SeoBlock } from '@/entities/seo-block';
import { getContacts } from '@/shared/api/design/getContacts';
export default async function PaymentAndDelivery() {
  const setting = await getSetting();
  const contacts = await getContacts();
  return (
    <main>
      <DeliverySection content={setting?.delivery_payment} contacts={contacts} />
      <SeoBlock page="/payment-and-delivery" />
      <Feedback />
    </main>
  );
}
