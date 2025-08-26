'use client';
import { useState } from 'react';
import s from './FaqItem.module.scss';
import { FaqT } from '@/shared/api/faq/types';
import { ArrowRightUpIcon } from '@/shared/assets';
import clsx from 'clsx';
import { motion as m, AnimatePresence } from 'framer-motion';

export const FaqItem = ({ faq, defaultOpen = false }: { faq: FaqT; defaultOpen?: boolean }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <m.div layout className={s.container} onClick={() => setIsOpen(!isOpen)}>
      <m.div layout className={s.header}>
        <div className={clsx('h3', s.title)}>{faq.question}</div>
        <ArrowRightUpIcon className={clsx(s.icon, { [s.open]: isOpen })} />
      </m.div>

      <AnimatePresence>
        <m.div
          initial={{ height: '0px', opacity: 0, marginTop: '0px' }}
          animate={{
            height: isOpen ? 'auto' : '0px',
            opacity: isOpen ? 1 : 0,
            marginTop: isOpen ? '20px' : '0px',
          }}
          transition={{ duration: 0.3 }}
          className={s.content}
        >
          <div
            className={clsx('body_2', s.description)}
            dangerouslySetInnerHTML={{ __html: faq.answer }}
          />
        </m.div>
      </AnimatePresence>
    </m.div>
  );
};
