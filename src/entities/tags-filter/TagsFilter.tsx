'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import clsx from 'clsx';
import { TagT } from '@/shared/api/tags/types';
import s from './TagsFilter.module.scss';

interface TagsFilterProps {
  tags: TagT[];
  currentPath: string;
}

export const TagsFilter: React.FC<TagsFilterProps> = ({ tags, currentPath }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTagName = searchParams.get('tags');

  const handleTagClick = (tagName: string) => {
    const params = new URLSearchParams(searchParams.toString());

    // Если кликнули на уже активный тег, убираем фильтр
    if (activeTagName === tagName) {
      params.delete('tags');
    } else {
      // Устанавливаем новый тег
      params.set('tags', tagName);
    }

    // Сбрасываем страницу на первую при изменении фильтра
    params.delete('page');
    params.delete('q');

    const newUrl = `${currentPath}${currentPath.includes('?') ? '&' : '?'}${params.toString()}`;
    router.push(newUrl);
  };

  if (!tags || tags.length === 0) {
    return null;
  }

  return (
    <div className={s.container}>
      {tags.map((tag) => {
        const isActive = activeTagName === tag.name.toString();

        return (
          <button
            key={tag.id}
            type="button"
            className={clsx(s.tag, 'h3', isActive && s.active)}
            style={{ backgroundColor: tag.color }}
            onClick={() => handleTagClick(tag.name)}
            title={`Фильтр по тегу: ${tag.name}`}
          >
            {tag.name}
          </button>
        );
      })}
    </div>
  );
};
