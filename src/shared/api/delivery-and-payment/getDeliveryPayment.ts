import { PaymentAndDeliveryT } from './types';
import { getApiUrl } from '../base';

export const getDeliveryAndPayment = async (): Promise<PaymentAndDeliveryT[] | null> => {
  try {
    const apiUrl = await getApiUrl();
    const res = await fetch(`${apiUrl}/v1/delivery-payment-blocks`, {
      next: {
        revalidate: 60,
      },
    });

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
