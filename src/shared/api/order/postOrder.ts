import { OrderPostT } from './types';

export const postOrder = async (reqData: OrderPostT) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/orders`, {
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

  const data = await res.json();

  return data;
};
