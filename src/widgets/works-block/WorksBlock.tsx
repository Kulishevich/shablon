import clsx from 'clsx';
import s from './WorksBlock.module.scss';
import { WorkCard } from '@/entities/work-card';

export const WorksBlock = () => {
  return (
    <div className={s.container}>
      <h2 className={clsx(s.title, 'h2')}>Какие работы мы выполняем</h2>

      <div className={s.list}>
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
    </div>
  );
};
