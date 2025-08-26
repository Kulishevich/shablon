import { ServiceT } from './types';
import { getApiUrl } from '../base';

export const getServiceBySlug = async ({
  slug,
}: {
  slug: string;
}): Promise<ServiceT | null> => {
  try {
    const apiUrl = await getApiUrl();
    const res = await fetch(`${apiUrl}/v1/services/slug/${slug}`, {
      next: {
        revalidate: 60,
      },
    });

    const { data } = await res.json();

    return data;
  } catch (err) {
    console.error(err);

    return null;
  }
};
