import clsx from 'clsx';
import s from './WorksBlock.module.scss';
import { WorkCard } from '@/entities/work-card';
import { FeaturesImages } from '@/shared/api/services/types';

export const WorksBlock = ({ images, storeUrl }: FeaturesImages & { storeUrl: string }) => {
  return (
    <div className={s.container}>
      <h2 className={clsx(s.title, 'h2')}>Какие работы мы выполняем</h2>

      <div className={s.list}>
        {images.map((image) => (
          <WorkCard
            key={image.image_path}
            image={image.image_path}
            caption={image.caption}
            storeUrl={storeUrl}
          />
        ))}
      </div>
    </div>
  );
};
