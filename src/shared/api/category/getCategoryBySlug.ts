import { CategoryT } from './types';

export const getCategoryBySlug = async (
  slug: string
): Promise<CategoryT | null> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/categories/slug/${slug}`, {
      next: {
        revalidate: 60,
      }
    }
    );

    const { data } = await res.json();

    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
