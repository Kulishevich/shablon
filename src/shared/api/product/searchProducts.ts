import { ProductT } from './types';
import { getApiUrl } from '../base';

type SearchProductsProps = {
  search: string;
  limit?: number;
};

export const searchProducts = async ({
  search,
  limit = 10,
}: SearchProductsProps): Promise<ProductT[] | null> => {
  if (!search || search.trim().length < 2) {
    return [];
  }

  const params = new URLSearchParams();
  params.append('search', search.trim());
  params.append('per_page', limit.toString());

  const apiUrl = await getApiUrl();
  const url = `${apiUrl}/v1/products/all?${params.toString()}`;

  try {
    const res = await fetch(url, {
      next: {
        revalidate: 0, // Не кешируем поисковые запросы
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const { data } = await res.json();

    return data || [];
  } catch (err) {
    console.error('Error searching products:', err);
    return null;
  }
};
