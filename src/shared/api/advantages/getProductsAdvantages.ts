import { ProductAdvantageType } from './types';
import { getApiUrl } from '../base';

export const getProductsAdvantages = async (): Promise<ProductAdvantageType[] | null> => {
  try {
    const apiUrl = await getApiUrl();
    const res = await fetch(`${apiUrl}/v1/product-advantages`, {
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
