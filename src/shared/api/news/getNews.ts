import { NewsT } from './types';

export const getNews = async (slug: string): Promise<NewsT | null> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/news/slug/${slug}`);

    const { data } = await res.json();

    return data;
  } catch (err) {
    console.error(err);

    return null;
  }
};
