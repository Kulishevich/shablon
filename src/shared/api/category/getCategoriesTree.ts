import { CategoryT } from './types';
import { getApiUrl } from '../base';

export const getCategoriesTree = async (): Promise<CategoryT[] | null> => {
  try {
    const apiUrl = await getApiUrl();
    const res = await fetch(`${apiUrl}/v1/categories/tree?with_products_count=true`, {
      next: {
        revalidate: 60,
      }
    });

    const { data } = await res.json();

    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
