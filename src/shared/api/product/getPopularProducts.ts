import { ProductT } from './types';
import { getApiUrl } from '../base';

export const getPopularProducts = async (): Promise<ProductT[] | null> => {
  try {
    const apiUrl = await getApiUrl();
    const res = await fetch(
      `${apiUrl}/v1/products/popular`, {
      next: {
        revalidate: 60,
      }
    }
    );

    const { data } = await res.json();

    return data;
  } catch (err) {
    console.error(err);

    return null;
  }
};
