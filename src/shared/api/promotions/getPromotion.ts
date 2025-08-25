import { PromotionT } from './types';
import { getApiUrl } from '../base';

export const getPromotion = async ({
  slug,
}: {
  slug: string;
}): Promise<PromotionT | null> => {
  try {
    const apiUrl = await getApiUrl();
    const url = `${apiUrl}/v1/promotions/slug/${slug}`;

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
