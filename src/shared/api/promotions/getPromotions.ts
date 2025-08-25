import { PromotionsResponse } from './types';
import { getApiUrl } from '../base';

type GetPromotionsProps = {
  page?: string;
  per_page?: string;
};

export const getPromotions = async ({
  page = '1',
  per_page = '9',
}: GetPromotionsProps): Promise<PromotionsResponse | null> => {
  try {
    const params = new URLSearchParams();

    if (page) params.append('page', page);
    if (per_page) params.append('per_page', per_page);

    const apiUrl = await getApiUrl();
    const url = `${apiUrl}/v1/promotions?${params.toString()}`;

    const res = await fetch(url, {
      next: {
        revalidate: 60,
      },
    });

    const { data } = await res.json();

    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
