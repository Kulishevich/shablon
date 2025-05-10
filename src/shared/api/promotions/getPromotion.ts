import { PromotionsResponse, PromotionT } from './types';

export const getPromotion = async (id: string): Promise<PromotionT | null> => {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/v1/promotions/${id}`;

    const res = await fetch(url);

    const { data } = await res.json();

    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
