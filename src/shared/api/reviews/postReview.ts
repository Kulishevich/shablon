import { ReviewPostResponseT, ReviewPostT } from './types';
import { getApiUrl } from '../base';

export const postReview = async ({
  review,
}: {
  review: ReviewPostT;
}): Promise<ReviewPostResponseT | null> => {
  try {
    const formData = new FormData();
    formData.append('author_name', review.name);
    formData.append('title', review.title);
    formData.append('review_text', review.comment || '');
    formData.append('rating', review.rating.toString());
    if (review.photo) {
      formData.append('author_photo', review.photo);
    }

    const apiUrl = await getApiUrl();
    const res = await fetch(`${apiUrl}/v1/reviews`, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);

    return null;
  }
};
