import { ProductT } from './types';

export const getPopularProducts = async (): Promise<ProductT[] | null> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/products/popular`, {
      next: {
        revalidate: 60,
      }
    }
    );

    const { data } = await res.json();

    return data;
  } catch (err) {
    console.error(err);

    return null;
  }
};
