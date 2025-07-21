import { Feedback } from '@/widgets/feedback/Feedback';
import { DeliverySection } from '@/widgets/delivery-section';
import { SeoBlock } from '@/entities/seo-block';
import { cookies } from 'next/headers';
import { getDeliveryAndPayment } from '@/shared/api/delivery-and-payment/getDeliveryPayment';

export default async function PaymentAndDelivery() {
  const cookieStore = await cookies();
  const variant = cookieStore.get('variant')?.value;

  const content = await getDeliveryAndPayment({ variant });

  return (
    <main>
      <DeliverySection content={content} />
      <SeoBlock page="/payment-and-delivery" />
      <Feedback variant={variant} />
    </main>
  );
}
