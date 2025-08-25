import { AdvantageType } from './types';
import { getApiUrl } from '../base';

export const getAdvantages = async (): Promise<AdvantageType[] | null> => {
  try {
    const apiUrl = await getApiUrl();
    const res = await fetch(`${apiUrl}/v1/advantages`, {
      next: {
        revalidate: 60,
      }
    });

    const { data } = await res.json();

    return data;
  } catch (err) {
    console.error(err);

    return null;
  }
};
