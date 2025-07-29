import { PaymentT } from './types';
import { getApiUrl } from '../base';

export const getPaymentMethods = async (): Promise<PaymentT[] | null> => {
  try {
    const apiUrl = await getApiUrl();
    const res = await fetch(`${apiUrl}/v1/payment-methods`, {
      next: {
        revalidate: 60,
      }
    });

    const { data } = await res.json();

    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
