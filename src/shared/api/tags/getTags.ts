import { TagT } from './types';
import { getApiUrl } from '../base';

export const getTags = async ({ category }: { category?: string }): Promise<TagT[] | null> => {
  try {
    const categoryId = category ? `?category_id=${category}` : '';

    const apiUrl = await getApiUrl();
    const res = await fetch(`${apiUrl}/v1/tags${categoryId}`, {
      next: {
        revalidate: 60,
      },
    });


    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
