import { ProductsResponseT } from './types';

export const getProducts = async ({
  search,
  category_id,
  popular,
  novelty,
  price_from,
  price_to,
  sort_by,
  sort_direction,
  page = '1',
  per_page = '9',
}: {
  search?: string;
  category_id?: string;
  popular?: string;
  novelty?: string;
  price_from?: string;
  price_to?: string;
  sort_by?: string;
  sort_direction?: string;
  page?: string;
  per_page?: string;
}): Promise<ProductsResponseT | null> => {
  const params = new URLSearchParams();

  if (search) params.append('search', search);
  if (category_id) params.append('category_id', category_id);
  if (popular) params.append('popular', popular);
  if (novelty) params.append('novelty', novelty);
  if (price_from) params.append('price_from', price_from);
  if (price_to) params.append('price_to', price_to);
  if (sort_by) params.append('sort_by', sort_by);
  if (sort_direction) params.append('sort_direction', sort_direction);
  if (page) params.append('page', page);
  if (per_page) params.append('per_page', per_page);

  const url = `${process.env.NEXT_PUBLIC_API_URL}/v1/products?${params.toString()}`;

  try {
    const res = await fetch(url);

    const { data } = await res.json();

    return data;
  } catch (err) {
    console.error(err);

    return null;
  }
};
