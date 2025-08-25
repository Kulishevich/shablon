import { ProductMaskT } from './types';
import { ProductT } from '../product/types';
import { getApiUrl } from '../base';
import { replaceProductMaskTemplates } from '@/shared/lib/utils/replaceProductMaskTemplates';



export const getProductMask = async ({
  product,
}: {
  product: ProductT;
}): Promise<ProductMaskT | null> => {
  try {
    const apiUrl = await getApiUrl();
    const res = await fetch(`${apiUrl}/v1/meta-tags/product/${product.id}`, {
      next: {
        revalidate: 60,
      },
    });


    const data = await res.json();


    if (data) {
      const processedMask = replaceProductMaskTemplates(data, product);

      return processedMask;
    }


    return data;
  } catch (err) {
    console.error(err);

    return null;
  }
};
