import { PaymentT } from './types';

export const getPaymentMethods = async (): Promise<PaymentT[] | null> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/payment-methods`);

    const { data } = await res.json();

    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
