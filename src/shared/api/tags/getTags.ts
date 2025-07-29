import { TagT } from './types';
import { getApiUrl } from '../base';

export const getTags = async (): Promise<TagT[] | null> => {
  try {
    const apiUrl = await getApiUrl();
    const res = await fetch(`${apiUrl}/v1/tags`, {
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
