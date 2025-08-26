import { FaqT } from './types';
import { getApiUrl } from '../base';

export const getFaq = async (): Promise<FaqT[] | null> => {
  try {
    const apiUrl = await getApiUrl();
    const res = await fetch(`${apiUrl}/v1/design/faq`, {
      next: {
        revalidate: 60,
      },
    });

    if (!res.ok) {
      return null;
    }

    const { data } = await res.json();


    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
