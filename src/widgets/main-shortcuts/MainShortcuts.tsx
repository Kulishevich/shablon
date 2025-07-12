import React from 'react';
import s from './MainShortcuts.module.scss';
import { ShortcutCard } from '@/entities/shortcut-card/ShortcutCard';
import { TagT } from '@/shared/api/tags/types';

export const MainShortcuts = ({ tags }: { tags: TagT[] | null }) => {
  return (
    <div className={s.container}>{tags?.map((tag) => <ShortcutCard {...tag} key={tag.id} />)}</div>
  );
};
