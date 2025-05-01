import { SeoT } from './types';

export const getSeoTag = async (tag: string): Promise<SeoT | null> => {
  try {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/seo/tag?name=${tag}`
    );

    const res = await data.json();

    return res;
  } catch (err) {
    return null;
  }
};
