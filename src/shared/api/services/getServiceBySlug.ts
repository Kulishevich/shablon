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

    data.blocks = data.blocks?.map((block: any) => {
      if (block.type == 'features4') {
        return {
          ...block,
          ...JSON.parse(block.text),
        };
      }

      if (block.type == 'images3') {
        return {
          ...block,
          ...JSON.parse(block.text),
        };
      }

      return block;
    });

    return data;
  } catch (err) {
    console.error(err);

    return null;
  }
};
