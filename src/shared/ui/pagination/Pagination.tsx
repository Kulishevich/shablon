'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getPaginationPages } from '@/shared/lib/getPaginationPages';
import s from './Pagination.module.scss';
import cn from 'clsx';
import { Button } from '../button';
import { Typography } from '../typography';
import { ArrowLeftIcon, ArrowRightIcon } from '../../assets';

interface Props {
  totalPages: string;
  currentPage?: string;
}

export const Pagination = ({ totalPages, currentPage = '1' }: Props) => {
  const [paginationPages, setPaginationPages] = useState<number[]>([]);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const currentPageNumber = +currentPage;
  const totalPagesNumber = +totalPages;

  function handlePageChange(page: number) {
    return () => {
      const params = new URLSearchParams(searchParams);

      params.set('page', page.toString());

      const url = `${pathname}?${params.toString()}`;
      router.push(url);
    };
  }

  useEffect(() => {
    const pages = getPaginationPages({
      currentPage: currentPageNumber,
      totalPages: totalPagesNumber,
    });

    setPaginationPages(pages);
  }, [currentPageNumber, totalPagesNumber]);

  if (totalPagesNumber < 2) {
    return <></>;
  }

  return (
    <div className={s.container}>
      <Button
        variant={'icon'}
        className={s.button}
        onClick={handlePageChange(currentPageNumber - 1)}
        disabled={currentPageNumber === 1}
      >
        <ArrowLeftIcon />
      </Button>
      <div className={s.pagination}>
        {paginationPages.map((page) => {
          const isActive = currentPageNumber == page;

          return (
            <button
              key={page}
              className={cn(isActive && s.active, s.paginationElem)}
              onClick={handlePageChange(page)}
            >
              <Typography variant="h4" as="span">
                {page}
              </Typography>
            </button>
          );
        })}
      </div>
      {currentPageNumber !== totalPagesNumber && (
        <Button
          variant={'icon'}
          className={s.button}
          onClick={handlePageChange(currentPageNumber + 1)}
        >
          <ArrowRightIcon />
        </Button>
      )}
    </div>
  );
};
