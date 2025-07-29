import { SeoSettingsT } from './types';
import { getApiUrl } from '../base';

export const getSeoSettings = async (): Promise<SeoSettingsT | null> => {
  try {
    const apiUrl = await getApiUrl();
    const data = await fetch(`${apiUrl}/v1/seo/settings`, {
      next: {
        revalidate: 60,
      },
    });

    const res = await data.json();

    return res;
  } catch (err) {
    return null;
  }
};
