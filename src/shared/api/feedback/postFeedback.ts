import { FeedbackPostT } from './types';
import { getApiUrl } from '../base';

export const postFeedback = async (reqData: FeedbackPostT) => {
  const apiUrl = await getApiUrl();
  const res = await fetch(`${apiUrl}/v1/feedback`, {
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
