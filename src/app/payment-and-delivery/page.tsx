import { Feedback } from '@/entities/feedback/Feedback';
import { DeliverySection } from '@/widgets/delivery-section';

export default function PaymentAndDelivery() {
  return (
    <main>
      <DeliverySection />
      <Feedback />
    </main>
  );
}
