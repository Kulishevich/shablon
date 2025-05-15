import { Feedback } from '@/entities/feedback/Feedback';
import { getSetting } from '@/shared/api/design/getSetting';
import { DeliverySection } from '@/widgets/delivery-section';
import { SeoBlock } from '@/entities/seo-block';
export default async function PaymentAndDelivery() {
  const setting = await getSetting();

  return (
    <main>
      <DeliverySection content={setting?.delivery_payment} />
      <SeoBlock page="payment-and-delivery" />
      <Feedback />
    </main>
  );
}
