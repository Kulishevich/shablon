import { NewsMaskT } from './types';
import { NewsT } from '../news/types';
import { replaceNewsMaskTemplates } from '@/shared/lib/utils/replaceNewsMaskTemplates';
import { getApiUrl } from '../base';



export const getNewsMask = async ({
  news,
}: {
  news: NewsT;
}): Promise<NewsMaskT | null> => {
  try {
    const apiUrl = await getApiUrl();
    const res = await fetch(`${apiUrl}/v1/meta-tags/news/${news.id}`, {
      next: {
        revalidate: 60,
      },
    });


    const data = await res.json();


    if (data) {
      const processedMask = replaceNewsMaskTemplates(data, news);

      return processedMask;
    }


    return data;
  } catch (err) {
    console.error(err);

    return null;
  }
};
