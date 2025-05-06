import { ProductsResponseT, ProductT } from './types';

export const getProducts = async (): Promise<ProductsResponseT | null> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/products`);

    const { data } = await res.json();

    return data;
  } catch (err) {
    console.error(err);

    return null;
  }
};
