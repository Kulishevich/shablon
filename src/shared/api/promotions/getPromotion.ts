import { PromotionsResponse, PromotionT } from './types';

export const getPromotion = async (slug: string): Promise<PromotionT | null> => {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/v1/promotions/slug/${slug}`;

    const res = await fetch(url, {
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
