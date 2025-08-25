import { CategoryMaskT } from './types';
import { CategoryT } from '../category/types';
import { getApiUrl } from '../base';
import { replaceCategoryMaskTemplates } from '@/shared/lib/utils/replaceCategoryMaskTemplates';



export const geCategoryMask = async ({
  category,
}: {
  category: CategoryT;
}): Promise<CategoryMaskT | null> => {
  try {
    const apiUrl = await getApiUrl();
    const res = await fetch(`${apiUrl}/v1/meta-tags/category/${category.id}`, {
      next: {
        revalidate: 60,
      },
    });


    const data = await res.json();


    if (data) {
      const processedMask = replaceCategoryMaskTemplates(data, category);

      return processedMask;
    }


    return data;
  } catch (err) {
    console.error(err);

    return null;
  }
};
