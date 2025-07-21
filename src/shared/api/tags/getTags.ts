import { getApiBaseUrl } from '@/shared/lib/utils/getBaseUrl';
import { TagT } from './types';

export const getTags = async ({ variant }: { variant?: string }): Promise<TagT[] | null> => {
  try {
    const res = await fetch(`${getApiBaseUrl(variant)}/v1/tags`, {
      next: {
        revalidate: 60,
      },
    });

    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
