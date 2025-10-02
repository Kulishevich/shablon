import Image from 'next/image';
import { Button } from '@/shared/ui/button';
import { ArrowSmLeftIcon } from '@/shared/assets';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';
import s from './NewsInfoSection.module.scss';
import { NewsT } from '@/shared/api/news/types';

export const NewsInfoSection = ({ news, storeUrl }: { news: NewsT | null; storeUrl: string }) => {
  return (
    <div className={s.container} itemScope itemType="http://schema.org/Article">
      <div className={s.titleContainer}>
        <div className={s.title}>
          <meta itemProp="datePublished" content={news?.publication_date || ''} />
          <span className="h5">
            {new Date(news?.publication_date || '').toLocaleDateString('ru-RU', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            })}
          </span>
          <h1 className="h1" itemProp="headline">
            {news?.title}
          </h1>
        </div>
        <div className={s.imageContainer}>
          <Image
            src={`${storeUrl}/${news?.photo_path}`}
            fill
            alt={`${news?.title}`}
            itemProp="image"
          />
        </div>
      </div>
      <div className={s.content}>
        <div
          className="body_2"
          itemProp="articleBody"
          dangerouslySetInnerHTML={{ __html: news?.content || '' }}
          style={{ whiteSpace: 'pre-line' }}
        />

        <Button variant="link" as={Link} href={paths.news}>
          <ArrowSmLeftIcon /> Назад к новостям
        </Button>
      </div>
    </div>
  );
};
