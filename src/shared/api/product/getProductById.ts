import { ProductT } from './types';

export const getProductById = async (id: string): Promise<ProductT | null> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/products/${id}`
    );

    const { data } = await res.json();

    return data;
  } catch (err) {
    console.error(err);

    return null;
  }
};
