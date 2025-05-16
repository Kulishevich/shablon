import { PhotoT } from './types';

export const getPhotos = async (): Promise<PhotoT[] | null> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/photos`);

    const { data } = await res.json();

    return data;
  } catch (err) {
    console.error(err);

    return null;
  }
};
