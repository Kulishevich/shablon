import { SeoT } from './types';
import { getApiUrl } from '../base';

export const getSeoTag = async (tag: string): Promise<SeoT | null> => {
  try {
    const apiUrl = await getApiUrl();
    const data = await fetch(`${apiUrl}/v1/seo/tag?name=${tag}`, {
      next: {
        revalidate: 60,
      },
    });

    const res = await data.json();

    return res;
  } catch (err) {
    return null;
  }
};
