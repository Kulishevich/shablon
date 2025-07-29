import { SeoPageT } from "./types";
import { getApiUrl } from '../base';

export const getSeoPage = async (page: string): Promise<SeoPageT | null> => {
  try {
    const apiUrl = await getApiUrl();
    const data = await fetch(
      `${apiUrl}/v1/seo/text?page=${page}`, {
      next: {
        revalidate: 60,
      }
    }
    );

    const res = await data.json();

    if (!res.success) {
      return null;
    }

    return res;
  } catch (error) {
    return null;
  }
};
