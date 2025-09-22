import { VideoT } from './types';
import { getApiUrl } from '../base';

export const getVideos = async (): Promise<VideoT | null> => {
  try {
    const apiUrl = await getApiUrl();
    const res = await fetch(`${apiUrl}/v1/content-pages/video-na-glavnuiu`, {
      next: {
        revalidate: 60,
      },
    });

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);

    return null;
  }
};
