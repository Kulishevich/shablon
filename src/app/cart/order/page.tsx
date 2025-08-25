import { getDeliveryMethods } from '@/shared/api/delivery-methods/getDeliveryMethods';
import { getPaymentMethods } from '@/shared/api/payment-methods/getPaymentMethods';
import { ReduxProvider } from '@/shared/lib/redux/providers/ReduxProvider';
import { OrderSection } from '@/widgets/order-section';

export default async function Order() {
  const paymentMethods = await getPaymentMethods();
  const deliveryMethods = await getDeliveryMethods();

  return (
    <main>
      <ReduxProvider>
        <OrderSection paymentMethods={paymentMethods} deliveryMethods={deliveryMethods} />
      </ReduxProvider>
    </main>
  );
}
