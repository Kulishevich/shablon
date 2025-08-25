import { ReviewT } from './types';
import { getApiUrl } from '../base';

export const getProductReview = async ({ productId }: { productId: string }): Promise<ReviewT[] | null> => {
  try {
    const apiUrl = await getApiUrl();
    const res = await fetch(`${apiUrl}/v1/products/${productId}/reviews`, {
      next: {
        revalidate: 60,
      },
    });

    const { data } = await res.json();

    return data;
  } catch (err) {
    console.error(err);

    return null;
  }
};
