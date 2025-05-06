import { BannerT } from './types';

export const getBanners = async (): Promise<BannerT[] | null> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/banners`);

    const { data } = await res.json();

    return data;
  } catch (err) {
    console.error(err);

    return null;
  }
};
