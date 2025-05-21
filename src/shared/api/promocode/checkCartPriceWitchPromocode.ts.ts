import { PromocodeInCartT, PromocodeResponse } from './type';

export const checkCartPriceWitchPromocode = async (
  reqData: PromocodeInCartT
): Promise<PromocodeResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/promo-codes/calculate-for-products`,
    {
      method: 'POST',
      body: JSON.stringify(reqData),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }
  );
  if (!res.ok) {
    throw new Error('Ошибка при отправке формы обратной связи');
  }

  const { data } = await res.json();

  return data;
};
