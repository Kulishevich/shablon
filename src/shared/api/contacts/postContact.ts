import { RequestDataT } from './types';

export const postContact = async (reqData: RequestDataT) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/contact`,
      {
        method: 'POST',
        body: JSON.stringify(reqData),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message);
    }

    return responseData;
  } catch (err) {
    console.error(err);
    throw new Error('Ошибка отправка формы');
  }
};
