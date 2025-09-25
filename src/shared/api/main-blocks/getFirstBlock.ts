import { FirstBlockT } from './types';
import { getApiUrl } from '../base';

export const getFirstBlock = async (): Promise<FirstBlockT | null> => {
  try {
    const apiUrl = await getApiUrl();
    const res = await fetch(`${apiUrl}/v1/content-pages/pervyi-blok`, {
      next: {
        revalidate: 60,
      },
    });

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);

    return null;
  }
};
