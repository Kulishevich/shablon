import { Feedback } from '@/widgets/feedback/Feedback';
import { getSetting } from '@/shared/api/design/getSetting';
import { DeliverySection } from '@/widgets/delivery-section';

export default async function PaymentAndDelivery() {
  const setting = await getSetting();

  return (
    <main>
      <DeliverySection content={setting?.delivery_payment} />
      <Feedback />
    </main>
  );
}
