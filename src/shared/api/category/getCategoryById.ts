import { CategoryT } from './types';

export const getCategoryById = async (
  id: string
): Promise<CategoryT | null> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/categories/${id}`
    );

    const { data } = await res.json();

    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
