import { CardsBlockT } from './types';
import { getApiUrl } from '../base';

export const getCardsBlock = async (): Promise<CardsBlockT | null> => {
  try {
    const apiUrl = await getApiUrl();
    const res = await fetch(`${apiUrl}/v1/content-pages/blok-s-4-plitkami`, {
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
