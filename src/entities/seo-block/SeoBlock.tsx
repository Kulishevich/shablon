import clsx from 'clsx';
import s from './SeoBlock.module.scss';
import { getSeoPage } from '@/shared/api/seo/getSeoPage';

export const SeoBlock = async ({
  page,
  align = 'center',
  className,
}: {
  page: string;
  align?: 'left' | 'center';
  className?: string;
}) => {
  const seoPage = await getSeoPage({ page });

  if (!seoPage) {
    return null;
  }

  return (
    <div
      className={clsx(s.container, className, {
        [s.left]: align === 'left',
        [s.tight]: align === 'left' && page === 'catalog',
      })}
      dangerouslySetInnerHTML={{ __html: seoPage.data.content }}
    />
  );
};
