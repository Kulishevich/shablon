import { ProductT } from './types';

type GetProductsWithoutPaginationProps = {
  search?: string;
  category_id?: string;
};

export const getProductsWithoutPagination = async ({
  search,
  category_id,
}: GetProductsWithoutPaginationProps): Promise<ProductT[] | null> => {
  const params = new URLSearchParams();

  if (search) params.append('search', search);
  if (category_id) params.append('category_id', category_id);

  const url = `${process.env.NEXT_PUBLIC_API_URL}/v1/products/all?${params.toString()}`;

  try {
    const res = await fetch(url);

    const { data } = await res.json();

    return data;
  } catch (err) {
    console.error(err);

    return null;
  }
};
