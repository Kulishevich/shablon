import { TagT } from './types';

export const getTags = async (): Promise<TagT[] | null> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/tags`, {
      next: {
        revalidate: 60,
      }
    });


    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
