import { CheckPromocodeT } from './type';

export const checkPromocode = async (reqData: CheckPromocodeT) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/promo-codes/check`, {
    method: 'POST',
    body: JSON.stringify(reqData),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    next: {
      revalidate: 60,
    }
  });
  if (!res.ok) {
    throw new Error('Ошибка при отправке формы обратной связи');
  }

  const { data } = await res.json();

  return data;
};
