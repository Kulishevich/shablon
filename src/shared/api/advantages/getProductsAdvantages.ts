import { ProductAdvantageType } from './types';

export const getProductsAdvantages = async (): Promise<ProductAdvantageType[] | null> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/product-advantages`, {
      next: {
        revalidate: 60,
      },
    });

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);

    return null;
  }
};
