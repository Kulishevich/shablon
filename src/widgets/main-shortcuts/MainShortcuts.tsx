import React from 'react';
import s from './MainShortcuts.module.scss';
import { ShortcutCard } from '@/entities/shortcut-card/ShortcutCard';
import { TagT } from '@/shared/api/tags/types';

export const MainShortcuts = ({ tags, variant }: { tags: TagT[] | null; variant?: string }) => {
  return (
    <div className={s.container}>
      {tags?.map((tag) => <ShortcutCard tag={tag} variant={variant} key={tag.id} />)}
    </div>
  );
};
