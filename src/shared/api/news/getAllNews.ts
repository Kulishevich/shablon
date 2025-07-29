import { NewsListT } from './types';
import { getApiUrl } from '../base';

type GetAllNewsProps = {
  search?: string;
  tag?: string;
  page?: string;
  per_page?: string;
};

export const getAllNews = async ({
  search,
  tag,
  page,
  per_page = '12',
}: GetAllNewsProps): Promise<NewsListT | null> => {
  const params = new URLSearchParams();

  if (search) params.append('search', search);
  if (tag) params.append('tag', tag);
  if (page) params.append('page', page);
  if (per_page) params.append('per_page', per_page);

  const apiUrl = await getApiUrl();
  const url = `${apiUrl}/v1/news?${params.toString()}`;

  try {
    const res = await fetch(url, {
      next: {
        revalidate: 60,
      }
    });

    const { data } = await res.json();

    return data;
  } catch (err) {
    console.error(err);

    return null;
  }
};
