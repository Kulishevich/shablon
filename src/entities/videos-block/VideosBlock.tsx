import clsx from 'clsx';
import s from './VideosBlock.module.scss';
import { getVideos } from '@/shared/api/videos/getVideos';

export const VideosBlock = async ({ className }: { className?: string }) => {
  const videos = await getVideos();

  return (
    <div className={clsx(s.container, className)}>
      <h2 className={clsx(s.title, 'h2')}>Полезное видео</h2>

      <div className={s.videos}>
        {Object.values(videos?.fields || {}).map((video, index) => (
          <div className={s.video} key={index}>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${
                video.html?.replace('<p>', '').replace('</p>', '').split('v=')[1]
              }`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};
