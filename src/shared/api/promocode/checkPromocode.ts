import { CheckPromocodeT } from './type';
import { getApiUrl } from '../base';

export const checkPromocode = async (reqData: CheckPromocodeT) => {
  const apiUrl = await getApiUrl();
  const res = await fetch(`${apiUrl}/v1/promo-codes/check`, {
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
