import { NewsT } from './types';
import { getApiUrl } from '../base';

export const getNews = async (slug: string): Promise<NewsT | null> => {
  try {
    const apiUrl = await getApiUrl();
    const res = await fetch(`${apiUrl}/v1/news/slug/${slug}`, {
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
