import { FirstBlockT } from './types';
import { getApiUrl } from '../base';

export const getThirdBlock = async (): Promise<FirstBlockT | null> => {
  try {
    const apiUrl = await getApiUrl();
    const res = await fetch(`${apiUrl}/v1/content-pages/tretii-blok`, {
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
