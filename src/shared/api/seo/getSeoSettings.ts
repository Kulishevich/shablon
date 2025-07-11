import { SeoSettingsT } from './types';

export const getSeoSettings = async (): Promise<SeoSettingsT | null> => {
  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/seo/settings`, {
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
