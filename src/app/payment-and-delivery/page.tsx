import { Feedback } from '@/widgets/feedback/Feedback';
import { DeliverySection } from '@/widgets/delivery-section';
import { SeoBlock } from '@/entities/seo-block';
import { getDeliveryAndPayment } from '@/shared/api/delivery-and-payment/getDeliveryPayment';
import { getContacts } from '@/shared/api/design/getContacts';

export default async function PaymentAndDelivery() {
  const contacts = await getContacts();

  const content = await getDeliveryAndPayment();

  return (
    <main>
      <DeliverySection content={content} contacts={contacts} />
      <SeoBlock page="/payment-and-delivery" />
      <Feedback />
    </main>
  );
}
