import { OrderPostT, OrderResponse } from './types';
import { getApiUrl } from '../base';

export const postOrder = async (reqData: OrderPostT): Promise<OrderResponse> => {
  const apiUrl = await getApiUrl();
  const res = await fetch(`${apiUrl}/v1/orders`, {
    method: 'POST',
    body: JSON.stringify(reqData),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  if (!res.ok) {
    throw new Error('Ошибка при отправке формы обратной связи');
  }

  const { data } = await res.json();

  return data;
};
