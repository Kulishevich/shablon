import { getDeliveryMethods } from '@/shared/api/delivery-methods/getDeliveryMethods';
import { getPaymentMethods } from '@/shared/api/payment-methods/getPaymentMethods';
import { OrderSection } from '@/widgets/order-section';

export default async function Order() {
  const paymentMethods = await getPaymentMethods();
  const deliveryMethods = await getDeliveryMethods();

  return (
    <main>
      <OrderSection paymentMethods={paymentMethods} deliveryMethods={deliveryMethods} />
    </main>
  );
}
